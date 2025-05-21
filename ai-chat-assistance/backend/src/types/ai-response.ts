import { MaintenanceRecord } from "./maintenance-record";

export type AIResponse = {
    answer: string;
    maintenanceRecords: MaintenanceRecord[];
}
