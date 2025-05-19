import React, { FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap';

interface MaintenanceRecordCardProps {
    submitHandler: (e: FormEvent<HTMLFormElement>) => void;
    inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

const ChatAssistanceForm: React.FC<MaintenanceRecordCardProps> = ({ inputValue, submitHandler, inputHandler }) => {
    return (
        <Form
            onSubmit={(e) => submitHandler(e)}
        >
            <Form.Group className="d-flex">
                <Form.Control
                    type="text"
                    value={inputValue}
                    onChange={inputHandler}
                    placeholder="Describe the technical issue..."
                />
                <Button type="submit" className="ms-2">
                    Send
                </Button>
            </Form.Group>
        </Form>
    );
};

export default ChatAssistanceForm;