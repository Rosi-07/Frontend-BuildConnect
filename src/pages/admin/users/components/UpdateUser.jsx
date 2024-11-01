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
} from "@mui/material";
import { useSnackbar } from "notistack";
import CancelIcon from "@mui/icons-material/Cancel";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import { useState, useEffect } from "react";

function UpdateUser({ user, onUpdate, title, onClose }) {
  const api = useAxiosPrivate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { enqueueSnackbar } = useSnackbar();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "admin",
    contacts: {
      emails: [],
      numbers: [],
    },
  });

  useEffect(() => {
    if (user) {
      setUserData({
        email: user.email || "",
        password: "",
        role: user.role || "admin",
        contacts: {
          emails: user.contacts?.emails || [],
          numbers: user.contacts?.numbers || [],
        },
      });
    }
  }, [user]);

  const handleInputChange = (e, type = "default", index = null) => {
    const { name, value } = e.target;

    if (type === "email" || type === "number") {
      setUserData((prevData) => ({
        ...prevData,
        contacts: {
          ...prevData.contacts,
          [type === "email" ? "emails" : "numbers"]: prevData.contacts[
            type === "email" ? "emails" : "numbers"
          ].map((item, idx) => (idx === index ? value : item)),
        },
      }));
    } else {
      setUserData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAddContactField = (type) => {
    setUserData((prevData) => ({
      ...prevData,
      contacts: {
        ...prevData.contacts,
        [type]: [...prevData.contacts[type], ""],
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.put(`/users/${user.id}`, userData);
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
              {title}
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

     
            <Grid item xs={12}>
              <Typography variant="h6">Correos de contacto</Typography>
              {userData.contacts.emails.map((email, index) => (
                <TextField
                  key={index}
                  fullWidth
                  name={`email-${index}`}
                  label={`Correo ${index + 1}`}
                  value={email}
                  onChange={(e) => handleInputChange(e, "email", index)}
                  sx={{ mb: 1 }}
                />
              ))}
              <Button onClick={() => handleAddContactField("emails")}>
                Agregar correo
              </Button>
            </Grid>


            <Grid item xs={12}>
              <Typography variant="h6">Teléfonos de contacto</Typography>
              {userData.contacts.numbers.map((number, index) => (
                <TextField
                  key={index}
                  fullWidth
                  name={`number-${index}`}
                  label={`Teléfono ${index + 1}`}
                  value={number}
                  onChange={(e) => handleInputChange(e, "number", index)}
                  sx={{ mb: 1 }}
                />
              ))}
              <Button onClick={() => handleAddContactField("numbers")}>
                Agregar teléfono
              </Button>
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
