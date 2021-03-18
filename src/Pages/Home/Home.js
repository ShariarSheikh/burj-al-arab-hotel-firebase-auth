import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RoomContext } from "../../Component/State/RoomContext";
import { HotelCard } from "../../Component/HotelCard/HotelCard";


const useStyles = makeStyles({
  root: {
    marginTop: "50px",
    width: "90%",
    margin: "0 auto",
  },
});

const Home = () => {
  const [roomInfo, setRoomInfo] = useContext(RoomContext);
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} spacing={2} >
        <Grid item container spacing={2} justify="center">
          {roomInfo.map((item) => (
            <HotelCard item={item} key={item.id} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
