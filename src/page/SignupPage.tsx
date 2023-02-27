import React, { FC, useState, useEffect, createContext, useContext } from 'react'
import { useUserContext } from '../store/context';

function SignupPage () {
    const { user, userAction } = useUserContext();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [edrop, setEdrop] = useState(false);
    const [pdrop, setPdrop] = useState(false);
    const [evalid, setEvalid] = useState("");
    const [pvalid, setPvalid] = useState("");

    //localStorage.setItem("UserEmail", JSON.stringify(user.email));
    //localStorage.setItem("UserPassword", JSON.stringify(user.password));

    function handleSubmit(){
        //console.log("email");
        //console.log(email);
        //console.log("password");
        //console.log(password);
        //alert("email is [" + email + "], password is [" + password + "]");
        let Evalidate = "", Pvalidate = "Password must Have ";
        let validate = ""

        if (email == ""){
            setEdrop(true);
            Evalidate = "This Email is invalid.\n";
            validate = validate + Evalidate;
        }
        else if (user.email.includes(email)) {
            //console.log(user.email)
            setEdrop(true);
            Evalidate = "This Email is already used.\n";
            validate = validate + Evalidate;
        }
        else if(email.includes('@') && email.includes('.')) {}
        else {
            setEdrop(true);
            Evalidate = "This Email is invalid.\n";
            validate = validate + Evalidate;
        }

        let checkP = [0, 0, 0, 0, 0]
        if(password.length >= 12) checkP[0] = 1;
        
        for (let i=0; i<password.length; i++){
            if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) checkP[1] = 1;
            else if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) checkP[2] = 1;
            else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) checkP[3] = 1;
            else checkP[4] = 1;
        }

        if(checkP[0] == 0) Pvalidate = Pvalidate + "at least 12 character, "
        if(checkP[1] == 0) Pvalidate = Pvalidate + "at least 1 lowerCase character, "
        if(checkP[2] == 0) Pvalidate = Pvalidate + "at least 1 upperCase character, "
        if(checkP[3] == 0) Pvalidate = Pvalidate + "at least 1 Number, "
        if(checkP[4] == 0) Pvalidate = Pvalidate + "at least 1 special characters. "

        if(checkP[0] == 0 || checkP[1] == 0 || checkP[2] == 0 || checkP[3] == 0 || checkP[4] == 0) {
            setPdrop(true);
            validate = validate + Pvalidate;
        }

        setEvalid(Evalidate);
        setPvalid(Pvalidate);

        if(validate == "") {
            //console.log(email);
            //console.log(password)
            userAction(email, password);
            validate = "Signup Successful"
            alert(validate);
            window.location.href="/dashboard"
        }
        
    }
    //console.log(user)

    return (
        <div className='SnLframe'>
            <h1>Signup</h1>
            <div className='email'>Email</div>
            <input type="text" className='emailframe' onChange={e=> setEmail(e.currentTarget.value)}/>
            { edrop ?(
                <div className='validate'>
                    {evalid}
                </div>
            ) : null}
            <div className='password'>Password</div>
            <input type="password" className='passwordframe' onChange={e=> setPassword(e.currentTarget.value)}/>
            { pdrop ?(
                <div className='validate'>
                    {pvalid}
                </div>
            ) : null}
            <input type="submit" className='submit' onClick={e=> handleSubmit()} />
        </div>
    )
}

export default SignupPage