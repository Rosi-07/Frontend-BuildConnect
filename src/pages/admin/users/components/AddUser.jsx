import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import Button from "@mui/material/Button";
import { create } from "zustand";
import { useSnackbar } from "notistack";
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import { FormControl } from "@mui/material";

const useFormStore = create((set) => ({
  formData: {
    name: "",
    lastName: "",
    lastName2: "",
    email: "",
    password: "",
    phone: "",
    home: "",
    mobile: "",
    role: "",
  },
  setFormData: (newFormData) =>
    set((state) => ({ formData: { ...state.formData, ...newFormData } })),
  resetFormData: () =>
    set(() => ({
      formData: {
        name: "",
        lastName: "",
        lastName2: "",
        email: "",
        password: "",
        phone: "",
        home: "",
        mobile: "",
        role: "",
      },
    })),
}));

function AddUser({ reset, setReset }) {
  const api = useAxiosPrivate();

  const { formData, setFormData, resetFormData } = useFormStore();
  const { enqueueSnackbar } = useSnackbar();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { home, mobile, ...rest } = formData;
    try {
      await api.post("api/users", {
        ...rest,
        phone: {
          home,
          mobile,
        },
      });
      resetFormData();
      setReset(!reset);
      enqueueSnackbar("Usuario creado con éxito", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } catch (err) {
      enqueueSnackbar("Error creando usuario", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Agregar Usuario</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Box
            component="form"
            sx={{
              mt: 1,
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <Grid container  margin={2} justifyContent={"center"} fullWidt>
                {/* Primera fila: Nombre, Primer Apellido, Segundo Apellido */}
                <Grid xs={12}>
                  <Grid container spacing={2} justifyItems={"center"}>
                    <Grid xs={12} sm={4} mr={2}>
                      <TextField
                        fullWidth
                        required
                        type="text"
                        name="name"
                        label="Nombre"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={4} mr={2}>
                      <TextField
                        fullWidth
                        required
                        type="text"
                        name="lastName"
                        label="Primer Apellido"
                        variant="outlined"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={4} mr={2}>
                      <TextField
                        fullWidth
                        required
                        type="text"
                        name="lastName2"
                        label="Segundo Apellido"
                        variant="outlined"
                        value={formData.lastName2}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>

                  {/* Segunda fila: Correo, Contraseña, Rol - ocupa todo el ancho */}
                  <Grid xs={12} mt={4}>
                    <Grid container spacing={2}>
                      <Grid xs={4} sm={4} mr={2}>
                        <TextField
                          required
                          fullWidth
                          type="email"
                          name="email"
                          value={formData.email}
                          label="Correo Electrónico"
                          variant="outlined"
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid xs={4} sm={4} mr={2}>
                        <TextField
                          required
                          fullWidth
                          type="password"
                          name="password"
                          value={formData.password}
                          label="Contraseña"
                          variant="outlined"
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid xs={4} sm={4}mr={2}>
                        <TextField
                          required
                          fullWidth
                          type="text"
                          name="role"
                          value={formData.role}
                          label="Rol"
                          variant="outlined"
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Tercera fila: Teléfono principal y Teléfono móvil */}
                  <Grid xs={12} mt={4}>
                    <Grid container spacing={2}>
                      <Grid xs={12} sm={6} mr={2}>
                        <TextField
                          fullWidth
                          required
                          name="home"
                          label="Teléfono principal"
                          value={formData.home}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="mobile"
                          label="Teléfono móvil"
                          value={formData.mobile}
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#3c6c42",
                  color: "#fff",
                  marginTop: 2, // Espaciado superior para separación
                }}
                type="submit"
                fullWidt
              >
                Guardar
              </Button>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AddUser;
