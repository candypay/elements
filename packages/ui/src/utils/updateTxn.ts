// import { API_URL } from "@/lib/constants";
// import axios, { AxiosRequestConfig } from "axios";
// import { IUpdateTxnProps } from "types/params.type";

// const updateTxn = async ({
//   session_id,
//   signature,
//   publicApiKey,
//   formattedAddress,
//   customer_email,
// }: IUpdateTxnProps) => {
//   const options: AxiosRequestConfig = {
//     method: "PATCH",
//     url: `${API_URL}/api/v1/session`,
//     headers: {
//       Authorization: `Bearer ${publicApiKey}`,
//     },
//     data: {
//       session_id: session_id,
//       signature: signature,
//       shipping_address: formattedAddress,
//       customer_email: customer_email,
//       timestamp: new Date().toISOString(),
//     },
//   };

//   try {
//     const res = await axios(options);

//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { updateTxn };
export {};
