import { customColors } from "@/utils/custom-colors";
import styled from "@emotion/styled";
import { Switch as MuiSwitch } from "@mui/material";

const Switch = styled(MuiSwitch)(() => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: customColors.primary[500],
    },
  },

  "& .MuiSwitch-track": {
    backgroundColor: "rgba(190, 227, 249, 1)",
  },
}));

export default Switch;
