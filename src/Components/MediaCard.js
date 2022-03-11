import React, { useState, useRef, useEffect } from "react";

import {
  Card,
  Button,
  Box,
  Badge,
  ButtonGroup,
  Typography,
  Grid,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import MailIcon from "@mui/icons-material/Mail";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ReplyComponent from "./ReplyComponent";

export default function MediaCard({ cardData, handleDelete }) {
  const [count, setCount] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState(cardData)
  
  const handleClose = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card>
        <Grid item xs={6} md={8}>
          <span>
            <ButtonGroup className="rating">
              <Button
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Badge color="secondary" badgeContent={count}>
                <MailIcon style={{marginLeft:"7px"}} />
              </Badge>
              <Button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </span>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <span style={{ fontWeight: "bold" }}>{cardData.user.username}</span>
          {cardData.createdAt}
          <br />
          <div>
            <div className="comment">{cardData.content}</div>
            <Button onClick={handleClose}>Reply</Button>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "right" }}
            ></Typography>
            {cardData.replies.map((reply) => {
              return (
                <ReplyComponent
                  key={reply.id}
                  reply={reply}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
        </Grid>
      </Card>
      <br />
    </div>
  );
}
