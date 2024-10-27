import { Box, Typography, Button, Divider } from "@mui/material";

function ViewUser({ user, onClose }) {
  if (!user || typeof user !== "object") return null; // Asegúrate de que hay datos para mostrar

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
        width: { xs: "90%", sm: 400 },
        margin: "auto",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Detalles del Usuario
      </Typography>
      <Divider sx={{ width: "100%", marginBottom: 2 }} />

      <Typography variant="body1">
        <strong>Nombre:</strong> {user.name || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Primer Apellido:</strong> {user.lastName || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Segundo Apellido:</strong> {user.lastName2 || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Correo Electrónico:</strong> {user.email || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Móvil:</strong> {user.phone?.mobile || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Teléfono Fijo:</strong> {user.phone?.home || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Rol:</strong> {user.role || "N/A"}
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cerrar
        </Button>
      </Box>
    </Box>
  );
}

export default ViewUser;
