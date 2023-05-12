import { Box, useTheme } from "@mui/material";
import AttackChart from "../../components/AttackChart";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const AttackType = () => {
  
const theme = useTheme();
const colors = tokens(theme.palette.mode);

return (
<Box m="20px">
   <Header
      title="DDoS ATTACK TYPES"
      subtitle="Distribution of DDos Attack Types from Dataset"/>
   <Box height="75vh">
      <AttackChart />
      <Box m="20px">
         <Header title="Descriptions of Attack Types" style={{"margin-left": "5px"}}/>
         <Accordion defaultExpanded style={{"margin-left": "10px"}}>
         <AccordionSummary
         sx={{
         backgroundColor: colors.primary[400]
         }}
         expandIcon={
         <ExpandMoreIcon />
         }>
         <Typography variant="h5">
            DDoS
         </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography>
               Distributed Denial of Service is an attack in which multiple systems flood a targeted server or network with traffic, overwhelming it and causing it to stop responding to legitimate requests.
            </Typography>
         </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded style={{"margin-left": "10px"}}>
         <AccordionSummary
         sx={{
         backgroundColor: colors.primary[400]
         }}
         expandIcon={
         <ExpandMoreIcon />
         }>
         <Typography variant="h5">
            DDoS Hulk
         </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography>
               A type of DoS attack that uses a high-and-fast approach, meaning it sends a large volume of traffic to a target server or website in a short period of time. This overwhelming traffic also leads to a denial of service.
            </Typography>
         </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded style={{"margin-left": "10px"}}>
         <AccordionSummary
         sx={{
         backgroundColor: colors.primary[400]
         }}
         expandIcon={
         <ExpandMoreIcon />
         }>
         <Typography variant="h5">
            DDoS Slowhttptest
         </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography>
               A type of DoS attack that takes advantage of a vulnerability in the HTTP protocol. It sends incomplete HTTP requests to a server or website, keeping the connection open and tying up server resources until the connection times out.
            </Typography>
         </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded style={{"margin-left": "10px"}}>
         <AccordionSummary
         sx={{
         backgroundColor: colors.primary[400]
         }}
         expandIcon={
         <ExpandMoreIcon />
         }>
         <Typography variant="h5">
            DDoS GoldenEye
         </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography>
               A type of DoS attack that uses a low-and-slow approach, meaning it sends small amounts of traffic at a slow rate to a target server or website. This makes it difficult for the target to distinguish between legitimate traffic and malicious traffic, ultimately leading to a denial of service.
            </Typography>
         </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded style={{"margin-left": "10px"}}>
         <AccordionSummary
         sx={{
         backgroundColor: colors.primary[400]
         }}
         expandIcon={
         <ExpandMoreIcon />
         }>
         <Typography variant="h5">
            DDoS slowloris
         </Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography>
               A type of DoS attack that also exploits a vulnerability in the HTTP protocol. It sends incomplete HTTP requests to a server or website, but instead of keeping the connection open, it sends more incomplete requests, gradually tying up the server resources.
            </Typography>
         </AccordionDetails>
         </Accordion>
      </Box>
   </Box>
</Box>
);
};

export default AttackType;