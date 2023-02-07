import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FactoryIcon from "@mui/icons-material/Factory";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Container } from "@mui/system";

export default function FiveUsp() {
  
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          minHeight: "300px",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          marginTop: "30px",
          // backgroundColor: "rgb(255,211,51)",
          borderRadius: "15px",
          // padding: "30px",
        }}
      >
        <Box >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              margin: "20px",
              boxShadow: 2,
              border: 0,
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 65,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CallIcon sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }} />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h6" component="div">
                Call Support
              </Typography>
              <Typography variant="body2">
                Do not be shy, call us anytime, we are ready to serve!
              </Typography>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
              padding: "10px",
              boxShadow: 2,
              border: 0,
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 65,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HealthAndSafetyIcon
                sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }}
              />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h6" component="div">
                Safety First
              </Typography>
              <Typography variant="body2">
                Our Working Enviroment are based on ISO11111.
              </Typography>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
              padding: "10px",
              boxShadow: 2,
              border: 0,
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 65,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FactoryIcon
                sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }}
              />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h5" component="div">
                Industrial Products
              </Typography>
              <Typography variant="body2">
                All our products are always instock to serve you better!
              </Typography>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
              padding: "10px",
              boxShadow: 2,
              border: 0,
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 65,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AssignmentIndIcon
                sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }}
              />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h5" component="div">
                Professional Trained
              </Typography>
              <Typography variant="body2">
                From technicians to administration, our colleagues are all well
                trained.
              </Typography>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
              padding: "10px",
              boxShadow: 2,
              border: 0,
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 65,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LocalFireDepartmentIcon
                sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }}
              />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h5" component="div">
                Great Offer
              </Typography>
              <Typography variant="body2">
                Do not miss out! We always aim to give our best value to all our
                customers.
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
