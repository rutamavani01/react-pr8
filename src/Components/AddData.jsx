import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddData = () =>{
    const navigate = useNavigate();
    const [input,setInput] = useState({
        email:'',
        password: ''
    })
    const [record,setRecord] = useState([]);
    const handleChange = (e) =>{
        const {name,value} = e.target.value;
        setInput({
            ...input, [name]:value
        })
    }
    const handleSubmit = () =>{
        const {email,password} = input;
        let obj = {
            email: email,
            password: password
        }
        let data = [...record,obj];
        localStorage.setItem('crud',JSON.stringify(data));
        setRecord(data);
        navigate ('./Main');
        setInput({
            email:'',
            password: ''
        })
    }
    useEffect(()=>{
        let alldata = JSON.parse(localStorage.getItem('crud'));
        if(alldata===null){
            setRecord([])
        }else{
            setRecord(alldata);
        }
    })
    return(
       <center>
        <h1>Login page</h1>
        <table border={1}>
            <tr>
                <th>Email: </th>
                <th> <input type="text" name="name"  onChange={handleChange} value={input.value}/></th>
            </tr>
            <tr>
                <th>password: </th>
                <th> <input type="text" name="password"  onChange={handleChange} value={input.value}  /></th>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" value="Submit" onClick={()=>handleSubmit()}/></td>
            </tr>
        </table>
       </center>

    )
}
export default AddData;