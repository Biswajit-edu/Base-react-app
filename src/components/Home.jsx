import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt, FaFileInvoice } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TbNotes, TbSettingsFilled } from "react-icons/tb";
import { IoCalendar, IoNotificationsSharp } from "react-icons/io5";
import { HiOutlineUpload } from "react-icons/hi";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import icon from "./final.png";
import "./home.css";
import "./mobile.css";
import Table from "./table";
const Home = () => {
  const [nav, setNav] = useState(false);
  const [upload, setUpload] = useState(false);
 
  return (
    <>
      <div className=" slidebar flex">
        <div className={"navbar flex bg-white"}>
          <div className=" flex">
        <div onClick={() => setNav(!nav)} className="cursor-pointer mt-2 ml-2 ">
          <AiOutlineMenu size={22} />
          <div className={(nav) ? "sidebar" : "hidden"}>
          <header>
            <div className="homelogo flex gap-x-2">
              <img src={icon} alt="ss" />
              <div className=" comp_name textlg">Base</div>
            </div>
          </header>
          <div class="menu-bar">
            <div class="menu">
              <ul class="menu-links">
                <li class="nav-link">
                  <a href="#">
                    <MdDashboard className="icons" />
                    <span class="text nav-text">Dashboard</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <FaCloudUploadAlt className=" icons" />
                    <span class="text nav-text">Upload</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <FaFileInvoice className="icons" />
                    <span class="text nav-text">Invoice</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <TbNotes className="icons" />
                    <span class="text nav-text">Schedule</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <IoCalendar className="icons" />
                    <span class="text nav-text">Calendar</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <IoNotificationsSharp className="icons" />
                    <span class="text nav-text">Notifications</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <TbSettingsFilled className="icons" />
                    <span class="text nav-text">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
          <div className="homelogo flex gap-x-3">
            <img className=" mt-1 ml-1" src={icon} alt="ss" size={20}/>
            <div className=" comp_name textlg font-semibold ">Base</div>
          </div>
          </div>
          <div className=" homeprofile2 flex justify-between">
              <IoNotificationsSharp className=" profile_bell mt-1" />
              <div className="profilelogo">
                <div className=" flex justify-center mt-1 ">P</div>
              </div>
            </div>
        </div>
        <div className={(nav) ? "sidebar xsidebar" : "hidden"}>
          <header>
            <div className="homelogo flex gap-x-2">
              <img src={icon} alt="ss" />
              <div className=" comp_name textlg">Base</div>
            </div>
          </header>
          <div class="menu-bar">
            <div class="menu">
              <ul class="menu-links">
                <li class="nav-link">
                  <a href="#">
                    <MdDashboard className="icons" />
                    <span class="text nav-text">Dashboard</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <FaCloudUploadAlt className=" icons" />
                    <span class="text nav-text">Upload</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <FaFileInvoice className="icons" />
                    <span class="text nav-text">Invoice</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <TbNotes className="icons" />
                    <span class="text nav-text">Schedule</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <IoCalendar className="icons" />
                    <span class="text nav-text">Calendar</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <IoNotificationsSharp className="icons" />
                    <span class="text nav-text">Notifications</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <TbSettingsFilled className="icons" />
                    <span class="text nav-text">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"sidebar sidebar2"}>
          <header>
            <div className="homelogo flex gap-x-7">
              <img src={icon} alt="ss" />
              <div className=" comp_name textlg">Base</div>
            </div>
          </header>
          <div class="menu-bar">
            <div class="menu">
              <ul class="menu-links">
                <li class="nav-link">
                  <a href="#">
                    <MdDashboard className="icons" />
                    <span class="text nav-text">Dashboard</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <FaCloudUploadAlt className=" icons" />
                    <span class="text nav-text">Upload</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <FaFileInvoice className="icons" />
                    <span class="text nav-text">Invoice</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <TbNotes className="icons" />
                    <span class="text nav-text">Schedule</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <IoCalendar className="icons" />
                    <span class="text nav-text">Calendar</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <IoNotificationsSharp className="icons" />
                    <span class="text nav-text">Notifications</span>
                  </a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    <TbSettingsFilled className="icons" />
                    <span class="text nav-text">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="uploadpage flex-col">
          <div className="Homeheader flex justify-between">
            <div className="  font-semibold text-lg ">Upload CSV</div>
            <div className=" homeprofile flex justify-between">
              <IoNotificationsSharp className=" profile_bell mt-1" />
              <div className="profilelogo">
                <div className=" flex justify-center mt-1">P</div>
              </div>
            </div>
          </div>
          <div className="dropbox">
            <div className="formbold-mb-5 formbold-file-input flex">
              <label for="file" className=" flex-col">
              <input type="file" name="file" id="file" />
                <div>
                  <PiMicrosoftExcelLogo className=" bg-green-600 text-white w-7 h-7" />
                </div>
                <div className="dropbox_text flex">
                  <span className="formbold-drop-file ">
                    {" "}
                    Drop your excel sheet here{" "}
                  </span>
                  <span className="formbold-or"> Or </span>
                  <span className="formbold-browse"> Browse </span>
                </div>
              </label>
            </div>
            <button className="upload flex gap-x-2 cursor-pointer" onClick={()=>setUpload(true)}>
              <HiOutlineUpload className=" w-8 h-8" />
              upload
            </button>
          </div>
          <div>
            {upload && <Table />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
