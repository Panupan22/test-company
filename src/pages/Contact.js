import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const markerPos1 = [13.0, 101.0];
  const markerPos2 = [13.0, 102.0];

  const displayContact = (
    <Paper elevation={3}>
      <Box
        style={{
          width: "100%",
          height: "400px",
          padding: "15px",
        }}
      >
        <Typography variant="h5">Contact Us</Typography>
        <Box display="flex" alignItems="center">
          <BusinessIcon />
          <Typography variant="body1" ml={2}>
            4315 N Maryvale Pkwy Phoenix Arkansas 85031
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <MailIcon />
          <Typography variant="body1" ml={2}>
            testcompany@test.com
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <FacebookIcon />
          <Typography variant="body1" ml={2}>
            TEST COMPANY
          </Typography>
        </Box>
      </Box>
    </Paper>
  );

  const displayMap = (
    <Paper elevation={3}>
      <MapContainer
        center={markerPos1}
        scrollWheelZoom={false}
        zoom={10}
        style={{
          width: "100%",
          height: "400px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPos1}>
          <Popup>
            <img
              src="https://images.unsplash.com/photo-1578769242615-0516cbd406f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80"
              alt="office"
              width={100}
              height={100}
            />
            <p>My Building 1</p>
          </Popup>
        </Marker>
        <Marker position={markerPos2}>
          <Popup>
            <img
              src="https://images.unsplash.com/photo-1579616075377-696d66a6e373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="office"
              width={100}
              height={100}
            />
            <p>My Building 2</p>
          </Popup>
        </Marker>
      </MapContainer>
    </Paper>
  );

  return (
    <Container>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          {displayContact}
        </Grid>
        <Grid item xs={12} md={6}>
          {displayMap}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
