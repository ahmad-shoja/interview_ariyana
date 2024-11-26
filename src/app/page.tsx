"use client";
import AppBar from "@/components/app-bar";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SimpleButton, SimpleIconButton } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import DataGrid from "@/components/ui/data-grid";
import SimpleOutlinedInput from "@/components/ui/input/simple-outlined-input";
import Select from "@/components/ui/select";
import Switch from "@/components/ui/switch";
import { getBreadcrumbSegments } from "@/data";
import { customColors } from "@/utils/custom-colors";

import {
  AssessmentOutlined,
  FullscreenRounded,
  MoreVertRounded,
  SearchOutlined,
  SettingsOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
export default function Home() {
  const dropDownOptions = [
    { value: "value_1", label: "Label_1" },
    { value: "value_2", label: "Label_2" },
  ];

  const chips = [
    { id: 4, label: "ارز: دلار ۲۰+" },
    { id: 3, label: "سند: مثال مثالی" },
    { id: 2, label: "تراکنش‌های هایلایت شده" },
    { id: 1, label: "از تاریخ: ۱۴۰۳/۱۲/۲۹" },
  ];

  const rows = [
    {
      id: 1,
      currency: "دلار",
      accountBalance: 1000000,
      debtor: "۱,۰۰۰,۰۰۰",
      creditor: "۱,۰۰۰,۰۰۰",
      creditLimit: "نامحدود",
      feeAggregation: "نامحدود",
      lastSettlement: "-",
    },
    {
      id: 2,
      currency: "یورو",
      accountBalance: -1000000,
      debtor: "۱,۰۰۰,۰۰۰",
      creditor: "۱,۰۰۰,۰۰۰",
      creditLimit: "نامحدود",
      feeAggregation: "نامحدود",
      lastSettlement: "-",
    },
    {
      id: 3,
      currency: "افغانی",
      accountBalance: 1000000,
      debtor: "۱,۰۰۰,۰۰۰",
      creditor: "۱,۰۰۰,۰۰۰",
      creditLimit: "نامحدود",
      feeAggregation: "نامحدود",
      lastSettlement: "-",
    },
  ];

  const columns: GridColDef[] = [
    { flex: 1, field: "currency", headerName: "نوع ارز", width: 120 },
    {
      flex: 1,
      field: "accountBalance",
      headerName: "باقی‌مانده حساب",
      width: 150,
      renderCell: ({ value }) => (
        <span
          style={{
            color:
              value >= 0
                ? customColors.others.green[500]
                : customColors.others.red[500],
          }}
        >
          {new Intl.NumberFormat("fa-IR").format(Math.abs(value))}
        </span>
      ),
    },
    { flex: 1, field: "debtor", headerName: "بدهکار", width: 100 },
    { flex: 1, field: "creditor", headerName: "طلبکار", width: 100 },
    { flex: 1, field: "creditLimit", headerName: "سقف اعتبار", width: 120 },
    {
      flex: 1,
      field: "feeAggregation",
      headerName: "تجمع کارمزدها",
      width: 150,
    },
    {
      flex: 1,
      field: "lastSettlement",
      headerName: "آخرین تسویه (۱۴۰۳/۰۱/۳۱)",
      width: 180,
    },
  ];

  const pageHeaderMarkup = (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack
        direction={"row"}
        gap={1}
        sx={{ flexGrow: 1 }}
        alignItems={"center"}
      >
        <Breadcrumbs segments={getBreadcrumbSegments()} />
        <Select options={dropDownOptions} label="اطلاعات حساب مرتضی فیاض" />
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

  const sectionHeaderMarkup = (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
      }}
    >
      <Stack gap={3}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={1.5} sx={{ flexGrow: 1 }}>
            <SimpleOutlinedInput
              sx={{ minWidth: "340px" }}
              placeholder="جستجو ..."
              id="input-with-icon-adornment"
              startAdornment={
                <IconButton>
                  <SearchOutlined sx={{ color: customColors.gray[200] }} />
                </IconButton>
              }
              endAdornment={
                <IconButton>
                  <TuneOutlined sx={{ color: customColors.text.secondary }} />
                </IconButton>
              }
            />
            <Stack direction={"row"} gap={1} sx={{ flexGrow: 1 }}>
              {chips.map(({ id, label }) => (
                <Chip key={id} label={label} />
              ))}
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <SimpleIconButton>
              <FullscreenRounded />
            </SimpleIconButton>
            <SimpleIconButton>
              <AssessmentOutlined />
            </SimpleIconButton>
            <SimpleIconButton>
              <SettingsOutlined />
            </SimpleIconButton>
          </Stack>
        </Stack>
        <Box
          sx={{
            backgroundColor: customColors.gray[25],
            padding: 3,
            borderRadius: 1,
          }}
        >
          <Stack gap={3}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"} gap={1}>
                <Typography fontWeight={900} color={customColors.text.primary}>
                  وضعیت حساب
                </Typography>
                <Typography
                  color={customColors.text.secondary}
                  fontWeight={500}
                >
                  (نمایش صورت حساب : 2345655767688)
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <Typography
                  fontWeight={500}
                  sx={{ fontSize: "0.75rem" }}
                  color={customColors.text.secondary}
                >
                  نمایش مختصر
                </Typography>
                <Switch defaultChecked size="small" />
                <Typography
                  sx={{ fontSize: "0.75rem" }}
                  color={customColors.text.primary}
                  fontWeight={500}
                >
                  نمایش جزییات
                </Typography>
              </Stack>
            </Stack>
            <Paper elevation={0}>
              <DataGrid
                rows={rows}
                columns={columns}
                hideFooter
                rowHeight={40}
              />
            </Paper>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );

  return (
    <main>
      <AppBar />
      <Box display="flex" flexDirection={"column"} m={3} gap={2}>
        {pageHeaderMarkup}
        <Paper elevation={2}>{sectionHeaderMarkup}</Paper>
      </Box>
    </main>
  );
}
