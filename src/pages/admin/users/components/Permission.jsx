import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../../hooks/auth/useAxiosPrivate";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSnackbar } from "notistack";
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

function Permission({ user, onUpdate, title, onClose }) {
  const api = useAxiosPrivate();
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const userId = user.id;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { enqueueSnackbar } = useSnackbar();



  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await api.get("/companies");
        setCompanies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanies();
  }, [user]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post(
        `/owners/${userId}/permission/companies/${selectedCompany.id}`,
        { companyId: selectedCompany.id }
      );

      onUpdate();
      onClose();
      enqueueSnackbar("Permiso asignado con éxito", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("No se pudo asignar el permiso", { variant: "error" });
      console.error(error);
    }
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
          <Autocomplete
            value={selectedCompany}
            onChange={(event, newValue) => setSelectedCompany(newValue)}
            id="company-select"
            options={companies}
            getOptionLabel={(option) => option.Company?.name || ""}
            renderInput={(params) => (
              <TextField {...params} label="Selecciona una compañía" />
            )}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#00455E", color: "#fff", mt: 2 }}
            fullWidth
          >
            Asignar Permiso
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default Permission;
