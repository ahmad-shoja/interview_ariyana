import styled from "@emotion/styled";
import SimpleButton from "./simple-button";

const SimpleIconButton = styled(SimpleButton)(() => ({
  minWidth: "unset",
  aspectRatio: "1",
  paddingLeft: 0,
  paddingRight: 0,
}));

export default SimpleIconButton;
