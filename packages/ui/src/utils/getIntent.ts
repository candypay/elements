import { DEV_API_URL } from "@/lib";
import { IData } from "@/typings/data";
import axios from "axios";

const getIntent = async (
  publicApiKey: string,
  sessionId: string
): Promise<IData> => {
  const { data } = await axios.get(`${DEV_API_URL}/api/v1/intent`, {
    headers: {
      Authorization: `Bearer ${publicApiKey}`,
    },
    params: {
      session_id: sessionId,
    },
  });

  return data;
};

export { getIntent };
