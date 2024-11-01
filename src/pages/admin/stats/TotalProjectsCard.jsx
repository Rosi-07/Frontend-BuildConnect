import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

const TotalProjectsCard = ({ projects }) => {
  return (
    <Card>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <AssignmentIcon fontSize="large" style={{ marginRight: '16px', color: '#1976d2' }} />
        <div>
          <Typography variant="h5">Total de Proyectos</Typography>
          <Typography variant="h4" color="primary">
            {projects.length}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalProjectsCard;
