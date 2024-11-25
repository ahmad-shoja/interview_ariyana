import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { customColors } from "@/utils/custom-colors";

const TwoTunedButton = styled(Button)(() => ({
  backgroundColor: customColors.gray[25],
  fontColor: customColors.primary[500],
  border: `1px solid ${customColors.mains.stroke}`,
  fontWeight: 700,
  height: "2rem",
  fontSize: "0.75rem",
}));

export default TwoTunedButton;
