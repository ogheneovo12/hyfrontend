import React, { createContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBirthDayQuery, getYouthsQuery } from "../graphql/queries";

const YouthContext = createContext();
export function YouthProvider({ children }) {
  //  const {}
  const currentBirthdays = useQuery(getBirthDayQuery);
  const youths = useQuery(getYouthsQuery);
  return (
    <YouthContext.Provider value={{ youths, currentBirthdays }}>
      {children}
    </YouthContext.Provider>
  );
}
export default YouthContext;
