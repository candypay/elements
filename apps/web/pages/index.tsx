import { CreateIntentResponse } from "@candypay/checkout-sdk";
import axios from "axios";
import { PayElement } from "elements";
import { toast } from "react-hot-toast";

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
      <PayElement
        intentHandler={intentHandler}
        onSuccess={() => {
          console.log("success");
          toast.success("Payment successful");
        }}
        onError={() => {
          console.log("error");
          toast.error("Payment failed");
        }}
      />
    </div>
  );
}
