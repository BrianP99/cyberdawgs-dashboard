import { Box, Typography } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../../data/RandomForest.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const RandomForest = () => {
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
        title="RANDOM FOREST"
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
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>1.000</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Precision</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>1.000</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Recall</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>1.000</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>F1 score</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>1.000</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Running time</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>30.397 seconds</td>
              </tr>
            </table>
            <Typography color={colors.grey[100]} variant="body1" mt={4}>
            Despite the overfitting, the performance scores of the random forest model are perfect, with an accuracy, precision, recall, and F1 score of 1.000. This may seem impressive, but it is important to keep in mind that perfect scores can be a red flag for overfitting. The fact that the model's performance is so perfect while its testing score is relatively low suggests that the model is overfitting to the training data.            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Box marginLeft={3} pb={2}>
            <Typography color={colors.grey[100]} variant="body1" mt={3} ml={4}>
            Based on the learning curve of the random forest model, it is evident that the model is overfitting. The training score is consistently high, but the testing score is much lower, indicating that the model has learned the training data too well and is not generalizing to new data. The training score starts at a near-perfect 0.9999778503793124 and only slightly decreases as the number of data points increases, while the testing score starts much lower at 0.5460984739418371 and does not increase significantly with more data points. This suggests that the model is not able to generalize well to new data points. Overall, while the random forest model has achieved perfect performance scores, it is clear from the learning curve that the model is overfitting. This means that the model may not generalize well to new, unseen data and should be further evaluated before being implemented in a real-world application. It is important to balance model complexity with the amount of data available and to regularly monitor the model's performance on new data to ensure that it is still accurate and reliable.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RandomForest;
