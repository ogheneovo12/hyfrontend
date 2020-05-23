import React, { createContext, useState,useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBirthDayQuery, getYouthsQuery } from "../graphql/queries";

const YouthContext = createContext();
export function YouthProvider({ children }) {
  const   {data,loading,error} = useQuery(getYouthsQuery);
  const [youths,setYouth] = useState({
      youths:[],
      loading:false,
      error:{}
  })

  const currentBirthdays = useQuery(getBirthDayQuery);
  
  useEffect(()=>{
    setYouth({data,loading,error});
    if(data){
      console.log("in effectsS")
      setYouth({youths:data.youths,loading,error});
    }  
  },[data,loading,error])
  return (
    <YouthContext.Provider value={{ youths,setYouth, currentBirthdays }}>
      {children}
    </YouthContext.Provider>
  );
}
export default YouthContext;
