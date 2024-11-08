import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import StatsCard from "./stats/StatsCard";
import { Box, Grid } from "@mui/material";
import useAxiosPrivate from "../../hooks/auth/useAxiosPrivate";
import TotalProjectsCard from "./stats/TotalProjectsCard";
import ProvinceStatsCard from "./stats/ProvinceStatsCard";
import CantonStatsCard from "./stats/CantonStatsCard";
import { Person, Business, Category } from "@mui/icons-material";
import Footer from "../../components/layout/Footer";
import Typography from "@mui/material/Typography";

function Admin() {
  const api = useAxiosPrivate();
  const [usuarios, setUsuarios] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          usuariosResponse,
          empresasResponse,
          categoriesResponse,
          projectsResponse,
        ] = await Promise.all([
          api.get("users"),
          api.get("companies"),
          api.get("categories"),
          api.get("projects"),
        ]);
        setUsuarios(usuariosResponse.data);
        setEmpresas(empresasResponse.data);
        setProjects(projectsResponse.data);
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

  return (
    <>
      <Sidebar />
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#F4F6F8",
          minHeight: "65vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Panel de Administración
        </Typography>

        <Grid container spacing={3} sx={{ marginBottom: 8 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Usuarios"
              value={usuarios.length}
              icon={<Person />}
              sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Empresas"
              value={empresas.length}
              icon={<Business />}
              sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Categorías"
              value={categories.length}
              icon={<Category />}
              sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TotalProjectsCard
              projects={projects}
              sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: "#ffffff" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProvinceStatsCard
              title="Proyectos por Provincia"
              projects={projects}
              sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CantonStatsCard
              title="Proyectos por Cantón"
              projects={projects}
              sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: "#ffffff" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Admin;
