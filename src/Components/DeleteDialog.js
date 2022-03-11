import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DeleteDialog({
  handleClickOpen,
  handleCloseDialog,
  openDialog,
  handleDelete,
  
}) {
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" Delete comment "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>NO, CANCEL</Button>
          <Button onClick={handleDelete} autoFocus color="error">
            YES, DELETED
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
