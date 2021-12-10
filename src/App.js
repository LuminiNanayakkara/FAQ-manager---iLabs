import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import { makeStyles } from "@material-ui/core/styles";

import SearchBar from "./components/reusable/SearchBar";
import Footer from "./components/ui/Footer";
import Table from "./components/reusable/CustomTable";
import axios from "./components/axios/axios";
import ViewBox from "./components/reusable/ViewBox";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "#C5CAE9",
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  const [allQuestionsData, setAllQuestionsData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [clickedRowData, setClickedRowData] = useState([]);
  const [isViewBoxOpen, setIsViewBoxOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GetQuestionTableData();
  }, []);

  const GetQuestionTableData = async () => {
    try {
      const result = await axios.get("/get-questions");
      setAllQuestionsData(result.data);
      setSearchData(result.data);
    } catch (error) {
      alert("Data fetch error");
    }
  };

  const searchFunction = () => {
    const tempQuestionData = searchData;
    if (searchTerm !== "") {
      const newData = tempQuestionData.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setAllQuestionsData(newData);
    } else {
      setAllQuestionsData(searchData);
    }
  };

  //handle deactivate button click
  const handleDeactivate = async () => {
    try {
      await axios.put("/deactivate", { _id: clickedRowData._id });
      GetQuestionTableData();
    } catch (error) {
      alert("Deactivate error");
    }
  };

  //Handle delete question click
  const handleDelete = async () => {
    console.log(clickedRowData._id);
    try {
      await axios.delete(`/delete/${clickedRowData._id}`);
      GetQuestionTableData();
    } catch (error) {
      alert("Delete error");
    }
  };

  return (
    <div className={classes.app}>
      <Header GetQuestionTableData={GetQuestionTableData} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchFunction={searchFunction}
      />

      <Table
        data={allQuestionsData}
        setIsViewBoxOpen={setIsViewBoxOpen}
        setViewData={setClickedRowData}
        handleDeactivate={handleDeactivate}
        handleDelete={handleDelete}
      />
      {isViewBoxOpen && (
        <ViewBox
          open={isViewBoxOpen}
          setOpen={setIsViewBoxOpen}
          data={clickedRowData}
          setData={setClickedRowData}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
