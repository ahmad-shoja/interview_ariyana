import { customColors } from "@/utils/custom-colors";
import styled from "@emotion/styled";
import { Chip as MuiChip } from "@mui/material";

const Chip = styled(MuiChip)(() => ({
  fontWeight: 700,
  fontSize: "0.75rem",
  fontcolor: customColors.text.primary,
  borderRadius: "8px",
  backgroundColor: customColors.primary[60],
}));

export default Chip;
