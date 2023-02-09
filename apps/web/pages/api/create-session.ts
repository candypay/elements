import { NextApiHandler } from "next";
import { candypay } from "../../lib/init/candypay";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const response = await candypay.session.create({
    success_url: "https://candypay.fun/success",
    cancel_url: "https://candypay.fun/cancel",
    tokens: ["shdw", "bonk"],
    items: [
      {
        name: "Test Product 1",
        image: "https://candypay.fun/assets/logo.png",
        price: 0.01,
        quantity: 1,
      },
    ],
    discounts: undefined,
  });

  return res.status(200).json(response);
};

export default handler;
