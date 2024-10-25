
import { Box, Typography, Button } from "@mui/material";


function ViewUser({user, onClose}) {
    if (!user) return null;


  return (
   <>
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
        Detalles del Usuario
      </Typography>

      <Typography variant="body1">
        <strong>Nombre:</strong> {user.name}
      </Typography>
      <Typography variant="body1">
        <strong>Primer apellido:</strong> {user.lastName}
      </Typography>
      <Typography variant="body1">
        <strong>Segundo apellido:</strong> {user.lastName2 || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Correo:</strong> {user.email}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Móvil:</strong> {user.phone?.mobile || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Fijo:</strong> {user.phone?.home || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Rol:</strong> {user.role}
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cerrar
        </Button>
      </Box>
    </Box>
    
   </>
  )
}

export default ViewUser