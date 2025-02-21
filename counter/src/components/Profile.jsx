import Button from "./Button";
import {useState} from 'react';

function Profile(){
const[loggedInText, setLoggedInText]=useState("Logged In")

    return(<>
    <p>{loggedInText}</p>
    <Button setLoggedInText={setLoggedInText} loggedInText={loggedInText}/>
    </>)
}
export default Profile;