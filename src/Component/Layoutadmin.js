import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";


const data1 = [
  { label: "> จัดการเมนู", path: "/admin/managermenu" },
  { label: "> จัดหมวดหมู่", path: "/admin/managercategories" },
  { label: "> โต๊ะอาหาร", path: "/admin/Foodtable" },
  { label: "> รายการอาหาร", path: "/admin/Fooditem" },
  { label: "> โปรโมชั่น", path: "/admin/Promotion" }
];

const data2 = [{ label: "> จัดสมาชิก", path: "/admin/managermember" }];

const drawerWidth = 200;

const mystyle = {
  display: "flex",
  backgroundColor: "DodgerBlue"
};

const header = {
  backgroundColor: "rgb(255, 153, 0)"
};

const textdata = {
  color: ""
};


export default function Navigator({ container }) {
  return (
    <Box sx={mystyle}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Link to="/admin" style={{ textDecoration: 'none', color: '#ffffff' }}>
          <Toolbar sx={header}>
            <Typography variant="h4" noWrap component="div">
              Admin
            </Typography>
          </Toolbar>
        </Link>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton
              alignItems="flex-start"
              sx={{
                px: 6,
                pt: 2,
                pb: 2
              }}
            >
              <ListItemText
                primary="ร้านอาหาร"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "0"
                }}
              />
            </ListItemButton>
            {data1.map((item) => (
              <ListItemButton key={item.label} sx={textdata}>
                <ListItemText
                  onClick={() => {
                    console.log(window.location.pathname)
                    if (window.location.pathname.indexOf(item.path) == -1) window.history.pushState({}, "", item.path)
                    window.location.reload()
                  }}
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 13,
                    fontWeight: "medium"
                  }}
                />
              </ListItemButton>
            ))}
          </List>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <List>
            <ListItemButton
              alignItems="flex-start"
              sx={{
                px: 6,
                pt: 2,
                pb: 2
              }}
            >
              <ListItemText

                primary="สมาชิก"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "0"
                }}
              />
            </ListItemButton>
            {data2.map((item) => (
              <ListItemButton key={item.label} sx={textdata}>
                <ListItemText
                  onClick={() => {
                    console.log(window.location.pathname)
                    if (window.location.pathname.indexOf(item.path) == -1) window.history.pushState({}, "", item.path)
                    window.location.reload()
                  }}
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 13,
                    fontWeight: "medium"
                  }}
                />
              </ListItemButton>
            ))}
          </List>
          <br></br>

          <List>
            <Link to="/admin/Storesales" style={{ textDecoration: 'none', color: '#000000' }}>
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 6,
                  pt: 2,
                  pb: 2
                }}
              >
                <ListItemText
                  primary="ยอดขาย"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "0"
                  }}
                />
              </ListItemButton>
            </Link>
          </List>
          <br></br>

          <List>
            <Link to="/login" style={{ textDecoration: 'none', color: '#000000' }}>
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 6,
                  pt: 2,
                  pb: 2
                }}
              >
                <ListItemText
                  primary="Log out"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "0"
                  }}
                />
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Drawer>

    </Box>
  );
}
