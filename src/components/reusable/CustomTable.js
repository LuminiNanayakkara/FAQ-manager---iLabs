import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CustomTableHead from "./CustomTableHead";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "96.5%",
    marginLeft: "2rem",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  statusButton: {
    textTransform: "none",
    width: "6rem",
  },
  publishButton: {
    textTransform: "none",
    width: "6rem",
    backgroundColor: "#4CAF50",
  },
}));

const CustomTable = (props) => {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleView = (data) => {
    props.setIsViewBoxOpen(true);
  };
  const handleViewData = (data) => {
    props.setViewData(data);
  };

  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table className={classes.table}>
            <CustomTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={props.data.length}
            />
            <TableBody>
              {props.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      <TableCell component="th" scope="row" align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">{row.question}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          className={
                            row.status === "Published"
                              ? classes.publishButton
                              : classes.statusButton
                          }
                        >
                          {row.status}
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <MoreHorizIcon
                          aria-describedby={id}
                          onClick={(event) => {
                            handleClick(event);
                            handleViewData(row);
                          }}
                        />

                        <Menu
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          // anchorOrigin={{
                          //   // vertical: "center",
                          //   horizontal: "right",
                          // }}
                          transformOrigin={{
                            vertical: "center",
                            horizontal: "right",
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              handleView(row);
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item>
                                <VisibilityIcon />
                              </Grid>
                              <Grid item>
                                <Typography>View</Typography>
                              </Grid>
                            </Grid>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              props.handleDeactivate();
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item>
                                <CheckCircleOutlineIcon />
                              </Grid>
                              <Grid item>
                                <Typography>Deactivate</Typography>
                              </Grid>
                            </Grid>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              props.handleDelete();
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item>
                                <DeleteForeverIcon />
                              </Grid>
                              <Grid item>
                                <Typography>Delete</Typography>
                              </Grid>
                            </Grid>
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default CustomTable;
