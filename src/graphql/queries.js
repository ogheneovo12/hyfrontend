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
const getYouths=gql`
{
  youths{
   Name,
   Telephone_2,
   Telephone_1,
   Email,
   Marital_Status,
   Membership_Status,
  }
        
}

`
export {getBirthDayQuery,getYouths}
