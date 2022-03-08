import React, { useState, useRef, useEffect } from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  Box,
  Badge,
  ButtonGroup,
  Typography,
  Paper,
  Avatar,
  Stack,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import MailIcon from "@mui/icons-material/Mail";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";


export default function MediaCard() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div>
      <Card>
        <Grid direction="row">
          <Grid item spacing={4} direction="column" alignItems="center">
            <Box
            style={{marginTop: "10px"}}
             sx={{alignItems: "flex-end" }}
            >
              <div>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Badge color="secondary" badgeContent={count}>
                    <MailIcon />
                  </Badge>
                  <Button
                    aria-label="increase"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
            </Box>
          </Grid>
          <Grid direction="col" alignItems="left" item spacing={8}>
            <CardContent >
              <div>
                {" "}  <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <spam style={{ fontWeight: "bold" }}>amyrobson</spam> 1 mouth
                ago
                <div style={{ textAlign: "right" }}>
                  <Button size="small" color="error" onClick={handleClickOpen}>
                    <DeleteOutlinedIcon />
                    Delete
                  </Button>
                  <Button size="small">
                    <EditIcon />
                    Edit
                  </Button>
                </div>
              </div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {" Delete comment "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                   
                    Are you sure you want to delete this comment?
                    This will remove the comment and can't be undone
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} >NO, CANCEL</Button>
                  <Button onClick={handleClose} autoFocus color="error">
                    YES, DELETED
                  </Button>
                </DialogActions>
              </Dialog>
              <Typography variant="body2" color="text.secondary">
                Impressive Though it seems the drag feature could be improved.
                But overall it looks incredible. You've nailed the design and
                the responsiveness at various breakpoints works really wel.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <br />
    </div>
  );
}
