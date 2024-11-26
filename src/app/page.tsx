"use client";

import AppBar from "@/components/app-bar";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SimpleButton, SimpleIconButton } from "@/components/ui/button";
import Select from "@/components/ui/select";
import { getBreadcrumbSegments } from "@/data";
import { MoreVertRounded } from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";
export default function Home() {
  const pageHeaderMarkup = (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"row"} gap={1} sx={{ flexGrow: 1 }}>
        <Breadcrumbs segments={getBreadcrumbSegments()} />
        <Select
          options={[
            { value: "value_1", label: "Label_1" },
            { value: "value_2", label: "Label_2" },
          ]}
          label="اطلاعات حساب مرتضی فیاض"
        />
      </Stack>

      <Stack direction={"row"} gap={1}>
        <SimpleIconButton>
          <MoreVertRounded />
        </SimpleIconButton>
        <SimpleButton>سقف اعتبار</SimpleButton>
        <SimpleButton>تسویه حساب</SimpleButton>
      </Stack>
    </Stack>
  );

  return (
    <main>
      <AppBar />
      <Box display="flex" flexDirection={"column"} m={3} gap={2}>
        {pageHeaderMarkup}
        <Paper elevation={2}>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </Paper>
      </Box>
    </main>
  );
}
