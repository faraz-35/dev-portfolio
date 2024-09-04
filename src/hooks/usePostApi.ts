import { useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/constants";

const usePostApi = (url: string, method: "post" | "patch" = "post") => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body: any) => {
    setLoading(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios[method](`${apiUrl}/${url}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(response.data?.data);
      setError(null);
      return response.data?.data;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const clearData = () => setData(null);

  return { data, loading, error, postData, clearData };
};

export default usePostApi;
