import api from "../../database/api";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import StatsCard from "./stats/StatsCard";
import { Box, Grid } from "@mui/material";
import CompanyCards from "./stats/CompanyCards";

function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usuariosResponse, empresasResponse] = await Promise.all([
          api.get("/users"),
          api.get("/properties"),
        ]);

        const usuariosData = usuariosResponse.data;
        setUsuarios(usuariosData);

        const empresasData = empresasResponse.data;
        setEmpresas(empresasData);
      } catch (error) {
        console.error(error);
      }
      fetchData();
    };
  }, [api]);


  return (
    <>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <div className="mb-4">
                <CompanyCards />
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} marginTop={10}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <StatsCard
               
              />
            </Grid>
            
          </Grid>
        </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Admin;
