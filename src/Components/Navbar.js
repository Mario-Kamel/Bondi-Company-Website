/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import strings from "../Assets/localization";

const Navbar = ({language, setLanguage}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const onLanguageChange = () => {
    if (strings.getLanguage() === "en") {
      strings.setLanguage("ar");
      setLanguage("ar");
      localStorage.setItem("language", "ar");
      return;
    }
    else if (strings.getLanguage() === "ar") {
      strings.setLanguage("en");
      setLanguage("en");
      localStorage.setItem("language", "en");
      return;
    }
  };
  const menuOptions = [
    {
      text: strings.home,
      icon: <HomeIcon />,
      url: "/",
    },
    // {
    //   text: "About",
    //   icon: <InfoIcon />,
    // },
    {
      text: strings.products,
      icon: <ShoppingCartIcon />,
      url: "/products",
    },
    {
      text: strings.contact,
      icon: <PhoneRoundedIcon />,
      url: "#contact",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <a href="/">
          <img src="Logo.png" alt="" className="logo-image" />
        </a>
      </div>
      <div className="navbar-links-container">
        <a href="/">{strings.home}</a>
        <a href="/products">{strings.products}</a>
        <a href="#contact">{strings.contact}</a>
        <button className="primary-button">{strings.bookNow}</button>
        <button className="language-button" onClick={() => onLanguageChange()}>{strings.getLanguage() === "en" ? "العريية" : "English"}</button>
      </div>
      <div className="navbar-menu-container">
        <button className="language-button" onClick={() => onLanguageChange()}>{strings.getLanguage() === "en" ? "العريية" : "English"}</button>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton LinkComponent={'a'} href={item.url}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
