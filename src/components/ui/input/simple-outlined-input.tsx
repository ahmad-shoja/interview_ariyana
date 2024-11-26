import { customColors } from "@/utils/custom-colors";
import styled from "@emotion/styled";
import { OutlinedInput, OutlinedInputProps } from "@mui/material";

const StyledOutlinedInput = styled(OutlinedInput)(({}) => ({
  height: "2rem",
  fontWeight: 900,
  fontSize: "0.75rem",
  fontColor: customColors.gray[300],
}));

export default function SimpleOutlinedInput(props: OutlinedInputProps) {
  return <StyledOutlinedInput {...props} size="small" />;
}
