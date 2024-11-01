import React from "react";
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

const ProvinceStatsCard = ({ title, projects = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const provinceCounts = projects.reduce((acc, project) => {
    if (project.location && project.location.province) {
      const province = project.location.province.trim().toLowerCase();
      console.log(`Contando provincia: ${province}`);

      acc[province] = (acc[province] || 0) + 1;
    } else {
      console.warn("Proyecto sin provincia:", project);
    }
    return acc;
  }, {});

  const data = Object.entries(provinceCounts).map(([province, count], id) => ({
    id,
    value: count,
    label: province.charAt(0).toUpperCase() + province.slice(1),
  }));

  return (
    <Card className={clsx("district-stats-card", cardStyles.card)}>
      <CardContent
        className={clsx("district-stats-content", cardStyles.content)}
      >
        <Typography
          variant="h5"
          component="h2"
          className={clsx("district-stats-title", cardStyles.title)}
        >
          {title}
        </Typography>
        <Box
          className={clsx(
            "district-stats-chart-container",
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

export default ProvinceStatsCard;
