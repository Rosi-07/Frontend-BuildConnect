// stats/StatsCard.js
import { Card, CardContent, Typography } from "@mui/material";

function StatsCard({ title, value }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
