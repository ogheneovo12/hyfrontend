import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
import "./SidebarItem.css"

function SidebarItem({active, depthStep = 10, depth = 0, expanded, item, location, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, link, onClick: onClickProp } = item;
  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className="sidebar-item-expand-arrow  sidebar-item-expand-arrow-expanded"
    
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>
    <Link to={link}  className="link">
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="sidebar-item-content"
        >
          <div className="sidebar-item-text">{label}</div>
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
        </div>
        {expandIcon}
      </ListItem>
      </Link>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

export default SidebarItem;