import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../public/Logo.png";

const pages = ["Featured Products", "Categories", "e-Brochure", "Services"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "rgb(255,211,51)" }}>
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              height: 64,
              order: 1,
              padding: "5px",
            }}
            alt="Your logo."
            src={Logo.src}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              order: 2,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
            }}>
            Supreme Evershine
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              order: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              flexGrow: 1,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
            }}>
            Supreme Evershine
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              order: 3,
              scrollBehavior: "smooth",
            }}>
            {pages.map((page) => (
              <Button
                href={`/#${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  fontSize: "1rem",
                  textDecoration: "none",
                  textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
                }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              order: 4,
              fontSize: "2rem",
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  textTransform: "capitalize",
                  fontWeight: "500",
                },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    href={`#${page}`}
                    sx={{
                      my: 0.5,
                      color: "black",
                      display: "block",
                      textTransform: "capitalize",
                      fontWeight: "700",
                      fontSize: "0.80rem",
                      textDecoration: "none",
                    }}>
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
