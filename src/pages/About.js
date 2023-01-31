import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";
import CardPerson from "../components/CardPerson";

const About = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "10px",
        }}
      >
        <Grid item xs={12} md={4}>
          <CardPerson
            imagePath="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            fullName="Mr. Glass"
            position="CEO"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardPerson
            imagePath="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            fullName="Mrs. Jane"
            position="Co-Founder"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardPerson
            imagePath="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            fullName="Mr. Joe"
            position="Engineer"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
