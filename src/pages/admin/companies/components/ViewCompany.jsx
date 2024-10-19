import { Box, Typography, Button } from "@mui/material";

function ViewCompany({ company, onClose }) {
  if (!company) return null; // Asegúrate de que hay datos para mostrar

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        bgcolor: 'white', 
        borderRadius: 2,
        boxShadow: 3,
        width: 400, 
        margin: 'auto', 
      }}
    >
      <Typography variant="h6" gutterBottom>
        Detalles de la Empresa
      </Typography>

      <Typography variant="body1">
        <strong>Nombre:</strong> {company.name}
      </Typography>
      <Typography variant="body1">
        <strong>Correo:</strong> {company.email}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Móvil:</strong> {company.phone?.mobile || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Fijo:</strong> {company.phone?.landline || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Dirección:</strong> {company.address}
      </Typography>

      {/* Aquí puedes agregar más campos si es necesario */}
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cerrar
        </Button>
      </Box>
    </Box>
  );
}

export default ViewCompany;
