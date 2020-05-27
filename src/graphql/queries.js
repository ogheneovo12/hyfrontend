import {gql} from "apollo-boost"


 const getBirthDayQuery=gql`

{
         birthdays{
           today {
             id,
             Name,
             Telephone_2,
             Telephone_1,
             Email,
             Marital_Status,
             Membership_Status,
           }
            week{
             id,
             Name,
             Telephone_2,
             Telephone_1,
             Email,
             Marital_Status,
             Membership_Status,
         }
           month{
             id,
             Name,
             Telephone_2,
             Telephone_1,
             Email,
             Marital_Status,
             Membership_Status,
           }
         },
        
}

`
const getYouthsQuery=gql`
{
  youths{
   id,
   Name,
   Telephone_2,
   Telephone_1,
   Email,
   Date_of_Birth,
   Marital_Status,
   Membership_Status,
  }
        
}

`
const updateYouthQuery = gql`
mutation($id:ID!,$input:createYouth!){
  updateYouth(id:$id,input:$input){
    id,
    Name,
    Telephone_2,
    Telephone_1,
    Email,
    Date_of_Birth,
    Marital_Status,
    Membership_Status,

  }
}
`
const createYouthQuery = gql`
mutation($input:createYouth!){
  createYouth(input:$input){
    id,
    Name,
    Telephone_2,
    Telephone_1,
    Email,
    Date_of_Birth,
    Marital_Status,
    Membership_Status,

  }
}
`
const deleteYouthQuery = gql`
mutation($id:ID!){
  deleteYouth(id:$id){
    id,
    message,
    success,

  }
}
`
export {getBirthDayQuery,getYouthsQuery,updateYouthQuery,createYouthQuery,deleteYouthQuery}
