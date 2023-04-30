import "./App.css";
import { PayElement } from "./components/main";
import { candypay } from "./lib/utils";

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
    <main>
      <PayElement intentHandler={createIntent} />
    </main>
  );
}

export default App;
