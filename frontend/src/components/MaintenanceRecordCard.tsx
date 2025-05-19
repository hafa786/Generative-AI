import React from 'react';
import { MaintenanceRecord } from '../types/MaintenanceRecord';
import { Card } from 'react-bootstrap';

interface MaintenanceRecordCardProps {
  maintenanceRecords: MaintenanceRecord[];
  searchKey: string
}

const MaintenanceRecordCard: React.FC<MaintenanceRecordCardProps> = ({ maintenanceRecords, searchKey }) => {
  return (
    <><h5 className="mb-3">Relevant Maintenance Actions {searchKey}</h5><div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
      {maintenanceRecords?.filter(records => records.description.includes(searchKey)).map((records) => (
        <Card className="mb-3" key={records.id}>
          <Card.Body>
            <Card.Title className="text-dark">{records.acreg} - {records.date}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">#{records.id}</Card.Subtitle>
            <Card.Text>
              <strong>Issue:</strong> {records.description}<br />
              <strong>Resolution:</strong> {records.resolution}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div></>
  );
};

export default MaintenanceRecordCard;