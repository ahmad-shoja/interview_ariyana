"use client";

import {
  SimpleButton,
  SimpleIconButton,
  TwoTunedButton,
} from "@/components/ui/button";
import SettingsIcon from "@mui/icons-material/Settings";
import Chip from "@/components/ui/chip";
import AppBar from "@/components/app-bar";
export default function Home() {
  return (
    <main>
      <AppBar/>
      <div style={{ display: "flex", gap: "3px", padding: "16px" }}>
        <SimpleButton>دکمه معمولی</SimpleButton>
        <SimpleIconButton>
          <SettingsIcon />
        </SimpleIconButton>
        <TwoTunedButton>دکمه 2 رنگ</TwoTunedButton>
        <Chip label="گزینه 1" />
      </div>
    </main>
  );
}
