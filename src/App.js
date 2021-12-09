import Header from "./components/ui/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SearchBar from "./components/reusable/SearchBar";
import Footer from "./components/ui/Footer";
import Table from "./components/reusable/CustomTable";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "#C5CAE9",
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item>
          <Table />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
