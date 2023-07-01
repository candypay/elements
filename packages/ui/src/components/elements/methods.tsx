import { IMethods } from "@/typings";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MethodButton } from "../buttons/method";

const Methods: FC<IMethods> = ({
  activeMethod,
  setActiveMethod,
  methods,
  theme,
}) => {
  return (
    <Flex direction="column" gap="3" w="full">
      <Text fontSize="md" fontWeight="500" color="#697386" textAlign="left">
        Choose a Token
      </Text>

      <Grid
        gap="2"
        templateColumns={
          methods.length >= 4 ? "repeat(4, 1fr)" : `repeat(${methods.length}, 1fr)`
        }
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
            theme={theme}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export { Methods };
