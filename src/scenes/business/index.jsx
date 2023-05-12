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
      <Header title="BUSINESS PLAN" subtitle="Business Strategy Page" style={{"margin-left": "5px"}}/>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h2">
          Executive Summary:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          iBDawgs Dashboard is a web-based platform that offers an innovative solution for detecting and analyzing unauthorized access using machine learning algorithms. The dashboard aims to make the digital world a safer place for individuals and organizations by providing cutting-edge cybersecurity solutions. Our skilled team of software developers and cybersecurity analysts are dedicated to developing this powerful and user-friendly platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Objectives:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          - To provide an intuitive and effective solution for detecting and analyzing unauthorized access. <br/>
          - To establish iBDawgs as a leader in machine learning solutions for cybersecurity. <br/>
          - To generate revenue through premium features, targeted advertising, and strategic partnerships.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Market Analysis:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          - Target Market: Individuals and organizations in need of cybersecurity solutions for web-based service      applications.<br/>
          - Market Size: The global cybersecurity market is expected to grow steadily as the demand for protection against cyber threats increases.<br/>
          - Competitors: Other cybersecurity service providers and software developers offering similar solutions.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Marketing Strategy:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          - Online Marketing: Utilize search engine optimization (SEO), social media advertising, and content marketing to raise awareness and drive traffic to iBDawgs Dashboard.<br/>
          - Strategic Partnerships: Establish partnerships with other organizations in the cybersecurity and technology sectors to expand our reach and improve our offerings.<br/>
          - Trade Shows & Conferences: Participate in relevant industry events to showcase our product, network with potential clients and partners, and stay informed on the latest trends and developments in cybersecurity and machine learning.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Revenue Model:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          - Freemium Model: Offer basic functionality for free, while providing premium features to paying subscribers.<br/>
          - Targeted Advertising: Display targeted ads to users based on their interests and browsing behavior.<br/>
          - Strategic Partnerships: Generate revenue through collaborations with other organizations in the cybersecurity and technology sectors.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Business;
