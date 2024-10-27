import {
  Autocomplete,
  useMediaQuery,
  useTheme,
  FormControl,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";
import { useSnackbar } from "notistack";
import CancelIcon from "@mui/icons-material/Cancel";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import { useState, useEffect } from "react";

function UpdateUser({ user, onUpdate, tittle, onClose }) {
  const api = useAxiosPrivate();
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    lastName: "",
    lastName2: "",
    email: "",
    password: "",
    phone: {
      home: "",
      mobile: "",
    },
    role: "",
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (user) {
      setUserData({
        ...user,
        phone: {
          home: user.phone?.home || "",
          mobile: user.phone?.mobile || "",
        },
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "home" || name === "mobile") {
      setUserData((prevData) => ({
        ...prevData,
        phone: {
          ...prevData.phone,
          [name]: value || "",
        },
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value || "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedUserData = {
        ...userData,
        phone: {
          home: userData.phone.home || "",
          mobile: userData.phone.mobile || "",
        },
      };

      await api.put(`/users/${user.id}`, updatedUserData);

      enqueueSnackbar("Usuario actualizado con éxito", { variant: "success" });
      onUpdate();
      onClose();
    } catch (error) {
      console.error(error);
      enqueueSnackbar("No se pudo actualizar el usuario", { variant: "error" });
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "90%" : "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    maxHeight: "80vh",
    overflowY: "auto",
    borderRadius: "10px",
  };

  return (
    <>
      <Box
        sx={style}
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" align="center">
              {tittle}
            </Typography>
            <Button onClick={onClose} sx={{ color: "#00455E" }}>
              <CancelIcon />
            </Button>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                required
                type="text"
                name="name"
                label="Nombre"
                variant="outlined"
                value={userData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                required
                type="text"
                name="lastName"
                label="Primer Apellido"
                variant="outlined"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                required
                type="text"
                name="lastName2"
                label="Segundo Apellido"
                variant="outlined"
                value={userData.lastName2}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                required
                type="email"
                name="email"
                label="Correo Electrónico"
                variant="outlined"
                value={userData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                required
                type="password"
                name="password"
                label="Contraseña"
                variant="outlined"
                value={userData.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                disabled
                type="text"
                name="role"
                label="Rol"
                variant="outlined"
                value={userData.role}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                name="home"
                label="Teléfono principal"
                value={userData.phone.home}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="mobile"
                label="Teléfono móvil"
                value={userData.phone.mobile}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#00455E", color: "#fff", mt: 2 }}
            fullWidth
          >
            Guardar
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default UpdateUser;
