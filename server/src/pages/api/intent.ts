import { NextApiHandler } from "next";
import { CandyPay } from "@candypay/checkout-sdk";

const candypay = new CandyPay({
  api_keys: {
    public_api_key: process.env[`NEXT_PUBLIC_CP_API`] as string,
    private_api_key: process.env[`CANDYPAY_PRIVATE_KEY`] as string,
  },
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  try {
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

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default handler;
