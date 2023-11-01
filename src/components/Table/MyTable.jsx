import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './MyTable.css';

function createTable(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createTable("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createTable("Big Baza Bang", 18908424, "2 March 2022", "Pending"),
  createTable("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createTable("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

const MyTable = () => {

  const statusStyles =(status)=>{
    let bgColor;
    let fontColor;
    switch(status){
      case 'Pending':
        bgColor = 'rgb(238,199,20)';
        fontColor = 'black';
      break;
      case 'Approved':
        bgColor = 'rgb(176,217,141)';
        fontColor = 'black';
      break;
      case 'Delivered':
        bgColor = 'rgb(32,63,164)';
        fontColor = 'white';
      break;
      default:
        bgColor = 'white';
        fontColor = 'black';
    }  


    return {
      backgroundColor: bgColor,
      sx: {
        width: {
          xs: '70%',
          md: '35%'
        }
      },
      padding: "8px",
      height: "100%",
      borderRadius: "12px",
      textAlign: "center",
      fontWeight: "bold",
      color: fontColor
    }

  };



  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <div style={statusStyles(row.status)}>{row.status}</div>
                </TableCell>
                <TableCell align="left" className="Details">Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
