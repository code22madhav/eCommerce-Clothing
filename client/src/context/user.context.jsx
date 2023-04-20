import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../component/firebase";


//this part stores the actual value
export const UserContext= createContext({
    currentUser: null,
    setcurrentUser: ()=>null
});

export const UserProvider=({children})=>{
    useEffect(()=>{
        const unsubscribe=onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);       //note: inspite of login again n again with same email
            }                                           //it will not create same user multiple time because
            setcurrentUser(user);                       //createUserDocumentFromAuth allready makes a snapshot
        });                                             //of the userDoc.

        return unsubscribe;
    },[])
    const [currentUser, setcurrentUser] = useState(null);
    const value={currentUser, setcurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}