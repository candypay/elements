import { PayElement } from "./components/main";
import { candypay } from "./components/lib/utils";
import { toast } from "sonner";

function App() {
  const createIntent = async () => {
    const response = await candypay.paymentIntent.create({
      tokens: ["shdw", "bonk"],
      items: [
        {
          name: "Test Product 1",
          image: "https://candypay.fun/assets/logo.png",
          price: 0.01,
          quantity: 1,
        },
      ],
    });

    return response;
  };

  return (
    <main className="min-h-screen w-screen flex flex-col gap-3 justify-center items-center">
      <p className="text-primary text-center">
        This is a demo of CandyPay Elements.
      </p>
      <PayElement
        intentHandler={createIntent}
        onSuccess={() => {
          toast.success("Payment successful!");
        }}
      />
    </main>
  );
}

export default App;
