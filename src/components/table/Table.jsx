import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableTranscations = () => {
  // dummy data
  const rows = [
    {
      id: 115151,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMWebp_QL65_.jpg",
      customer: "John Snow",
      date: "1 March",
      amount: 25,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 115153,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/51066I+GbpL._AC_SX466_.jpg",
      customer: "Jaime Lannister",
      date: "13 March",
      amount: 7,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 115134,
      product: "Asus ROG Strix",
      img: "https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_SX679_.jpg",
      customer: "Tyrion Lannister",
      date: "14 March",
      amount: 10,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 115151,
      product: "Lenovo ThinkBook",
      img: "https://m.media-amazon.com/images/I/61dI0lVj26L._AC_SX679_.jpg",
      customer: "Daenerys Targaryen",
      date: "31 March",
      amount: 15,
      method: "Online Payment",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table__cell">Tracking ID</TableCell>
            <TableCell className="table__cell">Product</TableCell>
            <TableCell className="table__cell">Customer</TableCell>
            <TableCell className="table__cell">Date</TableCell>
            <TableCell className="table__cell">Amount</TableCell>
            <TableCell className="table__cell">Payment Method</TableCell>
            <TableCell className="table__cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="table__cell">{row.id}</TableCell>
              <TableCell className="table__cell">
                <div className="cell__wrapper">
                  <img src={row.img} alt="product" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="table__cell">{row.customer}</TableCell>
              <TableCell className="table__cell">{row.date}</TableCell>
              <TableCell className="table__cell">{row.amount}</TableCell>
              <TableCell className="table__cell">{row.method}</TableCell>
              <TableCell className="table__cell">
                <span className={`status ${row.status} `}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTranscations;
