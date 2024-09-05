import axios from "axios";
import { apiUrl } from "./constants";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
};

const formatTime = (dateString?: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const formatNumber = (num: number) => {
  return num < 10 ? `0${num}` : `${num}`;
};



const formatAmount = (amount?: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(amount || 0);
};

const trackPageVisit = async (referrer: string) => {
  try {
    axios.post(`${apiUrl}/trackings/referrer/${referrer}`, { pageView: true });
  } catch (error) {}
};

export {
  formatDate,
  formatNumber,
  formatAmount,
  formatTime,
  trackPageVisit,
};
