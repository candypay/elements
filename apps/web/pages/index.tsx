import { CreateIntentResponse } from "@candypay/checkout-sdk";
import axios from "axios";
import { PayElement } from "elements";

export default function Web() {
  const intentHandler = async (): Promise<CreateIntentResponse> => {
    const res = await axios.post("/api/intent/create");
    return res.data;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <PayElement intentHandler={intentHandler} />
    </div>
  );
}
