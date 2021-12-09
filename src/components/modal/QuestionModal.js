import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: 500,
  },
  questionField: {
    width: 800,
  },
}));

const categories = [
  {
    value: "About Company",
    label: "About Company",
  },
];

export default function QuestionModal(props) {
  const classes = useStyles();

  const [category, setCategory] = useState("About Company");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  id="outlined-multiline-static"
                  label="Enter Question"
                  multiline
                  rows={4}
                  variant="outlined"
                  className={classes.questionField}
                />
              </Grid>
              <Grid item>
                <TextField
                  select
                  label="Select Category"
                  value={category}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  fullWidth
                >
                  {categories.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
                <center>
                  <Button variant="contained">Add Question</Button>
                </center>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
