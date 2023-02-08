import { Flex, Grid, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IMethods, TTokens } from "@/typings";
import { MethodButton } from "../buttons/method";

const Methods: FC<IMethods> = ({ activeMethod, setActiveMethod }) => {
  const methods: TTokens[] = ["sol", "usdc", "shdw", "dust"];

  return (
    <Flex direction="column" gap="4" w="full" alignItems="center">
      <Text fontSize="md" fontWeight="500" color="#697386">
        Choose a Token
      </Text>

      <Grid
        gap="1"
        templateColumns={{
          base: "repeat(4, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        {methods.map((method) => (
          <MethodButton
            key={method}
            activeMethod={activeMethod}
            setActiveMethod={setActiveMethod}
            method={method}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export { Methods };
