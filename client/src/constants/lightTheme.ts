export interface ThemeType {
  colors: {
    company: string;
    primary: string;
    primarySuperLight: string; // Very light primary for highlights
    primaryLight: string; // Lighter primary for backgrounds/highlights
    primaryMedium: string; // Mid-tone primary
    primaryStrong: string; // Darker primary for text/borders
    secondary: string;
    secondaryLight: string;
    secondaryMedium: string;
    secondaryStrong: string;
    background: string; // Main app background
    backgroundSecondary: string; // E.g., tab bar background, slightly different from main
    backgroundCard: string; // Background for cards/sections
    backgroundProgressUnfilled: string; // Color for the unfilled part of progress bars
    textPrimary: string; // Main text color
    textSecondary: string; // Subtitle/helper text color
    accent: string; // General accent color (can be primary)
    accentLight: string;
    accentStrong: string;
    success: string; // Specifically for success indicators (often same as primary)
    successLight: string;
    successStrong: string;
    warning: string;
    warningLight: string;
    warningStrong: string;
    error: string;
    errorLight: string;
    errorStrong: string;
    buttonGradientStart: string; // For gradient buttons (e.g., FAB)
    buttonGradientEnd: string;
    inputBackground: string; // Background for input fields
    border: string; // General border color
    iconColor: string; // Default icon color (e.g., unselected icons)
    googleButton: string;
    appleButton: string;
    activeTab: string; // Background/overlay for active tab item
    inactiveTab: string; // Background/overlay for inactive tab item
    activeTabText: string; // Text/icon color for active tab
    inactiveTabText: string; // Text/icon color for inactive tab
    cardButtonBorder: string; // Border for buttons within cards (e.g., Resume, Pause)
  };
  typography: {
    fontFamilyRoboto: string;
    fontFamilyGloock: string;
    fontFamilyInter: string;
    fontFamilyInterSemiBold: string;
    fontFamilyPoppins: string;
    // No size suffix (default fonts)
    fontFamilyDMBlack: string;
    fontFamilyDMExtraBold: string;
    fontFamilyDMBold: string;
    fontFamilyDMSemiBold: string;
    fontFamilyDMMedium: string;
    fontFamilyDMRegular: string;
    fontFamilyDM: string; // alias for Regular
    fontFamilyDMLight: string;
    fontFamilyDMExtraLight: string;
    fontFamilyDMThin: string;

    // 18pt fonts
    fontFamilyDMBlack18: string;
    fontFamilyDMExtraBold18: string;
    fontFamilyDMBold18: string;
    fontFamilyDMSemiBold18: string;
    fontFamilyDMMedium18: string;
    fontFamilyDMRegular18: string;
    fontFamilyDMLight18: string;
    fontFamilyDMExtraLight18: string;
    fontFamilyDMThin18: string;

    // 24pt fonts
    fontFamilyDMBlack24: string;
    fontFamilyDMBold24: string;
    fontFamilyDMSemiBold24: string;
    fontFamilyDMMedium24: string;
    fontFamilyDMRegular24: string;
    fontFamilyDMLight24: string;
    fontFamilyDMExtraLight24: string;
    fontFamilyDMThin24: string;

    // 36pt fonts
    fontFamilyDMBlack36: string;
    fontFamilyDMExtraBold36: string;
    fontFamilyDMSemiBold36: string;
    fontFamilyDMRegular36: string;
    fontFamilyDMLight36: string;
    fontFamilyDMExtraLight36: string;
    fontFamilyDMThin36: string;
    fontSizes: {
      numericalHeading: number;
      largeHeading: number;
      mediumHeading: number;
      smallHeading: number;
      bodyLarge: number;
      body: number;
      bodySmall: number;
      caption: number;
    };
    fontWeight: {
      bold: string;
      hundred: number;
      twohundred: number;
      threehundred: number;
      fourhundred: number;
      fivehundred: number;
      sixhundred: number;
      sevenhundred: number;
      eighthundred: number;
      ninehundred: number;
    };
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
  shapes: {
    borderRadius: number;
    cardElevation: number;
  };
  states: {
    hoverOpacity: number; // For interactive elements on press/hover
    disabledOpacity: number; // For disabled elements
  };
}

export const lightTheme: ThemeType = {
  colors: {
    company: "rgba(8, 47, 78, 1)",
    primary: "rgb(213, 61, 49)", //
    primarySuperLight: "rgb(234, 153, 62)",
    primaryLight: "rgb(207, 124, 53)", //
    primaryMedium: "rgb(223, 105, 53)", //
    primaryStrong: "rgb(215, 73, 50)", //

    secondary: "rgba(168,168,168,1)", // #A8A8A8
    secondaryLight: "rgba(232,232,232,1)", // #E8E8E8
    secondaryMedium: "rgba(89,89,89,1)", // #595959
    secondaryStrong: "rgba(33,33,33,1)", // #212121xqxxq

    background: "rgb(255, 255, 255)", // White
    backgroundSecondary: "rgb(250, 250, 250)", // Assumed neutral bg
    backgroundCard: "rgb(245, 245, 245)", //
    backgroundProgressUnfilled: "rgb(232, 232, 232)", // #D1E0D3-like

    textPrimary: "rgba(33,33,33,1)",
    textSecondary: "rgba(89,89,89,1)",

    accent: "rgba(11,153,177,1)",
    accentLight: "rgba(163,229,227,1)",
    accentStrong: "rgba(0,94,119,1)",

    success: "rgba(0,200,107,1)",
    successLight: "rgba(164,255,177,1)",
    successStrong: "rgba(0,99,47,1)",

    warning: "rgba(239,191,96,1)",
    warningLight: "rgba(255,221,65,1)",
    warningStrong: "rgba(104,70,15,1)",

    error: "rgba(237,83,62,1)",
    errorLight: "rgba(255,147,136,1)",
    errorStrong: "rgba(107,7,0,1)",

    buttonGradientStart: "rgba(193,245,109,1)",
    buttonGradientEnd: "rgba(200,245,124,1)",

    inputBackground: "rgba(247,247,247,1)",
    border: "rgba(224,224,224,1)",
    iconColor: "rgba(102,102,102,1)",

    googleButton: "rgba(255,255,255,1)",
    appleButton: "rgba(255,255,255,1)",

    activeTab: "rgba(0,0,0,0)",
    inactiveTab: "rgba(0,0,0,0)",
    activeTabText: "rgba(0,200,107,1)",
    inactiveTabText: "rgba(102,102,102,1)",
    cardButtonBorder: "rgba(176,176,176,1)",
  },

  typography: {
    fontFamilyDM: "DMSans",
    fontFamilyRoboto: "Roboto_400Regular",
    fontFamilyGloock: "Gloock",
    fontFamilyInter: "Inter",
    fontFamilyInterSemiBold: "Inter_600SemiBold",
    fontFamilyPoppins: "Poppins",
    // No size suffix (default fonts)
    fontFamilyDMBlack: "DMSansBlack",
    fontFamilyDMExtraBold: "DMSansExtraBold",
    fontFamilyDMBold: "DMSansBold",
    fontFamilyDMSemiBold: "DMSansSemiBold",
    fontFamilyDMMedium: "DMSansMedium",
    fontFamilyDMRegular: "DMSansRegular",
    fontFamilyDMLight: "DMSansLight",
    fontFamilyDMExtraLight: "DMSansExtraLight",
    fontFamilyDMThin: "DMSansThin",

    // 18pt fonts
    fontFamilyDMBlack18: "DMSans_18pt_Black",
    fontFamilyDMExtraBold18: "DMSans_18pt_ExtraBold",
    fontFamilyDMBold18: "DMSans_18pt_Bold",
    fontFamilyDMSemiBold18: "DMSans_18pt_SemiBold",
    fontFamilyDMMedium18: "DMSans_18pt_Medium",
    fontFamilyDMRegular18: "DMSans_18pt_Regular",
    fontFamilyDMLight18: "DMSans_18pt_Light",
    fontFamilyDMExtraLight18: "DMSans_18pt_ExtraLight",
    fontFamilyDMThin18: "DMSans_18pt_Thin",

    // 24pt fonts
    fontFamilyDMBlack24: "DMSans_24pt_Black",
    fontFamilyDMBold24: "DMSans_24pt_Bold",
    fontFamilyDMSemiBold24: "DMSans_24pt_SemiBold",
    fontFamilyDMMedium24: "DMSans_24pt_Medium",
    fontFamilyDMRegular24: "DMSans_24pt_Regular",
    fontFamilyDMLight24: "DMSans_24pt_Light",
    fontFamilyDMExtraLight24: "DMSans_24pt_ExtraLight",
    fontFamilyDMThin24: "DMSans_24pt_Thin",

    // 36pt fonts
    fontFamilyDMBlack36: "DMSans_36pt_Black",
    fontFamilyDMExtraBold36: "DMSans_36pt_ExtraBold",
    fontFamilyDMSemiBold36: "DMSans_36pt_SemiBold",
    fontFamilyDMRegular36: "DMSans_36pt_Regular",
    fontFamilyDMLight36: "DMSans_36pt_Light",
    fontFamilyDMExtraLight36: "DMSans_36pt_Thin",
    fontFamilyDMThin36: "DMSans_36pt_ExtraLight",

    fontSizes: {
      numericalHeading: 30,
      largeHeading: 28,
      mediumHeading: 22,
      smallHeading: 20,
      bodyLarge: 18,
      body: 15,
      bodySmall: 12,
      caption: 11,
    },

    fontWeight: {
      bold: "bold",
      hundred: 100,
      twohundred: 200,
      threehundred: 300,
      fourhundred: 400,
      fivehundred: 500,
      sixhundred: 600,
      sevenhundred: 700,
      eighthundred: 800,
      ninehundred: 900,
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  shapes: {
    borderRadius: 8,
    cardElevation: 6,
  },
  states: {
    hoverOpacity: 0.85,
    disabledOpacity: 0.6,
  },
};

export const darkTheme: ThemeType = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,

    company: "rgba(8, 47, 78, 1)",
    primary: "rgb(213, 61, 49)", //
    primarySuperLight: "rgb(234, 153, 62)",
    primaryLight: "rgb(207, 124, 53)", //
    primaryMedium: "rgb(223, 105, 53)", //
    primaryStrong: "rgb(215, 73, 50)", //

    background: "rgba(21,21,34,1)",
    backgroundSecondary: "rgb(33, 33, 53)",
    backgroundCard: "rgba(43,43,61,1)",
    backgroundProgressUnfilled: "rgba(75,75,96,1)",

    textPrimary: "rgba(236,237,238,1)",
    textSecondary: "rgba(170,170,170,1)",

    accent: "rgba(39,216,107,1)",
    accentLight: "rgba(120,255,178,1)",
    accentStrong: "rgba(18,108,53,1)",

    success: "rgba(39,216,107,1)",
    successLight: "rgba(120,255,178,1)",
    successStrong: "rgba(18,108,53,1)",

    warning: "rgba(255,200,0,1)",
    warningLight: "rgba(255,227,77,1)",
    warningStrong: "rgba(163,127,0,1)",

    error: "rgba(255,87,51,1)",
    errorLight: "rgba(255,153,128,1)",
    errorStrong: "rgba(163,44,26,1)",

    buttonGradientStart: "rgba(39,216,107,1)",
    buttonGradientEnd: "rgba(39,216,107,1)",

    inputBackground: "rgba(58,58,77,1)",
    border: "rgba(59,59,75,1)",
    iconColor: "rgba(170,170,170,1)",

    googleButton: "rgba(66,133,244,1)",
    appleButton: "rgba(255,255,255,1)",

    activeTab: "rgba(0,0,0,0)",
    inactiveTab: "rgba(0,0,0,0)",
    activeTabText: "rgba(39,216,107,1)",
    inactiveTabText: "rgba(170,170,170,1)",
    cardButtonBorder: "rgba(90,90,112,1)",
  },
  shapes: {
    borderRadius: 12,
    cardElevation: 4,
  },
};

export default lightTheme; // You can change this to darkTheme if dark is your default
