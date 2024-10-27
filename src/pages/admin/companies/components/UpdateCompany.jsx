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
import CancelIcon from "@mui/icons-material/Cancel";
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";

function UpdateCompany({ company, onUpdate, tittle, onClose }) {
  const api = useAxiosPrivate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { enqueueSnackbar } = useSnackbar();

  const [companyData, setCompanyData] = useState({
    id: "",
    legalId: "",
    name: "",
    email: "",
    password: "",
    role: "",
    phone: { mobile: "", landline: "" },
    address: "",
    pricing: {
      plan: "",
      payDay: new Date().toISOString().split("T")[0],
    },
  });

  useEffect(() => {
    if (company) {
      setCompanyData({
        ...company,
        phone: {
          mobile: company.phone?.mobile || "",
          landline: company.phone?.landline || "",
        },
        pricing: {
          plan: company.pricing?.plan || "",
          payDay:
            company.pricing?.payDay || new Date().toISOString().split("T")[0],
        },
      });
    }
  }, [company]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "landline" || name === "mobile") {
      setCompanyData((prevData) => ({
        ...prevData,
        phone: {
          ...prevData.phone,
          [name]: value || "",
        },
      }));
    } else if (name === "plan" || name === "payDay") {
      setCompanyData((prevData) => ({
        ...prevData,
        pricing: {
          ...prevData.pricing,
          [name]: value || "",
        },
      }));
    } else {
      setCompanyData((prevData) => ({
        ...prevData,
        [name]: value || "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedCompanyData = {
        ...companyData,
        phone: {
          mobile: companyData.phone.mobile || "",
          landline: companyData.phone.landline || "",
        },
      };

      await api.put(`/companies/${company.companyId}`, updatedCompanyData);

      onUpdate();
      enqueueSnackbar("Empresa actualizada correctamente", {
        variant: "success",
      });
      onClose();
    } catch (error) {
      enqueueSnackbar("Error al actualizar la empresa", {
        variant: "error",
      });
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
    <Box
      component="form"
      sx={style}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <FormControl fullWidth sx={{ gap: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" align="center">
            {tittle}
          </Typography>
          <Button onClick={onClose} sx={{ color: "#00455E" }}>
            <CancelIcon />
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="legalId"
              label="ID Legal"
              variant="outlined"
              value={companyData.legalId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="name"
              label="Nombre"
              variant="outlined"
              value={companyData.name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="email"
              label="Correo Electrónico"
              type="email"
              value={companyData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="password"
              label="Contraseña"
              type="password"
              value={companyData.password}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="mobile"
              label="Teléfono móvil"
              value={companyData.phone.mobile}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="landline"
              label="Teléfono fijo"
              value={companyData.phone.landline}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              name="address"
              label="Dirección"
              value={companyData.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              select
              name="plan"
              label="Plan de Precios"
              value={companyData.pricing.plan}
              onChange={handleInputChange}
              variant="outlined"
            >
              <MenuItem value="basic">Basic</MenuItem>
              <MenuItem value="premium">Premium</MenuItem>
              <MenuItem value="enterprise">Enterprise</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="payDay"
              label="Fecha de Pago"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={companyData.pricing.payDay}
              onChange={handleInputChange}
              variant="outlined"
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
  );
}

export default UpdateCompany;
