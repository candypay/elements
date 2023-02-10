import { useState } from "react";

const useTheme = () => {
  const [colors, setColors] = useState({
    primary: "#8B55FF",
    secondary: "#FFFFFF",
  });

  return { colors, setColors };
};

export { useTheme };
