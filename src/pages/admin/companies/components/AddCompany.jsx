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
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

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
    pricing: {
      plan: "",
      payDay: new Date().toISOString().split("T")[0],
    },
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
        pricing: {
          plan: "",
          payDay: new Date().toISOString().split("T")[0],
        },
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

  const handlePricingChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      pricing: { ...formData.pricing, [name]: value },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { role, landline, mobile, ...rest } = formData;

    try {
      await api.post("/companies", {
        ...rest,
        phone: {
          landline,
          mobile,
        },
      });
      resetFormData();
      setReset(!reset);
      enqueueSnackbar("Empresa creada con éxito", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    } catch (err) {
      enqueueSnackbar("Error creando empresa", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
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
            sx={{ mt: 1, width: "100%" }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    type="text"
                    name="address"
                    label="Dirección"
                    variant="outlined"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    name="landline"
                    label="Teléfono fijo"
                    value={formData.landline}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="mobile"
                    label="Teléfono móvil"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

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

              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    select
                    name="plan"
                    label="Seleccione un Plan"
                    value={formData.pricing.plan}
                    onChange={handlePricingChange}
                    variant="outlined"
                  >
                    <MenuItem value="basic">Basic</MenuItem>
                    <MenuItem value="premium">Premium</MenuItem>
                    <MenuItem value="enterprise">Enterprise</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    disabled
                    name="payDay"
                    label="Fecha de Pago"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formData.pricing.payDay}
                    onChange={handlePricingChange}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#00455E",
                  color: "#fff",
                  marginTop: "16px",
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
