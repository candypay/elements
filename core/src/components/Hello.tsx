import type { FC } from "react";

const Hello: FC<{
  name: string;
  greeting: string;
}> = ({ greeting, name }) => {
  return (
    <h1>
      {greeting}, {name}!
    </h1>
  );
};

export { Hello };
