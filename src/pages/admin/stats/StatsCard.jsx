// stats/StatsCard.js
import { Card, CardContent, Typography } from "@mui/material";

function StatsCard({ title, value, icon }) {
  return (
    <Card>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        {icon && <div style={{ marginRight: '16px', color: '#1976d2' }}>{icon}</div>} 
        <div>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h4" color="primary">
            {value}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
