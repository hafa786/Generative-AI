import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MaintenanceRecord } from '../types/MaintenanceRecord';
import { Message } from '../types/Messages';
import { ApiResponse } from '../types/APiResponse';
import MaintenanceRecordCard from '../components/MaintenanceRecordCard';
import ChatAssistanceForm from '../components/ChatAssistanceForm';
import AIMessage from '../components/AIMessage';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [problem, setProblem] = useState<string>('')
  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080'); // Change to your actual backend URL
    socket.onopen = () => console.log('WebSocket connected');
    socket.onmessage = (event) => {
      const data: ApiResponse = JSON.parse(event.data);
      const aiMsg: Message = { sender: 'ai', content: data.answer };
      setMessages((prev) => [...prev, aiMsg]);
      setMaintenanceRecords(data.maintenanceRecords);
    };
    socket.onclose = () => console.log('WebSocket closed');
    setWs(socket);

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !ws) return;
    setProblem(input)
    const userMsg: Message = { sender: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    ws.send(JSON.stringify({ prompt: input }));
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  }
  return (
    <Container fluid className="p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Row>
        <Col md={8} className="border-end">
          <h4 className="mb-3">AI Maintenance Assistant</h4>
          <div
            className="border rounded p-3 mb-3 bg-light"
            style={{ height: '60vh', overflowY: 'auto' }}
          >
            {messages.map((msg, idx) => (
              <AIMessage message={msg} idx={idx.toString()} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <ChatAssistanceForm submitHandler={submitForm} inputHandler={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} inputValue={input}  />
        </Col>
        <Col md={4}>
          <MaintenanceRecordCard maintenanceRecords={maintenanceRecords} searchKey={problem} />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
