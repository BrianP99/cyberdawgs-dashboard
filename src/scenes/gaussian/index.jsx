import { Box, Typography } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../../data/GaussianNB.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const Gaussian = () => {
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
        title="GAUSSIAN NAIVE BAYES"
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
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.796</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Precision</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.736</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Recall</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>1.000</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>F1 score</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.848</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Running time</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.229 seconds</td>
              </tr>
            </table>
            <Typography color={colors.grey[100]} variant="body1" mt={4}>
            The k-nearest neighbors model appears to perform very well on the given dataset. The accuracy, precision, and f1 score are all above 0.98, indicating that the model is able to make accurate predictions with a high degree of confidence. The recall score is also very high, indicating that the model is able to correctly identify a large proportion of the positive samples in the dataset. The running time of the model is quite long, at 401.435 seconds, which could be a concern if the dataset is very large or the model needs to be trained multiple times. However, if the model is only being used for occasional predictions, this may not be a significant issue.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Box marginLeft={3} pb={2}>
            <Typography color={colors.grey[100]} variant="body1" mt={3} ml={4}>
            The learning curve analysis showed that the model's training score increased as the size of the training set increased, which is expected. However, the testing score plateaued at around 99% after the training set size reached about 90,000 samples, indicating that the model was not improving significantly with additional training data. This suggests that the KNN model may have reached its limit in terms of what it can learn from the available data. Overall, the learning curve analysis suggests that the KNN model may not benefit significantly from additional training data, while the performance metrics indicate that the model performed well in terms of classification accuracy, precision, recall, and F1 score. However, the slow running time of the model may be a limiting factor in certain applications.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gaussian;
