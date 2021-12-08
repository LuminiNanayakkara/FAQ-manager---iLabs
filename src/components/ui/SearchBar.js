import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "0.5rem",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  searchButton: {
    height: "3.4rem",
    textTransform: "none",
    backgroundColor: "#0D47A1",
    color: "#E1F5FE",
    "&:hover": {
      backgroundColor: "#4527A0",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={10}>
            <TextField
              id="outlined-secondary"
              label="Search..."
              variant="outlined"
              color="primary"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="#1A237E"
              fullWidth
              className={classes.searchButton}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default SearchBar;
