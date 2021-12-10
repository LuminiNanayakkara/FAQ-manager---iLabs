import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import QuestionModal from "../modal/QuestionModal";

const useStyles = makeStyles((theme) => ({
  addQuestionButton: {
    textTransform: "none",
  },
  appBar: {
    backgroundColor: "#C5CAE9",
  },
  headerTitle: {
    color: "#212121",
  },
  plusIcon: {
    color: "#0D47A1",
  },
  headerContainer: {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingBottom: "2rem",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    props.GetQuestionTableData();
  };
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="space-between"
        className={classes.headerContainer}
      >
        <Grid item>
          <Typography variant="h6" className={classes.headerTitle}>
            FAQ Manager - iLabs
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon className={classes.plusIcon} />}
            className={classes.addQuestionButton}
            onClick={() => handleOpen()}
          >
            Add New Question
          </Button>
        </Grid>
      </Grid>
      <QuestionModal handleClose={handleClose} open={modalOpen} />
    </React.Fragment>
  );
};

export default Header;
