import React from "react";
import '../styles/components.css'
import { Button } from "react-bootstrap";

type PrimaryButtonProps = {
    children: string;
    onClick: () => void
}
export const CustomPrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
    return (
      <Button
        onClick={onClick}
        className="custom-primary-btn"
      >
        <i className="bi bi-chat-dots-fill"></i> {children}
      </Button>
    );
  };
  
