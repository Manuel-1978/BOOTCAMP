import { createContext,useContext,useState } from "react"

const AuthContext = createContext({});

export default function AuthContextProvider({children}) {

    // TODO: Crear estado para la info del usuario
const [loggedInUser,setloggedInUser]=useState({});
const [isAuthenticated,setisAuthenticated]=useState(false);

    const getToken = ()=>localStorage.getItem("TOKEN_KEY");
    const setToken = token =>localStorage.getItem("TOKEN_KEY",token); //ALERT: XSS - Cross Site Scripting
    const removeToken=()=>localStorage.removeItem("TOKEM_KEY")
    const logIn=(token,user)=>{
        
        setToken(token);
        setloggedInUser(user);
        setisAuthenticated(true);
        
    };

    const isAdmin=()=>loggedInUser.role==="ADMIN";

    const logOut=()=>{
        
        removeToken();
        setloggedInUser({});
        setisAuthenticated(false);
        
    };
    

    const contextValue={
        logIn,
        logOut,
        isAuthenticated
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

//Custom hook para simplificar el uso de este contexto
const useAuthContext=()=>useContext(AuthContext);

export{
    useAuthContext
};