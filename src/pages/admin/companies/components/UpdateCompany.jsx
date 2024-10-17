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





function UpdateCompany({ company, onUpdate, tittle, onClose }) {

    const api = useAxiosPrivate();
    const [companyData, setCompanyData] = useState({
        id: "",
        legalId: "",
        name: "",
        email: "",
        password: "",
        role: "",
        phone: {
            mobile: "",
            landline: "",
        },
        address: "",
        pricing: "",
    });

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (company) {
            setCompanyData({
                ...company,
                phone: {
                    mobile: company.phone.mobile || "",
                    landline: company.phone.landline || "",
                },
            });
        }
    }, [company]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompanyData({ ...companyData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { mobile, landline, ...rest } = companyData;
        try {
            await api.put(`api/companies/${companyData.companyId}`, { ...rest, phone: { mobile, landline } });
            enqueueSnackbar("Compañía actualizada con éxito", { variant: "success" });
            onUpdate();
            onClose();
        } catch (error) {
            enqueueSnackbar("Error al actualizar la compañía", { variant: "error" });
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

            <Grid container spacing={2} margin={2}>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Nombre de usuario"
            name="name"
            value={companyData.name}
            onChange={handleInputChange}
            required
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Correo Electrónico"
            name="email"
            value={companyData.email}
            onChange={handleInputChange}
            required
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Contraseña"
            name="password"
            value={companyData.password}
            onChange={handleInputChange}
            required
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="ID Legal"

            name="legalId"
            value={companyData.legalId}
            onChange={handleInputChange}
            required
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Telefono móvil"
            name="phone.mobile"
            value={companyData.phone.mobile}
            onChange={handleInputChange}
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Telefono fijo"
            name="phone.landline"
            value={companyData.phone.landline}
            onChange={handleInputChange}
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Dirección"
            name="address"
            value={companyData.address}
            onChange={handleInputChange}
            required
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Precio"
            name="pricing"
            value={companyData.pricing}
            onChange={handleInputChange}
            required
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Rol"
            name="role"
            value={companyData.role}
            onChange={handleInputChange}
            required
            />

            </Grid>

            <Grid item xs={12} sm={6}>
            <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            >
            Actualizar

            </Button>
            </Grid>
            </Grid>

    </Box>
    
    
    
    
    </>
  )
}

export default UpdateCompany