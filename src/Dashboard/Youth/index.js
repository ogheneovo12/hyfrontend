import React,{ useContext} from 'react';
import Skeleton from "@material-ui/lab/Skeleton";
import YouthContext from "../../appContexts/YouthContext"
import MaterialTable from 'material-table';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import tableIcons from './materialTableIcon';
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
export default function MaterialTableDemo() {
  
  const classes = useStyles();
  const {  youths:{youths,loading}, setYouth }  = useContext(YouthContext);
  const columns = [
      { title: 'Name', field: 'Name' },
      { title: 'Email', field: 'Email' },
      { title: 'Telephone_1',field: 'Telephone_1'},
      { title: 'Date_of_Birth',field:'Date_of_Birth'},
      { title: 'Membership_Status',field:'Membership_Status'}
    ];
  

  return (
   
    <div className={`content`}>
    <Grid container spacing ={3}>
     <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary" className={classes.link}>
              <Link color="inherit" href="/" className={classes.link}>
                <HomeIcon className={classes.icon} />
                Home
              </Link>
            </Typography>
            <Typography color="textPrimary" className={classes.link}>
              <Link color="inherit" href="/youths" className={classes.link}>
               youths
              </Link>
            </Typography>
          </Breadcrumbs>
        </Grid>
     <Grid item xs={12}>
   {  !loading  && youths ?     
   (<MaterialTable
      icons={tableIcons}
      title="Hy Youths"
      columns={columns}
      data={youths}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();

              setYouth((prevState) => {
                const data = [...prevState.youths];
                console.log("added")
                data.push(newData);
                return  {...prevState,youths:data};
              });
            }, 600);

          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setYouth((prevState) => {
                  const data = [...prevState.youths];
                  data[data.indexOf(oldData)] = newData;
                  return   {...prevState,youths:data};
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setYouth((prevState) => {
                const data = [...prevState.youths];
                data.splice(data.indexOf(oldData), 1);
                return  {...prevState,youths:data};
              });
            }, 600);
          }),
      }}
    />
   ):(
      <Skeleton variant="rect" width="100%" height={118} animation="wave" />
    )
} 
    </Grid> 
  </Grid>
  </div>
  );
}