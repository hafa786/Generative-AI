"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
console.log('✅ Mock WebSocket server running on ws://localhost:8080');
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        try {
            const { prompt } = JSON.parse(message.toString());
            // Mocked AI answer & records (you can extend logic here)
            const response = {
                answer: `Based on your description: "${prompt}", we recommend inspecting the hydraulic pump and pressure lines.`,
                maintenanceRecords: [
                    {
                        id: 1,
                        date: '2021-12-15',
                        aircraftRegistration: 'OHLBA',
                        description: 'Hydraulic pressure drop in mid-flight.',
                        resolution: 'Replaced hydraulic pump and bled system.',
                    },
                    {
                        id: 2,
                        date: '2022-03-22',
                        aircraftRegistration: 'OHLDG',
                        description: 'Hydraulic fluid leakage detected after landing.',
                        resolution: 'Replaced leaking hose and refilled fluid.',
                    },
                    {
                        id: 3,
                        date: '2023-07-01',
                        aircraftRegistration: 'OHLCX',
                        description: 'Unusual noise from hydraulic system during taxiing.',
                        resolution: 'Tightened connections and replaced loose valve fitting.',
                    },
                ],
            };
            ws.send(JSON.stringify(response));
        }
        catch (error) {
            console.error('Error handling message:', error);
            ws.send(JSON.stringify({
                answer: 'Error processing your request.',
                maintenanceRecords: [],
            }));
        }
    });
});
