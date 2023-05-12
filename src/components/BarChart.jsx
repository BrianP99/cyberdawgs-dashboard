import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { mockBarData as data } from "../data/bardata";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();

  // sort the data array in descending order based on the values
  data.sort((a, b) => b.value - a.value);

  const colors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    theme.palette.info.main,
    theme.palette.success.main,
  ];

  const getColor = (bar) => {
    return colors[bar.index % colors.length];
  };

  const customTheme = {
    axis: {
      legend: {
        text: {
          fill: "white",
          fontSize: 12,
        },
      },
      ticks: {
        line: {
          stroke: "white",
        },
        text: {
          fill: "white",
          fontSize: 12,
        },
      },
    },
    grid: {
      line: {
        stroke: "white",
        strokeWidth: 1,
      },
    },
    labels: {
      text: {
        fill: "white",
        fontSize: 12,
      },
    },
  };

  return (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="key"
      margin={{ top: 50, right: 60, bottom: 100, left: 60 }}
      padding={0.3}
      layout="vertical"
      colors={getColor}
      enableGridX={false}
      enableGridY={true}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      borderWidth={1}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 25,
        legend: "Feature",
        legendPosition: "middle",
        legendOffset: 90,
        format: (value) => value,
        style: {
          fontSize: 12,
          fill: "white",
        },
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Percentage",
        legendPosition: "middle",
        legendOffset: -50,
        format: (value) => `${value}%`,
        style: {
          fontSize: 12,
          fill: "white",
        },
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      role="application"
      barAriaLabel={(e) => `${e.data.key}: ${e.data.value}%`}
      theme={customTheme}
      // other props
    />
  );
};

export default BarChart;