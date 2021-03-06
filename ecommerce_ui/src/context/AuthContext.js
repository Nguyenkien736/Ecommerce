import { createContext,useEffect,useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITAL_STATE ={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
}
export const AuthContext = createContext(INITAL_STATE)

// defind the provider which make context avaiable to childrens

    
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITAL_STATE);
  
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])

    return(
        <AuthContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>

    )

}