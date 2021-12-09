import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "2rem",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justifyContent="space-between" className={classes.footer}>
        <Grid item>
          <Typography>copyright @ iLabs, All Right Reserved</Typography>
        </Grid>
        <Grid item>
          <Grid item container>
            <Grid item>
              <Typography>@ Privacy Policy | </Typography>
            </Grid>
            <Grid item>
              <Typography> Terms of Service | </Typography>
            </Grid>
            <Grid item>
              <Typography> Help Center</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Footer;
