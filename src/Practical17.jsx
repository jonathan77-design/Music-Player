import { useState } from "react"
function Practical17() {

    const[App1Data , setApp1Data]=useState({
        name:" ",
        email:" ",
        mobileno :" "

    })
    function handleChange(e){
        const{name,value} =e.target;
        setApp1Data({
              ...App1Data,
                 [name]: value
        })
    }
        function handleSubmit(){
            alert("Your Form is Submitted Successfully");
            console.log(App1Data); 
            setApp1Data({
                    name:" ",
                    email:" ",
                     mobileno :" "

            })
        }
      
  return (
    <div>
    <h2>Student Form</h2>
    <label>Enter Your Name: <input name="name"value={App1Data.name}  onChange={handleChange}></input></label>

    <label>Enter your Email:<input value={App1Data.email} name="email"onChange={handleChange}></input></label>

    <label>Enter Mobile No. :<input value={App1Data.mobileno} name="mobileno" onChange={handleChange}></input></label>
    <input type="checkbox"></input><label>Agreed to Terms and Condition</label>
    <button onClick={handleSubmit}> Submit</button>   
   
    </div>
  )
}
export default Practical17;

