import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FactoryIcon from "@mui/icons-material/Factory";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Container } from "@mui/system";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Grid } from "@mui/material";

export default function FiveUsp() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 20,
          duration: 2,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 30,
          duration: 2.5,
        },
      });
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 30,
          duration: 3,
        },
      });
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 30,
          duration: 3.5,
        },
      });
      animation5.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 30,
          duration: 4,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "-100vw" });
      animation2.start({ x: "200vw" });
      animation3.start({ x: "-100vw" });
      animation4.start({ x: "200vw" });
      animation5.start({ x: "-100vw" });
    }
  }, [inView, animation1, animation2, animation3, animation4, animation5]);

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
          // padding: "30px",
        }}>
        <Box ref={ref}>
          <Grid container direction="row" alignItems="center" alignContent='center' align='center' spacing={1} sx={{ overflowX: "hidden", minHeight:{xs:"600px", sm:"420px"}}}>
            <Grid item xs={12} sm={6} md={6} >
              <motion.div animate={animation1} >
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    boxShadow: 2,
                    border: 0,
                    borderRadius: "5px",
                  }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 65,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <CallIcon sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }} />
                  </Box>
                  <Box sx={{ padding: "10px" }} align="left">
                    <Typography variant="h6" component="div">
                      Call Support
                    </Typography>
                    <Typography variant="body2">Do not be shy, call us anytime, we are ready to serve!</Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
              <motion.div animate={animation2}>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    boxShadow: 2,
                    border: 0,
                    borderRadius: "5px",
                  }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 65,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <HealthAndSafetyIcon sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }} />
                  </Box>
                  <Box sx={{ padding: "10px" }} align="left">
                    <Typography variant="h6" component="div">
                      Safety First
                    </Typography>
                    <Typography variant="body2">Our Working Enviroment are based on ISO11111.</Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
              <motion.div animate={animation3} >
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    boxShadow: 2,
                    border: 0,
                    borderRadius: "5px",
                  }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 65,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <FactoryIcon sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }} />
                  </Box>
                  <Box sx={{ padding: "10px" }} align="left">
                    <Typography variant="h5" component="div">
                      Industrial Products
                    </Typography>
                    <Typography variant="body2">All products are always instock to serve you better!</Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
              <motion.div animate={animation4} >
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    boxShadow: 2,
                    border: 0,
                    borderRadius: "5px",
                  }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 65,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <AssignmentIndIcon sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }} />
                  </Box>
                  <Box sx={{ padding: "10px" }} align="left">
                    <Typography variant="h5" component="div">
                      Professional Trained
                    </Typography>
                    <Typography variant="body2">From technicians to administration, we are all well trained.</Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={7} md={7} >
              <motion.div animate={animation5} >
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    boxShadow: 2,
                    border: 0,
                    borderRadius: "5px",
                  }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 65,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <LocalFireDepartmentIcon sx={{ fontSize: "2.5rem", color: "rgb(255,211,51)" }} />
                  </Box>
                  <Box sx={{ padding: "10px" }} align="left">
                    <Typography variant="h5" component="div">
                      Great Offer
                    </Typography>
                    <Typography variant="body2">Do not miss out! We always aim to give our best value to all our customers.</Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
