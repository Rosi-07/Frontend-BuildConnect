import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import StatsCard from "./stats/StatsCard";
import { Box, Grid } from "@mui/material";
import useAxiosPrivate from "../../hooks/auth/useAxiosPrivate";
import TotalProjectsCard from "./stats/TotalProjectsCard";
import ProvinceStatsCard from "./stats/ProvinceStatsCard";
import CantonStatsCard from "./stats/CantonStatsCard";
import { Person, Business, Category } from "@mui/icons-material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function Admin() {
  const api = useAxiosPrivate();
  const [usuarios, setUsuarios] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectType, setProjectType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          usuariosResponse,
          empresasResponse,
          categoriesResponse,
          projectsResponse,
          projectTypeResponse,
        ] = await Promise.all([
          api.get("users"),
          api.get("companies"),
          api.get("categories"),
          api.get("projects"),
          api.get("project-type"),
        ]);

        setUsuarios(usuariosResponse.data);
        setEmpresas(empresasResponse.data);
        setProjects(projectsResponse.data);
        setProjectType(projectTypeResponse.data);
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
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          p: 4,
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
              <div>
                <ProvinceStatsCard
                  title="Proyectos por Provincia"
                  projects={projects}
                />
              </div>
            </Box>
            <Box sx={{ p: 2 }}>
              <div>
                <CantonStatsCard
                  title="Proyectos por Cantón"
                  projects={projects}
                />
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} marginTop={10}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <StatsCard
                  title="Usuarios"
                  value={usuarios.length}
                  icon={<Person />}
                />
              </Grid>

              <Grid item xs={6}>
                <StatsCard
                  title="Empresas"
                  value={empresas.length}
                  icon={<Business />}
                />
              </Grid>

              <Grid item xs={6}>
                <StatsCard
                  title="Categorias"
                  value={categories.length}
                  icon={<Category />}
                />
              </Grid>

              <Grid item xs={6}>
                <TotalProjectsCard projects={projects} />
              </Grid>

              <Grid item xs={6}>
                <StatsCard
                  title="Tipos de proyectos"
                  value={projectType.length}
                  icon={<AssignmentTurnedInIcon />}
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
