/** @format */

import axios, { Axios, AxiosError, AxiosResponse } from "axios";

export async function get(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = (await response.json()) as unknown;
  return data;
}

export async function getAxios(url: string) {
  try {
    const { data }: AxiosResponse = await axios.get(url);
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("Error message:", err.message);
      return AxiosError;
    } else {
      console.log("Unexpected error:", err);
      return "An unexpected error ocured";
    }
  }
}
