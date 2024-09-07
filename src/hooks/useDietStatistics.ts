import { useContext } from "react";
import { DietStatisticsContext } from "@/contexts/StatisticsContext";

export function useDietStatistics() {
  return useContext(DietStatisticsContext)
}