import { Box } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../data/geo_map2.json';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import Header from "../components/Header";

const Map = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const plotLayout = {
    ...graphData.layout,
    font: { family: 'Arial', color: 'white' },
    plot_bgcolor: colors.primary[400],
    paper_bgcolor: colors.primary[400],
    margin: { l: 0, r: 30, b: 5, t: 5 },
    width: 330,
    height: 220,
    autosize: true,
    data: [{
      ...graphData.data[0],
      marker: {
        ...graphData.data[0].marker,
        size: 100 // set the size of the bubble marker to 10
      }
    }]
  };

  return (
    <Box >
      <Plot data={graphData.data} layout={plotLayout} />
    </Box>
  );
};

export default Map;