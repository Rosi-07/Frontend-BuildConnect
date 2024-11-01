import { Typography, Box, Grid, Paper, Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function ViewCompany({ company, onClose }) {
  const [companyData, setCompanyData] = useState({
    email: "",
    role: "",
    contacts: {
      emails: [],
      numbers: [],
    },
    Company: {
      name: "",
      legalId: "",
      address: {
        canton: "",
        district: "",
        province: "",
        streetDetails: "",
      },
      pricing: {
        plan: "",
        billingDate: "",
      },
    },
  });

  useEffect(() => {
    if (company) {
      setCompanyData({
        email: company.email || "",
        role: company.role || "",
        contacts: {
          emails: company.contacts?.emails || [],
          numbers: company.contacts?.numbers || [],
        },
        Company: {
          name: company.Company?.name || "",
          legalId: company.Company?.legalId || "",
          address: {
            canton: company.Company?.address?.canton || "",
            district: company.Company?.address?.district || "",
            province: company.Company?.address?.province || "",
            streetDetails: company.Company?.address?.streetDetails || "",
          },
          pricing: {
            plan: company.Company?.pricing?.plan || "",
            billingDate: company.Company?.pricing?.billingDate || "",
          },
        },
      });
    }
  }, [company]);

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
          Detalles de la Empresa
        </Typography>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Email:</strong>
          </Typography>
          <Typography variant="body1">{companyData.email}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Rol:</strong>
          </Typography>
          <Typography variant="body1">{companyData.role}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Nombre de la Empresa:</strong>
          </Typography>
          <Typography variant="body1">
            {companyData.Company.name || "N/A"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>ID Legal:</strong>
          </Typography>
          <Typography variant="body1">
            {companyData.Company.legalId || "N/A"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Dirección:</strong>
          </Typography>
          <Typography variant="body1">
            {`${companyData.Company.address.streetDetails}, ${companyData.Company.address.district}, ${companyData.Company.address.canton}, ${companyData.Company.address.province}` ||
              "N/A"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Plan de Precios:</strong>
          </Typography>
          <Typography variant="body1">
            {companyData.Company.pricing?.plan || "N/A"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Día de Pago:</strong>
          </Typography>
          <Typography variant="body1">
            {new Date(
              companyData.Company.pricing?.billingDate
            ).toLocaleDateString() || "N/A"}
          </Typography>
        </Grid>

        {/* Correos de contacto */}
        <Grid item xs={12}>
          <Typography variant="h6">Correos de Contacto</Typography>
          {companyData.contacts.emails.length > 0 ? (
            companyData.contacts.emails.map((email, index) => (
              <Typography key={index} variant="body1">
                {index + 1}. {email}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No hay correos registrados.
            </Typography>
          )}
        </Grid>

        {/* Números de contacto */}
        <Grid item xs={12}>
          <Typography variant="h6">Números de Contacto</Typography>
          {companyData.contacts.numbers.length > 0 ? (
            companyData.contacts.numbers.map((number, index) => (
              <Typography key={index} variant="body1">
                {index + 1}. {number}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No hay números registrados.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ViewCompany;
