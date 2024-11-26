"use client";

import { customColors } from "@/utils/custom-colors";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  direction: "rtl",
  shadows: [
    "none",
    "0px 4px 8px rgba(0, 0, 0, 0.05)",
    "0px 4px 14px rgba(0, 0, 0, 0.05)",
    "0px 4px 16px rgba(0, 0, 0, 0.05)",
    "0px 4px 18px rgba(0, 0, 0, 0.05)",
    "0px 4px 20px rgba(0, 0, 0, 0.05)",
    "0px 4px 22px rgba(0, 0, 0, 0.05)",
    "0px 4px 24px rgba(0, 0, 0, 0.05)",
    "0px 4px 26px rgba(0, 0, 0, 0.05)",
    "0px 4px 28px rgba(0, 0, 0, 0.05)",
    "0px 4px 30px rgba(0, 0, 0, 0.05)",
    "0px 4px 32px rgba(0, 0, 0, 0.05)",
    "0px 4px 34px rgba(0, 0, 0, 0.05)",
    "0px 4px 36px rgba(0, 0, 0, 0.05)",
    "0px 4px 38px rgba(0, 0, 0, 0.05)",
    "0px 4px 40px rgba(0, 0, 0, 0.05)",
    "0px 4px 42px rgba(0, 0, 0, 0.05)",
    "0px 4px 44px rgba(0, 0, 0, 0.05)",
    "0px 4px 46px rgba(0, 0, 0, 0.05)",
    "0px 4px 48px rgba(0, 0, 0, 0.05)",
    "0px 4px 50px rgba(0, 0, 0, 0.05)",
    "0px 4px 52px rgba(0, 0, 0, 0.05)",
    "0px 4px 54px rgba(0, 0, 0, 0.05)",
    "0px 4px 56px rgba(0, 0, 0, 0.05)",
    "0px 4px 58px rgba(0, 0, 0, 0.05)",
  ],
  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          margin: 0.5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "2rem",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.gray[0],
          color: customColors.gray[400],
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "inherit",
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
