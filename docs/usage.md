### basic stuff that ppl write, generic stuff

blah blah

## Installation

```bash
npm install @candypay/elements @candypay/checkout-sdk
```

## Usage

1. First, wrap your app in the `CheckoutProvider` component:

```tsx
import { CheckoutProvider } from "@candypay/elements";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CheckoutProvider
      publicApiKey={process.env[`NEXT_PUBLIC_CP_API`] as string}
    >
      <Component {...pageProps} />
    </CheckoutProvider>
  );
};

export default App;
```

2. Using the `PayElement` component:

```tsx
import { CreateIntentResponse } from "@candypay/checkout-sdk";
import axios from "axios";
import { PayElement } from "@candypay/elements";
import { toast } from "react-hot-toast";

export default function Web() {
  const intentHandler = async (): Promise<CreateIntentResponse> => {
    const res = await axios.post("/api/intent/create");
    return res.data;
  };

  return (
    <>
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
    </>
  );
}
```

3. API Handler to create the intent (using the `checkout-sdk`):

- lib/init/candypay.ts

```ts
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

export { candypay };
```

- `pages/api/intent/create.ts`

```ts
import { NextApiHandler } from "next";
import { candypay } from "../../../lib/init/candypay";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const response = await candypay.paymentIntent.create({
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
```

In the above example, `candypay` is an instance of the `CandyPay` class from the `checkout-sdk` package. The `paymentIntent.create` method returns a `CreateIntentResponse` object, which is used by the `PayElement` component to render the payment form.

## Props

### PayElement

| Prop          | Type                                  | Description                                                                                         |
| ------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| intentHandler | `() => Promise<CreateIntentResponse>` | A function that returns a `CreateIntentResponse` object. This is used to create the payment intent. |
| onSuccess     | `() => void`                          | A function that is called when the payment is successful.                                           |
| onError       | `() => void`                          | A function that is called when the payment fails.                                                   |
| theme         | `Theme`                               | Primary and secondary colors to be used for the component.                                          |

### Theme

Example theme object:

```ts
const theme = {
  primaryColor: "#ff0000",
  secondaryColor: "#0000ff",
};
```
