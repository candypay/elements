import { CheckoutButton, useCheckout } from "@candypay/react-checkout-sdk";
import axios from "axios";
import type { NextPage } from "next";

const Index: NextPage = () => {
  const fetchSessionId = async () => {
    const { data } = await axios.post("/api/create-session");
    return data.session_id;
  };

  const { mutate, isLoading } = useCheckout(fetchSessionId);

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center">
      <button
        className="w-36 font-body px-8 h-10 rounded-md bg-indigo-600 text-white text-[16px] hover:bg-indigo-700 grid place-items-center"
        onClick={async () => {
          await mutate();
        }}
      >
        {isLoading ? (
          <div className="h-3 w-3 bg-indigo-50 rounded-full animate-ping"></div>
        ) : (
          "Checkout"
        )}
      </button>

      <CheckoutButton handleSession={fetchSessionId} />
    </div>
  );
};

export default Index;
