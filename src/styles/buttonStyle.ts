import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

import { accentColor, accentFontColor, mainFont } from "./variables";

const baseStyle = defineStyle({
  fontFamily: mainFont,
  h: "36px",
  borderRadius: "4px",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "1.31",
  letterSpacing: "-0.01em",
  px: "8px",
  py: "6px",
});

const colorButton = defineStyle({
  border: "none",
  background: `linear-gradient(0deg, ${accentColor}, ${accentColor}), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0128) 100%)`,
  color: accentFontColor,
  //   _hover: {
  //     boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  //   },
});

const translucentButton = defineStyle({
  border: "0.75px solid rgba(255, 255, 255, 0.52)",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0128) 100%)",
  color: accentFontColor,
  //   _hover: {
  //     boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  //   },
});

export const buttonStyle = defineStyleConfig({
  baseStyle,
  variants: { colorButton, translucentButton },
});
