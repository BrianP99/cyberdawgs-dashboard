import { Box, Typography } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../../data/KNeighbors.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const KNeighbors = () => {
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
        title="K-NEAREST NEIGHBORS"
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
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.989</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Precision</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.989</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Recall</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.992</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>F1 score</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.991</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Running time</td>
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>401.435 seconds</td>
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
            When we consider the learning curve, we observe that the model is overfitting, as the training score is significantly higher than the testing score. This indicates that the model has learned the training data too well and may not generalize well to new, unseen data. Additionally, the learning curve shows that the model's performance improves with additional training data, but only up to a certain point, after which the performance plateaus or starts to decline. This suggests that the model may benefit from additional data up to a certain point, but beyond that, the model's complexity may lead to overfitting and a decrease in performance. Combining the observations from the performance scores and the learning curve, we can conclude that the model needs to be adjusted to improve its generalization ability and avoid overfitting. One approach could be to simplify the model by reducing the number of features used for classification or using regularization techniques such as L1 or L2 regularization. Additionally, cross-validation can be used to assess the model's performance and ensure that it generalizes well to new data. Moreover, the learning curve can provide insight into the amount of training data required to achieve optimal model performance. In this case, we observe that the model's performance improves with additional training data, up to a certain point, beyond which the performance plateaus or starts to decline. This information can be useful in determining the amount of data required for model training and can help optimize the model's performance. Overall, combining the performance scores with the learning curve analysis can provide a more comprehensive understanding of the model's strengths and weaknesses and guide the development of a better-performing model.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KNeighbors;
