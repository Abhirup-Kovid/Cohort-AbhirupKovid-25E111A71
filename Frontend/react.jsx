import React, {useState} from "react";

function rgdform(){
    const [name, setName]=useState('');
    const [rgdNo, setRgdNo]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]= useState('');
    const [age, setAge]=useState('');
    const [message, setMessage]= useState('');
    
    

    const handleChange = (e) => {
        setName({name, [e.target.name]: e.target.value})
        setName({rgdNo, [e.target.rgdNo]: e.target.value})
        setName({email, [e.target.email]: e.target.value})
        setName({password, [e.target.password]: e.target.value})
        setName({age, [e.target.age]: e.target.value})
    }
}
