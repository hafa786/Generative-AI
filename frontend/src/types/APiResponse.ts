import { MaintenanceRecord } from "./MaintenanceRecord";

export interface ApiResponse {
    answer: string;
    maintenanceRecords: MaintenanceRecord[];
  }
  