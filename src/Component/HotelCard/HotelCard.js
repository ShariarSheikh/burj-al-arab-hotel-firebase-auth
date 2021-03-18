import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: "350px",
    backgroundColor: "#1623bd",
    color: "white",
    marginLeft: "55px",
    marginBottom: "55px",
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
    color:'white',
  },
});

export const HotelCard = (props) => {
  const classes = useStyles();
  const { title, img, description,id } = props.item;
  return (
    <>
     
        <Card className={classes.card}>
        <Link to={`/hotel/${id}`} className={classes.link}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="inherit" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link>
        </Card>
     
    </>
  );
};
