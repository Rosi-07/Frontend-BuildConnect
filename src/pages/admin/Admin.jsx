import api from "../../database/api";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import StatsCard from "./stats/StatsCard";
import { Box, Grid } from "@mui/material";
import CompanyCards from "./stats/CompanyCards";
import useAxiosPrivate from "../../hooks/auth/useAxiosPrivate";

function Admin() {
  const api = useAxiosPrivate();
  const [usuarios, setUsuarios] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usuariosResponse, empresasResponse, categoriesResponse] = await Promise.all([
          api.get("api/users"),
          api.get("api/projects"),
          api.get("api/categories"),
        ]);

        setUsuarios(usuariosResponse.data);
        setEmpresas(empresasResponse.data);
        setCategories(
          categoriesResponse.data.map((category) => ({
            name: category.name,
            count: category.count || 0,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(categories);

  return (
    <>
      <Sidebar />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 20 }}>
        

        <Grid container spacing={2} justifyContent="center" alignItems="stretch" marginBottom={4}>
          <Grid item xs={12} md={4}>
            <StatsCard title="Usuarios" value={usuarios.length} />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard title="Empresas" value={empresas.length} />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard title="Categorías" value={categories.length} />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ p: 2 }}>
              <CompanyCards categories={categories} />
            </Box>
          </Grid>
        </Grid>

      </Box>
    </>
  );
}

export default Admin;
