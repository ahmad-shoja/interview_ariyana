import React from "react";
import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import { BreadcrumbsSegmentType } from "@/types";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { customColors } from "@/utils/custom-colors";

type PropTypes = {
  segments: BreadcrumbsSegmentType[];
};
export default function Breadcrumbs({ segments }: PropTypes) {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      separator={
        <KeyboardArrowLeftRounded sx={{ color: customColors.text.tertiary }} />
      }
    >
      {segments.map(({ title, href }, index) =>
        href ? (
          <Link key={index} href={href}>
            {title}
          </Link>
        ) : (
          <Typography
            key={index}
            sx={{ color: customColors.text.tertiary, fontSize: "0.875rem" }}
          >
            {title}
          </Typography>
        )
      )}
    </MuiBreadcrumbs>
  );
}
