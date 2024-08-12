import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import { accentColor, basicColor } from "./variables";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

export const inputStyle = defineMultiStyleConfig({
  baseStyle: {
    field: {
      _focus: {
        borderColor: basicColor,
      },
      _invalid: {
        borderColor: accentColor,
      },
    },
  },
  defaultProps: {
    variant: "flushed",
  },
});