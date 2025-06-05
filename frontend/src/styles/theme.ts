import { colors } from "~/constants";

export const theme = {
  token: {
    colorPrimary: colors.accentOrange,
    colorLink: colors.accentOrange,
    colorLinkHover: colors.btnHover.primary,
  },
  components: {
    Input: {
      colorPrimary: colors.accentOrange,
      activeBorderColor: colors.accentOrange,
      hoverBorderColor: colors.accentOrange,
    },
    Select: {
      colorPrimary: colors.accentOrange,
      optionSelectedColor: colors.accentOrange,
    },
  },
};
