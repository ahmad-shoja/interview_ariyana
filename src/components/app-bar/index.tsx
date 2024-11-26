import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { AddRounded, StarBorderOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { TwoTunedButton } from "../ui/button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  flexGrow: 1,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" elevation={1} >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBase
              sx={{ fontWeight: "900" }}
              placeholder="دسترسی سریع  به صفحات"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Stack
            direction={"row"}
            spacing={1.5}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Stack direction={"row"} spacing={1}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="settings"
              >
                <StarBorderOutlined />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="settings"
              >
                <SettingsOutlinedIcon />
              </IconButton>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <TwoTunedButton>ثبت تیکت</TwoTunedButton>
              <TwoTunedButton startIcon={<AddRounded />}>
                ۵,۴۳۵,۰۰۰ تومان
              </TwoTunedButton>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <AppsRoundedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
