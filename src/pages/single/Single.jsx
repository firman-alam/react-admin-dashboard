import React from "react";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TableTranscations from "../../components/table/Table";
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single__container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="avatar"
                className="item__image"
              />
              <div className="details">
                <h1 className="item__title">Jon Snow</h1>
                <div className="detail__item">
                  <div className="item__key">Email:</div>
                  <div className="item__value">Jon.Snow@gmail.com</div>
                </div>
                <div className="detail__item">
                  <div className="item__key">Phone:</div>
                  <div className="item__value">+62 8123 113 103</div>
                </div>
                <div className="detail__item">
                  <div className="item__key">Address:</div>
                  <div className="item__value">The Wall, Winterfell</div>
                </div>
                <div className="detail__item">
                  <div className="item__key">Country:</div>
                  <div className="item__value">Westeros</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TableTranscations />
        </div>
      </div>
    </div>
  );
};

export default Single;
