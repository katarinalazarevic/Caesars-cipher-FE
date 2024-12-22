import requests from "./apiService"

export const encodeSentence = async (sentence: string, shift: number, language: string) => {
    const response = await requests.get<string>("Ispit/Encode", {
        sentence,
        shift,
        language,
    });
    return response;
};

export const allEncodeSentence = async (sentence: string, language: string) => {
    const response = await requests.get<string[]>("Ispit/All-encoded", {
        sentence,
        language,
    });
    return response;
};