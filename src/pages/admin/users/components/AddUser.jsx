

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    TextField,
    Button,
    FormControl,
    Grid,
    MenuItem,
    } from "@mui/material";
    import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
    


function AddUser({reset, setReset}) {




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
            // onSubmit={handleSubmit}
          >
            <FormControl>
              <Grid container spacing={2} margin={1}>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    required
                    type="text"
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    // value={formData.name}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    required
                    type="text"
                    name="lastName"
                    label="Primer Apellido"
                    variant="outlined"
                    // value={formData.lastName}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    required
                    type="text"
                    name="lastName2"
                    label="Segundo Apellido"
                    variant="outlined"
                    // value={formData.lastName2}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    name="email"
                    // value={formData.email}
                    label="Correo Electrónico"
                    variant="outlined"
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    name="password"
                    // value={formData.password}
                    label="Contraseña"
                    variant="outlined"
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    select
                    required
                    name="RoleId"
                    label="Seleccione un rol"
                    // value={formData.RoleId}
                    // onChange={handleInputChange}
                  >
                    {/* <MenuItem value={0}>Selecciona un rol</MenuItem>
                    {roles.map((role) => (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
                      </MenuItem>
                    ))} */}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    name="principal"
                    label="Teléfono principal"
                    // value={formData.principal}
                    // onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="secundario"
                    label="Teléfono secundario"
                    // value={formData.secundario}
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                style={{
                //   backgroundColor: !isFormValid() ? "#9e9e9e" : "#3c6c42",
                  color: "#fff",
                //   cursor: !isFormValid() ? "not-allowed" : "pointer",
                }}
                type="submit"
                fullWidth
                // disabled={!isFormValid()}
              >
                Guardar
              </Button>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    
    
    </>
  )
}

export default AddUser