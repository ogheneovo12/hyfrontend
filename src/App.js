import React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import { SidebarItemProvider } from "./component/Sidebar/SidebarContext.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Dashboard";
import Youth from "./Dashboard/Youth";
import NotFound from "./component/NotFound";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://hybackend.herokuapp.com/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
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
    </ApolloProvider>
  );
}

export default App;
