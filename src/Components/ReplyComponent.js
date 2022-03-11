import React from "react";
import DeleteDialog from "./DeleteDialog";
import AccountCircle from "@mui/icons-material/AccountCircle";

import {
  Card,
  Button,
} from "@mui/material";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

export default function ReplyComponent({ reply, handleDelete }) {
  const [open, setOpen] = React.useState(true);

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(false);
  };
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="reply">
      <Card
        style={{
          border: "solid 3px",
          margin: "10px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "right",
        }}
      >
        {open ? (
          <Button onClick={handleClose}>Reply</Button>
        ) : (
          <div>
            <Button size="small" color="error" onClick={handleClickOpenDialog}>
              <DeleteOutlinedIcon />
              Delete
            </Button>
            <Button size="small">
              <EditIcon />
              Edit
            </Button>
          </div>
        )}
        <DeleteDialog
          handleClickOpen={handleClickOpenDialog}
          handleCloseDialog={handleCloseDialog}
          openDialog={openDialog}
          handleDelete={handleDelete}
        />
        <AccountCircle />
        <p style={{ textAlign: "left" }}>replying To {reply.replyingTo}</p>
        <p>{reply.content}</p>
      </Card>
    </div>
  );
}
