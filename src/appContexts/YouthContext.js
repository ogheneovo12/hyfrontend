import React, { createContext, useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  getBirthDayQuery,
  getYouthsQuery,
  updateYouthQuery,
  createYouthQuery,
  deleteYouthQuery,
} from "../graphql/queries";

const YouthContext = createContext();
export function YouthProvider({ children }) {
  //INITIAL STATE
  const [youths, setYouth] = useState({
    youths: [],
    loading: false,
    error: {},
  });
  //INITIAL QUERY
  const { data, loading, error } = useQuery(getYouthsQuery);
  const currentBirthdays = useQuery(getBirthDayQuery);
  const updateStateAfterUpdateMutation = (newData) => {
    if (newData) {
      setYouth((prevState) => {
        const data = [...prevState.youths];
        const oldData = data.find(
          (youth) => youth.id === newData.updateYouth.id
        );
        data[data.indexOf(oldData)] = newData.updateYouth;
        return { ...prevState, youths: data };
      });
    }
  };
  const updateStateAfterCreateMutation = (newData) => {
    if (newData) {
      if (newData) {
        setYouth((prevState) => {
          const data = [...prevState.youths];
          data.push(newData.createYouth);
          return { ...prevState, youths: data };
        });
      }
    }
  };
  const updateStateAfterDeleteMutation = (newData) => {
    if (newData && newData.deleteYouth.success) {
      setYouth((prevState) => {
        prevState.youths.filter((youth) => youth.id === newData.deleteYouth.id);
        return {
          ...prevState,
          youths: prevState.youths.filter(
            (youth) => youth.id !== newData.deleteYouth.id
          ),
        };
      });
    }
  };
  //MUTATION HOOKS
  const [updateYouth] = useMutation(updateYouthQuery, {
    onCompleted: (data) => updateStateAfterUpdateMutation(data),
  });
  const [createYouth] = useMutation(createYouthQuery, {
    onCompleted: (data) => updateStateAfterCreateMutation(data),
  });
  const [deleteYouth] = useMutation(deleteYouthQuery, {
    onCompleted: (data) => updateStateAfterDeleteMutation(data),
    onError:(err)=>console.log(err)
  });
  //wrap mutation hooks into one object
  const youthsOperations = { setYouth, updateYouth, createYouth, deleteYouth };

  useEffect(() => {
    setYouth({ data, loading, error });
    if (data) {
      setYouth({ youths: data.youths, loading, error });
    }
  }, [data, loading, error]);

  return (
    <YouthContext.Provider
      value={{ youths, youthsOperations, currentBirthdays }}
    >
      {children}
    </YouthContext.Provider>
  );
}
export default YouthContext;
