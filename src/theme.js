const sharedTokens = {
  colorPrimary: "#f26622",
  colorInfo: "#f26622",
  borderRadius: 4,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  sizeStep: 4,
  sizeUnit: 4,
};

const lightTheme = {
  token: {
    ...sharedTokens,
    colorBgContainer: "#ffffff",
    colorBgElevated: "#f1f0e9",
    colorBgLayout: "#faf9f5",
    colorText: "#44403c",
    colorTextHeading: "#1d1626",
    colorBorder: "#e3dec3",
    colorLink: "#f26622",
    colorLinkHover: "#d45512",
    colorPrimaryHover: "#d45512",
    colorPrimaryActive: "#b3440d",
  },
  components: {
    Button: {
      primaryShadow: "0 4px 12px rgba(29, 22, 38, 0.03)",
      fontWeight: 700,
      controlHeight: 48,
      fontSize: 12,
      letterSpacing: "1px",
    },
    Card: {
      paddingLG: 48,
    },
    Tag: {
      fontSize: 11,
      lineHeight: "20px",
    },
    Input: {
      controlHeight: 52,
      colorBgContainer: "#f1f0e9",
    },
    Form: {
      labelFontSize: 11,
      labelColor: "#1d1626",
    },
  },
};

const darkTheme = {
  token: {
    ...sharedTokens,
    colorBgContainer: "#141414",
    colorBgElevated: "#0a0a0a",
    colorBgLayout: "#000000",
    colorText: "#b3b3b3",
    colorTextHeading: "#ffffff",
    colorBorder: "#242424",
    colorLink: "#f26622",
    colorLinkHover: "#ff8533",
    colorPrimaryHover: "#ff8533",
    colorPrimaryActive: "#d45512",
  },
  components: {
    Button: {
      primaryShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
      fontWeight: 700,
      controlHeight: 48,
      fontSize: 12,
      letterSpacing: "1px",
    },
    Card: {
      paddingLG: 48,
    },
    Tag: {
      fontSize: 11,
      lineHeight: "20px",
    },
    Input: {
      controlHeight: 52,
      colorBgContainer: "#0a0a0a",
    },
    Form: {
      labelFontSize: 11,
      labelColor: "#ffffff",
    },
  },
};

export { lightTheme, darkTheme };
