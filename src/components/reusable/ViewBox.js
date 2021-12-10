import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    minWidth: "25rem",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const ViewBox = (props) => {
  const handleClose = () => {
    props.setOpen(false);
    props.setData([]);
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={props.open}>
        <DialogTitle onClose={handleClose}>
          Category : {props.data.category}
        </DialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            <b>Question : </b> {props.data.question}
          </Typography>
          <Typography gutterBottom>
            <b>Status : </b>
            {props.data.status}
          </Typography>
        </MuiDialogContent>
      </Dialog>
    </div>
  );
};

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default ViewBox;
