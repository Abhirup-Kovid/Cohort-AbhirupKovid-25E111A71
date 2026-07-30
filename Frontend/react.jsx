import React, {useState} from "react";

function RgdForm(){
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
    return(
        <div>
            <form>
                <input name="name" placeholder="Name" onChange={handleChange} ></input>
                <input name="rgdNo" placeholder="Registration Number" onChange={handleChange}></input>

                <input name="email" placeholder="Email" onChange={handleChange} ></input>
                <input name="password" placeholder="Password" onChange={handleChange} ></input>
                <input name="age" placeholder="age" onChange={handleChange} ></input>


    <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}

export default RgdForm;