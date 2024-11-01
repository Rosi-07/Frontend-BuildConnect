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
import { FormControl, IconButton, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useFormStore = create((set) => ({
  formData: {
    email: "",
    password: "",
    role: "admin",
    contacts: {
      emails: [],
      numbers: [],
    },
  },
  setFormData: (newFormData) =>
    set((state) => ({ formData: { ...state.formData, ...newFormData } })),
  resetFormData: () =>
    set(() => ({
      formData: {
        email: "",
        password: "",
        role: "admin",
        contacts: {
          emails: [],
          numbers: [],
        },
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

  const handleContactChange = (index, type, value) => {
    setFormData({
      contacts: {
        ...formData.contacts,
        [type]: formData.contacts[type].map((item, i) =>
          i === index ? value : item
        ),
      },
    });
  };

  const addContactField = (type) => {
    setFormData({
      contacts: {
        ...formData.contacts,
        [type]: [...formData.contacts[type], ""],
      },
    });
  };

  const removeContactField = (index, type) => {
    setFormData({
      contacts: {
        ...formData.contacts,
        [type]: formData.contacts[type].filter((_, i) => i !== index),
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/users", formData);
      enqueueSnackbar("Usuario creado correctamente", {
        variant: "success",
      });
      resetFormData();
      setReset(!reset);
    } catch (error) {
      enqueueSnackbar("Error al crear el usuario", { variant: "error" });
    }
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Agregar Usuario</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          component="form"
          sx={{
            mt: 1,
            width: "100%",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl fullWidth>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>Datos de usuario:</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
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
                  fullWidth
                  required
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
              <Grid item xs={12}>
                <Typography>Correos de Contacto</Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1} alignItems="flex-start">
                  {formData.contacts.emails.map((email, index) => (
                    <Box
                      key={`email-${index}`}
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        fullWidth
                        type="email"
                        label={`Correo ${index + 1}`}
                        variant="outlined"
                        value={email}
                        onChange={(e) =>
                          handleContactChange(index, "emails", e.target.value)
                        }
                      />
                      <IconButton
                        onClick={() => removeContactField(index, "emails")}
                        color="error"
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    startIcon={<AddIcon />}
                    onClick={() => addContactField("emails")}
                    variant="outlined"
                  >
                    Agregar Correo
                  </Button>
                </Stack>
              </Grid>
            </Grid>


            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <Typography>Teléfonos de Contacto</Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1} alignItems="flex-start">
                  {formData.contacts.numbers.map((number, index) => (
                    <Box
                      key={`number-${index}`}
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        fullWidth
                        type="tel"
                        label={`Teléfono ${index + 1}`}
                        variant="outlined"
                        value={number}
                        onChange={(e) =>
                          handleContactChange(index, "numbers", e.target.value)
                        }
                      />
                      <IconButton
                        onClick={() => removeContactField(index, "numbers")}
                        color="error"
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    startIcon={<AddIcon />}
                    onClick={() => addContactField("numbers")}
                    variant="outlined"
                  >
                    Agregar Teléfono
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#00455E",
                color: "#fff",
                marginTop: "16px",
                width: "100%",
              }}
              type="submit"
            >
              Guardar
            </Button>
          </FormControl>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default AddUser;
