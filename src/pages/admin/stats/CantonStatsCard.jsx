import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
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
};

const CantonStatsCard = ({ title, projects = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  const cantonCounts = projects.reduce((acc, project) => {
    if (project.location && project.location.canton) { 
      const canton = project.location.canton.trim().toLowerCase();


      acc[canton] = (acc[canton] || 0) + 1;
    } else {
      console.log("Project without canton", project);
    }
    return acc;
  }, {});



  const data = Object.entries(cantonCounts).map(([canton, count], id) => ({
    id,
    value: count,
    label: canton.charAt(0).toUpperCase() + canton.slice(1), 
  }));

  return (
    <Card className={clsx("canton-stats-card", cardStyles.card)}>
      <CardContent className={clsx("canton-stats-content", cardStyles.content)}>
        <Typography variant="h5" component="h2" className={clsx("canton-stats-title", cardStyles.title)}>
          {title}
        </Typography>
        <Box className={clsx("canton-stats-chart-container", cardStyles.chartContainer)}>
          <PieChart
            series={[{
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: {
                innerRadius: 30,
                additionalRadius: -30,
                color: "gray",
              },
            }]}
            height={200}
            slotProps={{ legend: { hidden: isMobile } }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CantonStatsCard;
