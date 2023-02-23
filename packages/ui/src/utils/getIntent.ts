import { API_URL } from "@/lib";
import { IData } from "@/typings/data";
import axios, { AxiosRequestConfig } from "axios";

const getIntent = async (
  publicApiKey: string,
  intentId: string
): Promise<IData> => {
  const options: AxiosRequestConfig = {
    url: `${API_URL}/api/v1/intent`,
    headers: {
      Authorization: `Bearer ${publicApiKey}`,
    },
    params: {
      intent_id: intentId,
    },
  };
  const { data } = await axios(options);

  return data;
};

export { getIntent };
