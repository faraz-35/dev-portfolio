import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/constants";

const useGetApi = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${apiUrl}/${url}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(response.data?.data);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const clearData = () => setData(null);

  return { data, loading, error, getData, clearData };
};

export default useGetApi;
