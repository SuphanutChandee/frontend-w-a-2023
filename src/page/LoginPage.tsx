import React, { FC, useState, useEffect } from 'react'

function LoginPage () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ta, setTa] = useState([]);
    const [drop, setDrop] = useState(false);
    const valid = "Your Email or Password is incorrect. please try again.";
    const userE = localStorage.getItem("UserEmail")?.replace("[","")?.replace("]","")?.replace(/"/g,"")?.split(",");
    const userP = localStorage.getItem("UserPassword")?.replace("[","")?.replace("]","")?.replace(/"/g,"")?.split(",");

    /*
    useEffect(() => {
        console.log(userE);
        console.log(userP);
        //if (temp2?.includes(email))
    },[]);*/

    function handleSubmit(){
        let check = [0, 0];
        if(userE?.includes(email)) check[0] = 1;
        if(userP?.includes(password)) check[1] = 1;

        //console.log(userE?.includes(email));
        //console.log(userP?.includes(password));
        if(check[0] == 1 && check[1] == 1){
            let validate = "Login Successful"
            alert(validate);
            window.location.href="/dashboard"
        }
        else{
            setDrop(true);
        }
    }

    return (
        <div className='SnLframe'>
            <h1>Login</h1>
            <div className='email'>Email</div>
            <input type="text" className='emailframe' onChange={e=> setEmail(e.currentTarget.value)}/>
            { drop ?(
                <div className='validate'>
                    {valid}
                </div>
            ) : null}
            <div className='password'>Password</div>
            <input type="password" className='passwordframe' onChange={e=> setPassword(e.currentTarget.value)}/>
            { drop ?(
                <div className='validate'>
                    {valid}
                </div>
            ) : null}
            <input type="submit" className='submit' onClick={e=> handleSubmit()} />
        </div>
    )
}

export default LoginPage