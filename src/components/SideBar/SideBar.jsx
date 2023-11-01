import React, { useState, useEffect } from "react";
import "./SideBar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState();

  const handleResize = () =>{
    setWindowWidth(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  },[]);



  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const bars = (
    <div
      className="bars"
      style={expanded ? { left: "60%" } : { left: "5%" }}
      onClick={() => setExpanded(!expanded)}
    >
      <UilBars />
    </div>
  );

  const close = (
    <div className="close" style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
      <UilTimes onClick={() =>setExpanded(!expanded)} />
    </div>
  );

  return (
    <>
      {!expanded && bars}
      <motion.div
        className="Sidebar"
        variants={windowWidth < 1200 ? sidebarVariants : {true: {left: "0"},}}
        animate={windowWidth <= 768 ? `${expanded}` : `true`}
      >
        {expanded && close}

        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>


        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                onClick={() => setSelected(index)}
                key={index}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
