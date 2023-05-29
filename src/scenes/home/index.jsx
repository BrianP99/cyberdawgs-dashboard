import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import img1 from "../../images/members.png";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Welcome to CyberDawgs Dashboard" subtitle="Aaron Liu, Bryan Bernardi, Brian Park, Darren Gunadharma, Jonathan Prasetyo" style={{ "margin-left": "5px" }} />
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
            Our Team
          </Typography>
          <Typography style={{ "marginLeft": "10px", "marginTop": "10px" }}>
            iBDawgs is a team of skilled software developers and cybersecurity analysts dedicated to making the digital world a safer place. At iBDawgs, we understand the critical importance of cybersecurity in today's digital landscape. Malicious cyber attacks can have devastating consequences for both individuals and organizations, and we are committed to developing innovative solutions that can help prevent these attacks from happening. With a focus on machine learning, iBDawgs is working to develop a powerful machine learning model to combat various malicious cyber-attacks.          
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" marginTop={5}>
                <img
                  alt="team-photo"
                  width="500"
                  height="auto"
                  src={img1}
                />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
