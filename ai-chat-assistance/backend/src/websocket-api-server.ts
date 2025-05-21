import WebSocket, { WebSocketServer } from 'ws';
import { getMockedData } from './helpers/get-mocked-data'

interface MaintenanceRecord {
  id: number;
  date: string;
  acreg: string;
  description: string;
  resolution: string;
}

interface AIResponse {
  answer: string;
  maintenanceRecords: MaintenanceRecord[];
}

const wss = new WebSocketServer({ port: 8080 });

console.log('✅ WebSocket server running on ws://localhost:8080');

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    try {
      const { prompt } = JSON.parse(message.toString());

      // Mocked AI answer & records (you can extend logic here)
      const response: AIResponse = getMockedData(prompt)

      ws.send(JSON.stringify(response));
    } catch (error) {
      console.error('Error handling message:', error);
      ws.send(
        JSON.stringify({
          answer: 'Error processing your request.',
          maintenanceRecords: [],
        }),
      );
    }
  });
});
