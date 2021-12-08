import Header from "./components/ui/Header";
import { makeStyles } from "@material-ui/core/styles";

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
      <Header />
    </div>
  );
};

export default App;
