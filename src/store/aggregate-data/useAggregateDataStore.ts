import { fetchDataAdmin } from "src/services/aggregateDataService";
import { create } from "zustand";

export interface AggregateData {
  totalCompanies: number;
  totalSessions: number;
  totalEvents: number;
  totalPhotos: number;
  fetchData: () => Promise<void>;
}

export const useAggregateDataStore = create<AggregateData>((set, get) => ({
  totalCompanies: 0,
  totalSessions: 0,
  totalEvents: 0,
  totalPhotos: 0,
  fetchData: async () => {
    const data = await fetchDataAdmin();
    set({
      totalCompanies: data.totalCompanies,
      totalSessions: data.totalSessions,
      totalEvents: data.totalEvents,
      totalPhotos: data.totalPhotos,
    });
  },
}));
