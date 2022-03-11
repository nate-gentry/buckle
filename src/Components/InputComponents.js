import * as React from "react";
import { Card, Box, TextField, Button } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function InputComponent({ref,handleAdd}) {
  return (
    <Card>
    <Box sx={{ "& > :not(style)": { m: 2 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="fullWidth"
          label="Type here"
          variant="outlined"
          width="500px"
        />
      <Button  onClick={handleAdd} sx={{  margin: "10px",display: "flex", alignItems: "flex-end" }}variant="contained">Send</Button>
      </Box>
    </Box></Card>
  );
}
