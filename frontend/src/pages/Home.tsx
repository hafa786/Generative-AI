import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages.css'
import { CustomPrimaryButton } from '../components/Buttons';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handle = () => navigate('/chat-assistance')
  return (
    <div className="home" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className='text-content'>
        <p>Finnair’s AI chat assistance offers passengers a seamless and efficient way to access travel information and support services around the clock. Designed to enhance the customer experience, the AI assistant can handle common queries such as flight schedules, booking modifications, baggage policies, and real-time travel updates. By leveraging natural language processing, the chat service understands and responds to customer questions in a conversational, human-like manner across multiple languages. This not only reduces wait times and improves satisfaction but also allows Finnair's human support staff to focus on more complex issues. The AI assistant reflects Finnair’s commitment to innovation, efficiency, and superior customer care in modern air travel.</p>
        Need AI assistance? <CustomPrimaryButton onClick={handle} children='Chat'/>
      </div>
    </div>
  );
};

export default Home;
