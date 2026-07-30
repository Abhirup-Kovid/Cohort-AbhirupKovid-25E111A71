import React, {useState} from "react";

function rgdform(){
    const [name, setName]=useState('');
    const [rgdNo, setRgdNo]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]= useState('');
    const [age, setAge]=useState('');
    const [message, setMessage]= useState('');
    
    

    const handleChange = (e) => {
        const {name,value} = e.target;
        if(name=="name"){
            setName(value)
        }
        if(name=="rgdNo"){
            setRgdNo(value)
        }
        if(name=="email"){
            setEmail(value)
        }
        if(name=="password"){
            setPassword(value)
        }
        if(name=="age"){
            setAge(value)
        }
    }
}
