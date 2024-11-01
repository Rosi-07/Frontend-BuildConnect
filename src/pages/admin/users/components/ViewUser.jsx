import {
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

function ViewUser({ user, onClose }) {
  const [userData, setUserData] = useState({
    email: "",
    role: "",
    contacts: {
      emails: [],
      numbers: [],
    },
  });

  useEffect(() => {
    if (user) {
      setUserData({
        email: user.email || "",
        role: user.role || "",
        contacts: {
          emails: user.contacts?.emails || [],
          numbers: user.contacts?.numbers || [],
        },
      });
    }
  }, [user]);

  const style = {
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
  };

  return (
    <Paper sx={style} elevation={3}>
      <Box mb={2} display="flex" justifyContent="space-between" width="100%">
        <Typography variant="h5" align="center">
          Información del Usuario
        </Typography>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><strong>Email:</strong></Typography>
          <Typography variant="body1">{userData.email}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1"><strong>Rol:</strong></Typography>
          <Typography variant="body1">{userData.role}</Typography>
        </Grid>

        {/* Correos de contacto */}
        <Grid item xs={12}>
          <Typography variant="h6">Correos de Contacto</Typography>
          {userData.contacts.emails.length > 0 ? (
            userData.contacts.emails.map((email, index) => (
              <Typography key={index} variant="body1">
                {index + 1}. {email}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">No hay correos registrados.</Typography>
          )}
        </Grid>

        {/* Números de contacto */}
        <Grid item xs={12}>
          <Typography variant="h6">Números de Contacto</Typography>
          {userData.contacts.numbers.length > 0 ? (
            userData.contacts.numbers.map((number, index) => (
              <Typography key={index} variant="body1">
                {index + 1}. {number}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">No hay números registrados.</Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ViewUser;
