import { Box, Tooltip, IconButton, useTheme } from "@mui/material";
import { Info } from "@mui/icons-material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import mockDataContacts from "../../data/filt_data.json";
import Header from "../../components/Header";

mockDataContacts.forEach((item, i) => {
  item.id = i+1;
})

const FeatureTooltip = ({ featureName, explanation }) => (
  <Tooltip title={explanation} placement="bottom" >
    <IconButton>
      <Info />
    </IconButton>
  </Tooltip>
);

const Features = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { 
      field: "id", 
      headerName: (
        <>
          <span>ID</span>
        </>
      ), flex: 0.5
    },
    {
      field: "Fwd_Packet_Length_Max",
      headerName: (
        <>
          <span>Fwd_Packet_Length_Max</span>
          <FeatureTooltip
            explanation="The maximum length of forward packets in the flow. The distribution of packet lengths can be used to identify specific types of attacks, such as buffer overflow or data injection." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "Init_Win_bytes_forward",
      headerName: (
        <>
          <span>Init_Win_bytes_forward</span>
          <FeatureTooltip
            explanation="A TCP (Transmission Control Protocol) parameter that controls the maximum amount of data a sender can transmit before waiting for an acknowledgement from the receiver." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "Subflow_Fwd_Bytes",
      headerName: (
        <>
          <span>Subflow_Fwd_Bytes</span>
          <FeatureTooltip
            explanation="A network parameter that measures the total amount of data forwarded over a specific subflow in a multi-path TCP (MPTCP) connection." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "Fwd_Packet_Length_Mean",
      headerName: (
        <>
          <span>Fwd_Packet_Length_Mean</span>
          <FeatureTooltip
            explanation="The mean and standard deviation of forward packet lengths in the flow. This can be used to identify outliers and anomalies in the packet length distribution." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "Subflow_Fwd_Packets",
      headerName: (
        <>
          <span>Subflow_Fwd_Packets</span>
          <FeatureTooltip
            explanation="A network parameter that measures the total number of packets forwarded over a specific subflow in a multi-path TCP (MPTCP) connection." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "Avg_Fwd_Segment_Size",
      headerName: (
        <>
          <span>Avg_Fwd_Segment_Size</span>
          <FeatureTooltip
            explanation="The average size of segments (a segment is a part of a packet that is transmitted over a network) in the forward direction of a network flow." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "Destination_Port",
      headerName: (
        <>
          <span>Destination_Port</span>
          <FeatureTooltip
            explanation="The number of the network traffic is important for identifying the type of application or service that is being used, which can help in identifying potential security threats." 
          />
        </>
      ),
      flex: 0.7,
    },
    {
      field: "Bwd_Packet_Length_Min",
      headerName: (
        <>
          <span>Bwd_Packet_Length_Min</span>
          <FeatureTooltip
            explanation="The maximum length of backward packets in the flow. The distribution of packet lengths can be used to identify specific types of attacks, such as buffer overflow or data injection." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "Total_Length_of_Fwd_Packets",
      headerName: (
        <>
          <span>Total_Length_of_Fwd_Packets</span>
          <FeatureTooltip
            explanation="The total length of packets in the forward direction. This can be used to identify large data transfers or exfiltration attempts." 
          />
        </>
      ),
      flex: 1,
    },
    {
      field: "act_data_pkt_fwd",
      headerName: (
        <>
          <span>act_data_pkt_fwd</span>
          <FeatureTooltip
            explanation="A network parameter that represents the actual number of data packets that have been forwarded between two network devices. It is a measure of the amount of data that has been successfully transmitted between the sender and receiver." 
          />
        </>
      ),
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="FEATURE SELECTION"
        subtitle="Features from Dataset (Descriptions in each column name)"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Box >
        <p>*This dataset can be downloaded locally for your additional analysis purposes.</p>
      </Box>
    </Box>
  );
};

export default Features;