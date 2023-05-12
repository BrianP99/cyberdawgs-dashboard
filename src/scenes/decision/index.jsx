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
                <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>1.207 seconds</td>
              </tr>
            </table>
            <Typography color={colors.grey[100]} variant="body1" mt={4}>
            Our decision tree model has achieved perfect scores on all four performance metrics, with an accuracy, precision, recall, and F1 score of 1.000. This is a highly impressive result, suggesting that the decision tree model has learned the patterns and relationships within the data perfectly, without any misclassifications or errors. However, achieving perfect scores on all performance metrics is highly unusual in machine learning, especially in complex datasets. Therefore, it's essential to verify the results to ensure that there are no errors in the implementation or evaluation of the model. In addition to the perfect performance scores, the learning curve of the model also indicates that the testing and training scores converge at a very high level.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Box marginLeft={3} pb={2}>
            <Typography color={colors.grey[100]} variant="body1" mt={3} ml={4}>
            This is further evidence that the model is well-optimized and accurately captures the patterns in the data. Overall, based on the performance metrics and learning curve, the decision tree model appears to be highly accurate and well-optimized for the given dataset. However, it's important to conduct further analysis and verification to ensure that the results are not the result of overfitting or other errors in the model. It's important to note that while the decision tree model has achieved perfect scores on all four performance metrics, there is a risk of overfitting. Overfitting occurs when a model becomes too complex and starts to fit the noise in the data rather than the underlying patterns. In the case of a decision tree model, this can occur when the tree is allowed to grow too deep and becomes overly complex. However, in this case, it's unclear whether the model is overfit or whether it has indeed learned the underlying patterns perfectly. It's possible that the data simply contains clear patterns that the model was able to learn accurately. Nonetheless, it's important to remain cautious and evaluate the model's performance on new, unseen data to ensure that it generalizes well beyond the training data. In addition, it may be worth exploring ways to simplify the model or implement regularization techniques to reduce the risk of overfitting in future iterations.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DecisionTree;
