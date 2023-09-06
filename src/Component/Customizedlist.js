import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

const data1 = [
  { label: "> จัดการเมนู" },
  { label: "> จัดหมวดหมู่" },
  { label: "> โต๊ะอาหาร" },
  { label: "> รายการอาหาร" },
  { label: "> โปรโมชั่น" }
];

const data2 = [{ label: "> จัดสมาชิก" }];

//ปรับlishย่อย
const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 85,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20
  }
});

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: false
              }
            }
          },
          //ปรับสีTemplae
          palette: {

            
          }
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemText
                sx={{ my: 1 }}
                primary="Admin"
                primaryTypographyProps={{
                  fontSize: 30,
                  fontWeight: "medium",
                  letterSpacing: 0,
                  color: "rgba(255, 255, 255)",
                }}
              />
            </ListItemButton>

            <Divider />

            <Box>
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 6,
                  pt: 3,

                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } }
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
              {open &&
                data1.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255, 102, 0)" }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium"
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>

            <Box>
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 6,
                  pt: 3,

                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } }
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
              {open &&
                data2.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium"
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>

            <Box>
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 6,
                  pt: 3,
                  pb: 3,

                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } }
                }}
              >
                <ListItemText
                  primary="ยอดขาย"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "5"
                  }}
                />
              </ListItemButton>
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
