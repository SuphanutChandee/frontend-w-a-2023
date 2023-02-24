import React, {ReactNode, createContext, useContext, useState} from "react";
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

const initialUser = {
    email: [""],
    password: [""]
};

type MyComponentProps = React.PropsWithChildren<{}>;

function UserProvider({ children }: MyComponentProps){
    const [user, setUser] = useState(initialUser);

    function addToUser(em:any, pa:any) {
        //console.log(em);
        //console.log(pa);
        setUser(prevUser => ({
            ...prevUser,
            email: [...prevUser.email, em],
            password: [...prevUser.password, pa]
        }));
    }
    //console.log(user)

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