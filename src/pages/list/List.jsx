import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list__container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
