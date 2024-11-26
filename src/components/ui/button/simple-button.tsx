import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { customColors } from "@/utils/custom-colors";

const SimpleButton = styled(Button)(() => ({
  backgroundColor: "white",
  border: `1px solid ${customColors.mains.stroke}`,
  fontWeight: 900,
  color: customColors.text.secondary,
  fontSize: "0.75rem",
}));

export default SimpleButton;
