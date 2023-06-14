import { NextApiHandler } from "next";
import { candypay } from "../../../lib/init/candypay";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
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
