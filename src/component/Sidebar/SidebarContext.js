import React,{useState,createContext} from "react"
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";

export const SidebarContext = createContext();
export function SidebarItemProvider(props){
  function onClick(e, item) {
 
  }
  const [items,] = useState([
        { name: "home", label: "Home", link:"/", Icon: HomeIcon },

        "divider",
        { name: "youths", label: "youths", link:"/youths" },
        "divider",
        {
          name: "Birthdays",
          label: "Birthdays",
          Icon: ReceiptIcon,
          link:"/birthdays",
          items: [
            { name: "Today", label: "Today",  link:"/birthdays/today", onClick },
            "divider",
            { name: "ThisWeek", label: "This Week",   link:"/birthdays/thisweek", onClick },
            "divider",
            { name: "Thismonth", label: "This Month",   link:"/birthdays/thismonth", onClick },
            "divider",
            { name: "sendGreetings", label: "SendGreetings",   link:"/birthdays/SendGreetings", onClick },
          ]
        },
        "divider",
        { name: "Notification", label: "Notification", link:"/notification", Icon:NotificationsIcon },
        "divider",
        { name: "Settings", label: "Settings", link:"/Settings", Icon:SettingsIcon },
        "divider",
      ])
     
    return (
        <SidebarContext.Provider value={items}>
            {props.children}
        </SidebarContext.Provider>
    )
}