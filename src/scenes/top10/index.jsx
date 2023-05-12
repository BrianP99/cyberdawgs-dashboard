import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header
        title="TOP 10 FEATURES"
        subtitle="Top 10 Features from Dataset"/>
      <Box height="75vh">
        <BarChart />
        <Box mt={2}>
        <p>When working with a categorical variable, a random classifier can be used as a baseline model to assess the performance of other classifiers. Since a categorical variable has a limited number of discrete values or categories, a random classifier can assign labels to instances with the same probability for each category. This means that the expected accuracy of a random classifier for a balanced dataset with k classes is 1/k. Therefore, a random classifier is a useful tool to establish a baseline performance metric for classification tasks, particularly when working with categorical variables.</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Bar;