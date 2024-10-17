import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import useLogout from "../../../hooks/auth/useLogout";

function Sidebar() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = () => {
    logout();
    navigate("/login");
  };

  const ListOptions = () => {
    return (
      <>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/users">
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component={Link} to="/publicaciones">
              <ListItemText primary="Publicaciones" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/companies">
              <ListItemText primary="Empresas" />
            </ListItemButton>
          </ListItem>
        </div>
        <div>
          <ListItem disablePadding>
            <ListItemButton onClick={signOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                className="text-red-600"
                primary={"Cerrar Sesión"}
              />
            </ListItemButton>
          </ListItem>
        </div>
      </>
    );
  };

  const [open, setOpen] = useState(false);
  const drawerWidth = 240;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#00455E" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ m: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Administrador
            </Typography>
          </div>
          <Avatar src="/3251650.png" sx={{ width: 70, height: 70 }}></Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <div className="flex items-center justify-center p-1" id="DrawerHead">
          <IconButton onClick={handleDrawerClose}>
            <Avatar
              src="/logo.png"
              alt="Image"
              style={{ width: "100px", height: "auto" }}
            />
          </IconButton>
        </div>
        <List>
          <ListOptions />
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
