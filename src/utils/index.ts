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

const isSameMonth = (date1: string, date2: string) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
  );
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
  isSameMonth,
  formatAmount,
  formatTime,
  trackPageVisit,
};
