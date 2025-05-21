import { AIResponse } from "../types/ai-response";
import { records } from '../data/records';

/* get the mocked data response */
export function getMockedData(prompt: string): AIResponse {
  return {
    answer: `To fix the issue with "${prompt}", check the condition of ABC, replace if needed and see the maintenance records.`,
    maintenanceRecords: records
  };
}