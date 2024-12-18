import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";

const cardStyles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    borderRadius: "16px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  content: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: "16px",
    color: "#212121",
    textAlign: "center",
  },
  chartContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  legendContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "16px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    margin: "0 8px",
  },
  legendColor: {
    width: "16px",
    height: "16px",
    marginRight: "8px",
  },
};

const CompanyCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projectData = {
    "Trabajo en Vidrios": 30,
    "Reconstrucción de Casas": 40,
    "Instalación Eléctrica": 20,
    "Pintura de Interiores": 10,
  };

  const data = Object.entries(projectData).map(([category, count], id) => ({
    id,
    value: count,
    label: category,
  }));

  return (
    <Card className={clsx("company-cards", cardStyles.card)}>
      <CardContent
        className={clsx("company-cards-content", cardStyles.content)}
      >
        <Typography
          variant="h5"
          component="h2"
          className={clsx("company-cards-title", cardStyles.title)}
        >
          Categorías de Proyectos
        </Typography>
        <Box
          className={clsx(
            "company-cards-chart-container",
            cardStyles.chartContainer
          )}
        >
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            height={200}
            slotProps={{ legend: { hidden: isMobile } }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CompanyCards;
