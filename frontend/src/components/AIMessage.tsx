import React from "react";
import '../styles/components.css'

type AIMessageProps = {
    message: { sender: string, content: string },
    idx: string
}

const AIMessage: React.FC<AIMessageProps> = ({ message, idx }) => {
    return (
        <div
            key={idx}
            className={`mb-2 p-2 rounded ${message.sender === 'user' ? 'bg-dark text-white' : 'bg-white border'}`}
            style={{ maxWidth: '75%', alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}
        >
            <strong>{message.sender === 'user' ? 'You' : 'AI'}:</strong> {message.content}
        </div>
    )
}

export default AIMessage