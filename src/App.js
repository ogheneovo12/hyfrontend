import React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import { SidebarItemProvider } from "./appContexts/SidebarContext.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Dashboard";
import Youth from "./Dashboard/Youth";
import NotFound from "./component/NotFound";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { YouthProvider } from "./appContexts/YouthContext";
const client = new ApolloClient({
  uri: "https://hybackend.herokuapp.com/graphql",
  // uri: "http://localhost:5000/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <YouthProvider>
        <div
          style={{
            background: "#F3F4F7",
            height: "100%",
          }}
        >
          <Router>
            <SidebarItemProvider>
              <Sidebar />
            </SidebarItemProvider>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Youths" component={Youth} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </YouthProvider>
    </ApolloProvider>
  );
}

export default App;
