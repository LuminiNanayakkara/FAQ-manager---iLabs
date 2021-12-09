import Header from "./components/ui/Header";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./components/reusable/SearchBar";
import Footer from "./components/ui/Footer";
import Table from "./components/reusable/Table";

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
      <SearchBar />
      <Table />
      <Footer />
    </div>
  );
};

export default App;
