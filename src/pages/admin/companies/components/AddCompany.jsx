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
    legalId: "",
    name: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    mobile: "",
    landline: "",
    address: "",
    pricing: "",

  },
  setFormData: (newFormData) =>
    set((state) => ({ formData: { ...state.formData, ...newFormData } })),
  resetFormData: () =>
    set(() => ({
      formData: {
        legalId: "",
        name: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    mobile: "",
    landline: "",
    address: "",
    pricing: "",
      },
    })),
}));

function AddCompany({ reset, setReset }) {

  const api = useAxiosPrivate();
  const { formData, setFormData, resetFormData } = useFormStore();
  const { enqueueSnackbar } = useSnackbar();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { role,home, mobile, ...rest } = formData;
    try {
      await api.post("api/companies", {
        ...rest,
        phone: {
          landline,
          mobile,
        },
        role: "company",
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
    <Typography>Agregar Empresa</Typography>
  </AccordionSummary>

  <AccordionDetails>
    <Box
      component="form"
      sx={{
        mt: 1,
        width: "100%", // Asegura que ocupe todo el ancho
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth>
        {/* Primera fila: ID Legal y Nombre */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              type="text"
              name="legalId"
              label="ID Legal"
              variant="outlined"
              value={formData.legalId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="text"
              name="name"
              label="Nombre"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        {/* Segunda fila: Correo y Contraseña */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="email"
              name="email"
              label="Correo Electrónico"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="password"
              name="password"
              label="Contraseña"
              variant="outlined"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        {/* Tercera fila: Teléfono móvil y Teléfono fijo */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="mobile"
              label="Teléfono móvil"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="landline"
              label="Teléfono fijo"
              value={formData.landline}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        {/* Cuarta fila: Dirección */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              name="address"
              label="Dirección"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              name="pricing"
              label="Plan de Precios"
              value={formData.pricing}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

    

        {/* Botón de Guardar */}
        <Button
          variant="contained"
          style={{
            backgroundColor: "#00455E",
            color: "#fff",
            marginTop: "16px", // Espacio entre secciones
          }}
          type="submit"
          fullWidth
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

export default AddCompany;
