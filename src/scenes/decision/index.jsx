import { Box, Typography } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../../data/DecisionTree.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const DecisionTree = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const plotLayout = {
    ...graphData.layout,
    title: { text: 'Learning Curve', font: { size: 20 } },
    font: { family: 'Arial', color: 'white' },
    plot_bgcolor: colors.primary[400],
    paper_bgcolor: colors.primary[400],
    margin: { l: 50, r: 50, b: 50, t: 50 },
    width: 500,
    height: 500,
    autosize: true
  };

  return (
    <Box m="20px">
      <Header
        title="DECISION TREE"
        subtitle="Model Algorithm on Dataset"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor={colors.primary[500]}
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Box marginLeft={2} padding={2}>
            <Plot data={graphData.data} layout={plotLayout} />
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            p={4}
            marginRight={3}
            height="500px"
          >
            <Typography color={colors.grey[100]} variant="h4" fontWeight="600" mb={2}>
              Performance Analysis
            </Typography>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Metric</th>
                <th style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>Value</th>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Accuracy</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.808</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Precision</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.749</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Recall</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.999</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>F1 score</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.856</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Running time</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.263 seconds</td>
              </tr>
            </table>
            <Typography color={colors.grey[100]} variant="body1" mt={4}>
              The table above presents the performance metrics of the model. The model demonstrates an accuracy of 0.808 and an F1 score of 0.856, which indicates a balanced performance between precision and recall. The model also shows a high recall of 0.999, meaning it correctly identifies most of the true positive cases. The running time for the model is 0.263 seconds.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Box marginLeft={3} pb={2}>
            <Typography color={colors.grey[100]} variant="body1" mt={3} ml={4}>
              The table above presents the performance metrics of the model. The model demonstrates an accuracy of 0.808 and an F1 score of 0.856, which indicates a balanced performance between precision and recall. The model also shows a high recall of 0.999, meaning it correctly identifies most of the true positive cases. The running time for the model is 0.263 seconds.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DecisionTree;
