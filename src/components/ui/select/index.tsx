import { customColors } from "@/utils/custom-colors";
import styled from "@emotion/styled";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";
import React from "react";

type OptionType = {
  label: string;
  value: string;
};
type PropTypes = SelectProps & {
  options: OptionType[];
  onChange?: (value: string) => void;
};

const SimpleSelect = styled(MuiSelect)(() => ({
  backgroundColor: "white",
  border: `1px solid ${customColors.mains.stroke}`,
  fontWeight: 900,
  color: customColors.text.primary,
  fontSize: "0.75rem",
  height: "2rem",
}));

export default function Select({ onChange, options, ...props }: PropTypes) {
  return (
    <FormControl size="small" sx={{ minWidth: "180px" }}>
      <InputLabel
        id="demo-simple-select-label"
        sx={{ fontSize: "0.812rem", fontWeight: 900 }}
      >
        {props.label}
      </InputLabel>
      <SimpleSelect {...props} onChange={onChange}>
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </SimpleSelect>
    </FormControl>
  );
}
