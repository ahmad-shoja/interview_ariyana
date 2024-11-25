"use client";
import SimpleButton from "@/components/ui/button/simple-button";
import SimpleIconButton from "@/components/ui/button/simple-icon-button";
import TwoTunedButton from "@/components/ui/button/two-tuned-button";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@/components/ui/chip";

export default function Home() {
  return (
    <main>
      <SimpleButton>تسویه حساب</SimpleButton>
      <TwoTunedButton>تسویه حساب</TwoTunedButton>
      <TwoTunedButton endIcon={<AddIcon />}>تسویه حساب</TwoTunedButton>

      <SimpleIconButton>
        <MoreVertIcon />
      </SimpleIconButton>

      <Chip label="سلام" />

      <p>سلام</p>
    </main>
  );
}
