import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { useParams } from "react-router";
import { RoomContext } from "../../Component/State/RoomContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
  },
  media: {
    height: 240,
  },
});

const HotelDetails = () => {
  const [roomInfo, setRoomInfo] = useContext(RoomContext);
  const { id } = useParams();
  const selectedRoom = roomInfo.find((room) => room.id === Number(id));
  const classes = useStyles();
  const { description, title, img } = selectedRoom;

  return (
    <Grid container justify="center" style={{ marginTop: "50px" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default HotelDetails;
