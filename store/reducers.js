import { createStore } from "redux"
const initialState={
 //   users : [],
  //  loggedInUser: null,
    // products:[
    //  {
    //     id:1,
    //     nom:"frnck",
    //     photo:[],
    //     description:"yes",
    //     dateLike:""
    //  },
    //  {
    //     id:2,
    //     nom:"frnck2",
    //     photo:[],
    //     description:"no",
    //     dateLike:""
    //  },
    // ],
  //  photoCart:[],
    authToken:12345,
  //  userData:{},
  //  anyDate:[]
}

const AuthReducers = (state= initialState, action)=>{
    switch(action.type){

        case "LOGIN":
            return{
                ...state,
                authToken: action.payload,
            }
        default:
            return state
    }
}



export default createStore(AuthReducers)