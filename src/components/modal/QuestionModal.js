import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import axios from "../axios/axios";

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
  const [question, setQuestion] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFormData = async () => {
    const data = {
      question,
      category,
    };
    try {
      const result = await axios.post("/add-question", data);
      console.log(result);
      setQuestion("");
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
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
                  inputProps={{ maxLength: 200 }}
                  required
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
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
                  <Button variant="contained" onClick={() => handleFormData()}>
                    Add Question
                  </Button>
                </center>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
