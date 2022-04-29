import * as React from "react";
import Button from "@mui/material/Button";

function BasicButtons({ title , handleAction}) {
  return <Button variant="contained" onClick={handleAction}>{title}</Button>;
}

export default BasicButtons;
