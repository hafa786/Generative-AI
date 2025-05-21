import { MaintenanceRecord } from '../types/maintenance-record';

export const records: MaintenanceRecord[] = [
    {
        id: 1,
        date: '2021-12-15',
        acreg: 'OHLBA',
        description: 'Hydraulic pressure drop in mid-flight.',
        resolution: 'Replaced hydraulic pump and bled system.',
    },
    {
        id: 2,
        date: '2022-03-22',
        acreg: 'OHLDG',
        description: 'Hydraulic fluid leakage detected after landing.',
        resolution: 'Replaced leaking hose and refilled fluid.',
    },
    {
        id: 3,
        date: '2023-07-01',
        acreg: 'OHLCX',
        description: 'Unusual noise from hydraulic system during taxiing.',
        resolution: 'Tightened connections and replaced loose valve fitting.',
    },
    {
        id: 4,
        date: "2023-10-01",
        acreg: "OHLBA",
        description: "XYZ is not moving",
        resolution: "Replaced part ABC"
    },
    {
        id: 5,
        date: "2023-10-02",
        acreg: "OHLBE",
        description: "XYZ is misaligned",
        resolution: "Recalibrated ABC"
    }
];
