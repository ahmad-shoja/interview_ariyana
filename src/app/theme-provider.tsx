"use client";

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
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
