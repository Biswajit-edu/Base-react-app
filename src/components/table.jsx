import React, {useState} from "react";
import Select from 'react-select';
import "./table.css";
import "./mobile.css"
import Dropbox from "./dropbox"
import Tagbox from "./tagbox"
import "./dropbox.css"
const table = () => {
 
  return (
    <div>
      <div className="container2 flex">
        <div className="table_header font-bold">Uploads</div>
        <div className="table_content">
          <ul className="header_content grid justify-between">
            <li>S.No</li>
            <li>Links</li>
            <li>Prefix</li>
            <li>Add Tags</li>
            <li>Tags Added</li>
          </ul>
          <div className="table_row">
            <ul className="table_elements grid justify-between">
              <li className="items">02</li>
              <li className="items">
                <a href="https://www.google.com/" className="g_link">
                  www.google.com
                </a>
              </li>
              <li className="items">mkloubvvcg</li>
              <li className="items">
              <Dropbox/>
              </li>
              <li className="items">
              <div className=" added_tags flex gap-1">
              <Tagbox number={1}/><Tagbox number={2}/><Tagbox number={3}/><Tagbox number={4}/>
                </div>
              </li>
            </ul>
          </div>
          <div className="table_row">
            <ul className="table_elements grid justify-between">
              <li className="items">02</li>
              <li className="items">
                <a href="https://www.google.com/" className="g_link">
                  www.google.com
                </a>
              </li>
              <li className="items">mkloubvvcg</li>
              <li className="items">
              <Dropbox/>
              </li>
              <li className="items">
              <div className=" added_tags flex gap-1">
              <Tagbox number={1}/><Tagbox number={2}/>
                </div>
                </li>
            </ul>
          </div>
          <div className="table_row">
            <ul className="table_elements grid justify-between">
              <li className="items">02</li>
              <li className="items">
                <a href="https://www.google.com/" className="g_link">
                  www.google.com
                </a>
              </li>
              <li className="items">mkloubvvcg</li>
              <li className="items">
              <Dropbox/>
              </li>
              <li className="items" >
                <div className=" added_tags flex gap-1">
              <Tagbox number={1}/><Tagbox number={2}/><Tagbox number={3}/><Tagbox number={4}/>
                </div>
              </li>
            </ul>
          </div>
          <div className="table_row">
            <ul className="table_elements grid justify-between">
              <li className="items">02</li>
              <li className="items">
                <a href="https://www.google.com/" className="g_link">
                  www.google.com
                </a>
              </li>
              <li className="items">mkloubvvcg</li>
              <li className="items">
                {/* <Select className="select_tags" placeholder="Select Tags"  options={tags}/> */}
                <Dropbox/>
              </li>
              <li className="items">
              <div className=" added_tags flex gap-1">
              <Tagbox number={1}/><Tagbox number={2}/><Tagbox number={3}/>
                </div>
              </li>
            </ul>
          </div>
          <div className="table_row">
            <ul className="table_elements grid justify-between">
              <li className="items">02</li>
              <li className="items">
                <a href="https://www.google.com/" className="g_link">
                  www.google.com
                </a>
              </li>
              <li className="items">mkloubvvcg</li>
              <li className="items">
              <Dropbox/>
              </li>
              <li className="items flex gap-1">
              <Tagbox number={1}/><Tagbox number={2}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default table;
