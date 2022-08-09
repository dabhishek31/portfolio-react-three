const appTheme = {
  color: {
    mainColor: "#121212",
    secondaryColor: "#363636",
    tertiaryColor: "#D9D9D9",
  },
  breakpoints: {
    mobile: () => "@media only screen and (max-device-width: 480px)",
    tablet: () => "@media only screen and (max-device-width: 768px)",
    laptop: () => "@media only screen and (max-device-width: 960px)",
    desktop: () => "@media only screen and (max-device-width: 1440px)",
  },
  fontWeight: {
    w400: 400,
    w500: 500,
    w700: 700,
  },
};

export default appTheme;
