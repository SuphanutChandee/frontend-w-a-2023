import React, {ReactNode, createContext, useContext, useState, useEffect} from "react";
import { node } from 'prop-types';

const UserContext = createContext({
    user: {
        email: [""],
        password: [""]
    },
    userAction: (email:any, password:any) => {}
});

export function useUserContext() {
    return useContext(UserContext);
}

type MyComponentProps = React.PropsWithChildren<{}>;

function UserProvider({ children }: MyComponentProps){
    const [user, setUser] = useState({
        email: [""],
        password: [""]
    });

    useEffect(() => {
        if(localStorage.getItem('userE') != null) {
            setUser({
                email: JSON.parse(localStorage.getItem('userE') || '{}'),
                password: JSON.parse(localStorage.getItem('userP') || '{}')
            });
        }        
    },[]);




    const addToUser = (em:any, pa:any) => {
        setUser(prevUser => ({
            email: [...prevUser.email, em],
            password: [...prevUser.password, pa]
        }));
        
    }

    if(user.email.length != 1){
        localStorage.setItem('userE', JSON.stringify(user.email));
        localStorage.setItem('userP', JSON.stringify(user.password));
        
    }
    //console.log(localStorage.getItem('userE'))

    const userStore = {
        user,
        userAction: addToUser
        
    };

    return (
        <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: node.isRequired
};

export default UserProvider;