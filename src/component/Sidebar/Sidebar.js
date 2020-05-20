import React,{useContext} from "react";
import {SidebarContext} from "./SidebarContext"
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import SidebarItem from "./SidebarItem/SidebarItem"
import "./Sidebar.css"
function Sidebar({depthStep, depth, expanded, location }) {
   const items= useContext(SidebarContext);
   console.log(items)
  return (
    <div className="sidebar">
     <div className="title">
         <h2>HY ADMIN</h2>
         </div>
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
                location = {location}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}


export default Sidebar;