import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import YouthContext from "../../appContexts/YouthContext";
// import { useQuery } from '@apollo/react-hooks';
// import { useQuery } from '@apollo/react-hooks';
// import { getBirthDayQuery } from "../../graphql/queries"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0295D4",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function getCategory(type, birthdays) {
  switch (type) {
    case "week":
      return birthdays.week;
    case "month":
      return birthdays.month;
    default:
      return birthdays.today;
  }
}

function Current({ type }) {
  const classes = useStyles();
  const {
    currentBirthdays: { data, loading },
  } = useContext(YouthContext);
  return !loading || data ? (
    data && getCategory(type, data.birthdays).length > 0 ? (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Name </StyledTableCell>
              <StyledTableCell align="left">Email </StyledTableCell>
              <StyledTableCell align="left">Telephone 1</StyledTableCell>
              <StyledTableCell align="left">Telephone 2</StyledTableCell>
              <StyledTableCell align="left">Membership </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {getCategory(type, data.birthdays).map((celebrant, index) => (
              <StyledTableRow key={`${celebrant.name}${index}`}>
                <StyledTableCell align="left">{celebrant.Name}</StyledTableCell>
                <StyledTableCell align="left">
                  {celebrant.Email}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {celebrant.Telephone_2}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {celebrant.Telephone_1}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {celebrant.Membership_Status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ) : (
      <div>No birthday</div>
    )
  ) : (
    <Skeleton variant="rect" width="100%" height={118} animation="wave" />
  );
}

export default Current;
