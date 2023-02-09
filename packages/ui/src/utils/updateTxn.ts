import { DEV_API_URL } from "@/lib";
import axios, { AxiosRequestConfig } from "axios";

const updateTxn = async (
  session_id: string,
  signature: string,
  intent_secret_key: string
) => {
  const options: AxiosRequestConfig = {
    method: "PATCH",
    url: `${DEV_API_URL}/api/v1/intent`,
    headers: {
      Authorization: `Bearer ${intent_secret_key}`,
    },
    data: {
      session_id: session_id,
      signature: signature,
      timestamp: new Date().toISOString(),
    },
  };

  try {
    const res = await axios(options);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { updateTxn };
