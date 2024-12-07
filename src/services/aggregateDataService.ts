import requests from "./apiService"

interface AggregateDataAdmin {
    totalCompanies: number;
    totalSessions: number;
    totalEvents: number;
    totalPhotos: number;
}

export const fetchDataAdmin = async () => {
    const response= await requests.get<AggregateDataAdmin>("Users/AggregateData");
    return response;
}