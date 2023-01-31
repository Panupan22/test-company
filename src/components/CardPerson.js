import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const CardPerson = ({ imagePath, fullName, position }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imagePath}
          alt="profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPerson;
