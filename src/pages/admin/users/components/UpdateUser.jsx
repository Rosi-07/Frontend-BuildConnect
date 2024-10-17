import { Autocomplete, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/system/Grid";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import CancelIcon from "@mui/icons-material/Cancel";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";




function UpdateUser({ user, onUpdate, tittle, onClose}) {
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
                    home: user.phone.home || "",
                    mobile: user.phone.mobile || "",
                },
            })
        }
    }
    , [user]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { home, mobile, ...rest } = userData;
        try {
            await api.put(`/users/${userData.id}`, { ...rest, phone: { home, mobile } });
            enqueueSnackbar("Usuario actualizado con éxito", { variant: "success" });
            onUpdate();
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
        p: 1,
        margin: "auto",
        mt: 1,
        maxHeight: "80vh",
        overflowY: "auto",
        borderRadius: "10px",
      };

  return (
    <>
        <Box sx={style} component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" align="center" gutterBottom>
            <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {tittle}
            <Button style={{ color: "#3c6c42" }} onClick={onClose}>
              <CancelIcon />
            </Button>
          </div>
            </Typography>

            <Grid container spacing={2} margin={1}>
                {/* Primera fila: Nombre, Primer Apellido, Segundo Apellido */}
                <Grid xs={12}>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={4}>
                      <TextField
                        fullWidth
                        required
                        name="name"
                        label="Nombre"
                        variant="outlined"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={4}>
                      <TextField
                        fullWidth
                        required

                        name="lastName"
                        label="Primer Apellido"
                        variant="outlined"
                        value={userData.lastName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={4}>
                      <TextField
                        fullWidth
                        required
       
                        name="lastName2"
                        label="Segundo Apellido"
                        variant="outlined"
                        value={userData.lastName2}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>

                  {/* Segunda fila: Correo, Contraseña, Rol - ocupa todo el ancho */}
                  <Grid xs={12}>
                    <Grid container spacing={2}>
                      <Grid xs={12} sm={4}>
                        <TextField
                          required
                          fullWidth
           
                          name="email"
                          value={userData.email}
                          label="Correo Electrónico"
                          variant="outlined"
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid xs={12} sm={4}>
                        <TextField
                          required
                          fullWidth
                       
                          name="password"
                          value={userData.password}
                          label="Contraseña"
                          variant="outlined"
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid xs={12} sm={4}>
                        <TextField
                          required
                          fullWidth
              
                          name="role"
                          value={userData.role}
                          label="Rol"
                          variant="outlined"
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Tercera fila: Teléfono principal y Teléfono móvil */}
                  <Grid xs={12}>
                    <Grid container spacing={2}>
                      <Grid xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          name="home"
                          label="Teléfono principal"
                          value={userData.phone.home}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="mobile"
                          label="Teléfono móvil"
                          value={userData.phone.mobile}
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Button type="submit" variant="contained" color="primary">
                        Actualizar
                    </Button>
            </Box>
            
             
        </Box>
    
    
    </>
  )
}

export default UpdateUser