import React from "react";
import '../styles/components.css'
import { Col } from "react-bootstrap";

const Header: React.FC  = () => {
    
    return(
        <div className="header p-3 text-white justify-between items-center">
        <Col md={2} className="logo">
            <a href="/">
            <img src="/images/logo.png" width={116} height={48} alt="" />
            </a>
        </Col>
      </div>
    )
}

export default Header