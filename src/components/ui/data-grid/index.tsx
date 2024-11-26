import { customColors } from "@/utils/custom-colors";
import { styled } from "@mui/material/styles";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

const DataGrid = styled(MuiDataGrid)({
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader": {
    color: customColors.text.secondary,
    fontWeight: 700,
    fontSize: "0.75rem",
  },
});
export default DataGrid;
