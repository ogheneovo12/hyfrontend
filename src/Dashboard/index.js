import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/core/Link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Current from "../component/Birthday/Current";
import YouthContext from "../appContexts/YouthContext";
import BirthImg from "./birthdays.jpg";
import weekImg from "./week.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const {
    currentBirthdays: { data: celebrants, birthdayloading },
    youths: { youths, loading },
  } = useContext(YouthContext);
  return (
    <div className={`${classes.root} content`}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary" className={classes.link}>
              <Link color="inherit" href="/" className={classes.link}>
                <HomeIcon className={classes.icon} />
                Home
              </Link>
            </Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            wrap="wrap"
            style={{ minHeight: "300px" }}
            spacing={1}
          >
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Paper style={{ height: "100%" }} className={classes.paper}>
                <AccountCircleIcon
                  style={{ fontSize: 100, color: "blue" }}
                  align="center"
                />
                <Typography variant="h4">
                  {loading
                    ? "loading.."
                    : youths
                    ? youths.length
                    : "loading"}
                </Typography>
                <Typography variant="h5" align="center">
                  youths
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Paper style={{ height: "100%" }} className={classes.paper}>
                <img src={BirthImg} alt="birthday icon" />
                <Typography variant="h4">
                  {birthdayloading
                    ? "loading.."
                    : celebrants
                    ? celebrants.birthdays.today.length
                    : "loading"}
                </Typography>
                <Typography variant="h5" align="center">
                  Todays Celebrants
                </Typography>
              </Paper>
            </Grid>

            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Paper style={{ height: "100%" }} className={classes.paper}>
                <img src={weekImg} alt="birthday icon" />
                <Typography variant="h4">
                  {birthdayloading
                    ? "loading.."
                    : celebrants
                    ? celebrants.birthdays.week.length
                    : "loading"}
                </Typography>
                <Typography variant="h5" align="center">
                  week birthdays
                </Typography>
              </Paper>
            </Grid>

            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Paper style={{ height: "100%" }} className={classes.paper}>
                <AccountCircleIcon
                  style={{ fontSize: 100, color: "blue" }}
                  align="center"
                />
                <Typography variant="h4">
                  {loading
                    ? "loading.."
                    : youths
                    ? youths.length
                    : "loading"}
                </Typography>
                <Typography variant="h5" align="center">
                  youths
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={5}>
            <Typography variant="h5" gutterBottom>
              Today Celebrants
            </Typography>
            <Current />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Week Celebrants
            </Typography>
            <Current type="week" />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              This Month Celebrants
            </Typography>
            <Current type="month" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
