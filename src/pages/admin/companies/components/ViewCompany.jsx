import { Box, Typography, Button, Divider } from "@mui/material";

function ViewCompany({ company, onClose }) {
  if (!company || typeof company !== 'object') return null; 

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
        width: { xs: '90%', sm: 400 },
        margin: 'auto', 
      }}
    >
      <Typography variant="h5" gutterBottom>
        Detalles de la Empresa
      </Typography>
      <Divider sx={{ width: '100%', marginBottom: 2 }} />

      <Typography variant="body1">
        <strong>Nombre:</strong> {company.name || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Correo Electrónico:</strong> {company.email || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Móvil:</strong> {company.phone?.mobile || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Fijo:</strong> {company.phone?.landline || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Dirección:</strong> {company.address || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>ID Legal:</strong> {company.legalId || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Plan de Precios:</strong> {company.pricing?.plan || "Caducado o sin plan"}
      </Typography>
      <Typography variant="body1">
        <strong>Día de Pago:</strong> {company.pricing?.payDay || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Rol:</strong> {company.role || "N/A"}
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cerrar
        </Button>
      </Box>
    </Box>
  );
}

export default ViewCompany;
