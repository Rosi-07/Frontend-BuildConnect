import { PieChart } from "@mui/x-charts/PieChart";

const PieChartComponent = ({ projects, categories }) => {
  const data = categories.map((category) => {
    const count = projects.filter(
      (project) => project.categoryId === category.id
    ).length;
    return {
      id: category.id,
      label: category.name,
      value: count,
    };
  });

  return (
    <PieChart
      series={[{ data }]}
      height={200}
      slotProps={{ legend: { hidden: false } }}
    />
  );
};

export default PieChartComponent;
