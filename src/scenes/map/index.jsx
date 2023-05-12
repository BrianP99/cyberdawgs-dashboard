import { Box } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../../data/geo_map.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const Map = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const plotLayout = {
    ...graphData.layout,
    font: { family: 'Arial', color: 'white' },
    plot_bgcolor: colors.primary[400],
    paper_bgcolor: colors.primary[400],
    margin: { l: 20, r: 20, b: 20, t: 20 },
    width: 1000,
    height: 500,
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
    <Box m="20px">
      <Header
        title="NETWORK TRAFFIC MAP"
        subtitle="Distribution of BENIGN IP Addresses"
      />
      <Plot data={graphData.data} layout={plotLayout} />
      <Box mt={2}>
        <p>Based on the dataset available in the map, it is possible to make an inference regarding the geographic distribution of benign IP addresses. However, it is important to note that the dataset is limited and may not be representative of the entire IP address space. Further analysis and validation using a larger and more diverse dataset would be necessary to draw more accurate conclusions regarding IP address usage patterns in different regions. In the cybersecurity domain, such analysis can help in identifying potential threats and vulnerabilities in different geographic locations and inform risk management strategies.</p>
      </Box>
    </Box>
  );
};

export default Map;