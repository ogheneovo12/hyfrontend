import React from "react"
import {graphql} from "react-apollo"
import {getYouths} from "../../graphql/queries"
function Youth(){
    return(
      <div>Youth</div>
    )
  }

export default graphql(getYouths)(Youth);