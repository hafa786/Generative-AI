import React from "react";
import '../styles/components.css'
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        < footer className="text-dark text-center py-3">
            <Container>
                <p className="mb-0">&copy; 2025 MyApp. All rights reserved.</p>
            </Container>
        </footer >
    )
}
export default Footer;