import { ITheme } from "@/typings";
import { useMemo } from "react";

const useTheme = (theme: ITheme) => {
  const cols = useMemo(() => {
    if (!theme)
      return {
        primary: "#8B55FF",
        secondary: "#FFFFFF",
      };
    const { primaryColor, secondaryColor } = theme;
    return {
      primary: primaryColor,
      secondary: secondaryColor,
    };
  }, [theme]);

  return cols;
};

export { useTheme };
