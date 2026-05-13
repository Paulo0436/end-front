import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

function AuthProvider({children}){
    const [logado , setLogado] = useState(false)
    const [usuario , setUsuario] = useState({})

    const login = (dados) =>{
        //chamar API passando os dados
        setUsuario({nome: "Pads" ,email: "pads@iesb.edu.br"})
        setLogado(true);
    }

    const logout = ()=>{
        setUsuario({
            id:0,
            nome: "Pads" ,
            email:"pads@iesb.edu.br" 
        });
        setLogado(false);
    }

    return(
        <AuthContext.Provider value={{logado,usuario,login,logout}}>
            {/* value = estado compartilhado*/} 
            {children}
        </AuthContext.Provider>
    )
}



function useAuthContext(){
    return useContext(AuthContext)
}


export {useAuthContext , AuthProvider}