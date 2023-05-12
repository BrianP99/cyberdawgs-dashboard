import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" style={{"margin-left": "5px"}}/>

      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
            What is network traffic data in cybersecurity, and why is it important?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Network traffic data refers to the information that is transmitted between devices on a network, and it is important because it can reveal a lot about the activity and behavior of those devices. By monitoring network traffic data, cybersecurity professionals can identify potential security threats and take steps to prevent them.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          What are the most common types of network traffic data that cybersecurity professionals monitor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The most common types of network traffic data that cybersecurity professionals monitor include IP addresses, ports, protocols, and packet payloads.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          How can network traffic data help detect and prevent cyber attacks?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Network traffic data can help detect and prevent cyber attacks by providing insight into the behavior of devices on the network. By analyzing traffic patterns and looking for anomalies, cybersecurity professionals can identify potential threats and take action to prevent them.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          What are some of the key metrics that cybersecurity professionals look at when analyzing network traffic data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Some of the key metrics that cybersecurity professionals look at when analyzing network traffic data include traffic volume, flow, and patterns. They also look for unusual or suspicious activity, such as traffic spikes or unusual packet payloads.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          How can network traffic data be used to identify anomalies or suspicious activity on a network?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Network traffic data can be used to identify anomalies or suspicious activity on a network by comparing current traffic patterns to historical data and looking for deviations. This can help identify potential security threats, such as unauthorized access attempts or data exfiltration.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          What tools or technologies are used to collect and analyze network traffic data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Tools and technologies used to collect and analyze network traffic data include packet sniffers, intrusion detection systems, and network traffic analysis platforms.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          How can network traffic data be used to improve overall network security?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Network traffic data can be used to improve overall network security by providing insights into potential vulnerabilities or weak spots in the network. This information can be used to implement additional security measures or improve existing ones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          What are some of the common challenges that organizations face when collecting and analyzing network traffic data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Common challenges organizations face when collecting and analyzing network traffic data include managing large volumes of data, dealing with encrypted traffic, and ensuring data privacy and compliance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          How can network traffic data be used to identify and investigate security incidents?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Network traffic data can be used to identify and investigate security incidents by providing a detailed view of network activity before, during, and after an incident. This information can help identify the root cause of the incident and inform remediation efforts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{"margin-left": "10px"}}>
        <AccordionSummary
          sx={{
            backgroundColor: colors.primary[400]
          }}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
          What are some best practices for collecting, analyzing, and protecting network traffic data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Best practices for collecting, analyzing, and protecting network traffic data include implementing strong encryption and access controls, using automated tools to manage and analyze data, and ensuring compliance with relevant regulations and standards such as GDPR and PCI DSS.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;