import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Business = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="BUSINESS PLAN" subtitle="Business Strategy Page" style={{ "margin-left": "5px" }} />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box gridColumn="span 12">
          <Typography
            variant="h4"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Executive Summary
          </Typography>
          <Typography style={{ "margin-left": "10px", "margin-top": "10px" }}>
            iBDawgs Dashboard is a web-based platform that offers an innovative solution for detecting and analyzing unauthorized access using machine learning algorithms. The dashboard aims to make the digital world a safer place for individuals and organizations by providing cutting-edge cybersecurity solutions. Our skilled team of software developers and cybersecurity analysts are dedicated to developing this powerful and user-friendly platform.
          </Typography>
        </Box>
        <Box gridColumn="span 12" mb={5}>
          <Typography
            variant="h4"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Objectives
          </Typography>
          <Typography style={{ "margin-left": "10px", "margin-top": "10px" }}>
            - Develop and deploy an industry-leading solution for detecting and analyzing unauthorized access that meets customer needs. <br />
            - Establish iBDawgs as a top provider of machine learning solutions for cybersecurity, leveraging our technology and expertise to drive industry growth. <br />
            - Generate revenue through premium features, strategic partnerships, and targeted advertising to maximize ROI and enhance brand awareness.
          </Typography>
        </Box>
        <Box gridColumn="span 12" mb={3}>
          <Typography
            variant="h4"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Revenue Model
          </Typography>
          <Typography style={{ "margin-left": "10px", "margin-top": "10px" }}>
            - Freemium Model: Offer basic functionality for free, while providing premium features to paying subscribers.<br />
            - Targeted Advertising: Display targeted ads to users based on their interests and browsing behavior.<br />
            - Strategic Partnerships: Generate revenue through collaborations with other organizations in the cybersecurity and technology sectors.
          </Typography>
        </Box>
        <Box gridColumn="span 12" mb={3}>
          <Typography
            variant="h4"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Market Analysis
          </Typography>
          <Typography style={{ "margin-left": "10px", "margin-top": "10px" }}>
            - Target Market: Individuals and organizations in need of cybersecurity solutions for web-based service      applications.<br />
            - Market Size: The global cybersecurity market is expected to grow steadily as the demand for protection against cyber threats increases.<br />
            - Competitors: Other cybersecurity service providers and software developers offering similar solutions.
          </Typography>
        </Box>
        <Box gridColumn="span 12" mb={3}>
          <Typography
            variant="h4"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Marketing Strategy
          </Typography>
          <Typography style={{ "margin-left": "10px", "margin-top": "10px" }}>
            - Online Marketing: Utilize search engine optimization (SEO), social media advertising, and content marketing to raise awareness and drive traffic to iBDawgs Dashboard.<br />
            - Strategic Partnerships: Establish partnerships with other organizations in the cybersecurity and technology sectors to expand our reach and improve our offerings.<br />
            - Trade Shows & Conferences: Participate in relevant industry events to showcase our product, network with potential clients and partners, and stay informed on the latest trends and developments in cybersecurity and machine learning.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Business;
