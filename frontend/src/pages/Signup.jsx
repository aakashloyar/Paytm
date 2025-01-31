import {useState} from 'react';
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    return (
        <div className='bg-slate-300 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='rounded-lg bg-white text-center w-100 p-2 px-4'>
                   <Heading label={'SignUp'}/>
                   <SubHeading label={'Enter your information to create an account'}/>

                   <InputBox handleChange={(e)=>{
                    setFirstName(e.target.value)
                   }} text={FirstName} placeholder={'Aakash'}  label={'First Name'}/>


                   <InputBox handleChange={(e)=>{
                    setLastName(e.target.value)
                   }} text={LastName} placeholder={'Loyar'}  label={'Last Name'}/>


                   <InputBox handleChange={(e)=>{
                    setemail(e.target.value)
                   }} text={email} placeholder={'abcd@gmail.com'}  label={'email'}/>


                   <InputBox handleChange={(e)=>{
                    setpassword(e.target.value)
                   }} text={password} placeholder={'12345'}  label={'password'}/>

                   <div className='pt-4'></div>
                   <Button label={'Signup'} handleClick={async()=>{
                      try{
                        const res= await axios.post('http://localhost:3000/api/v1/user/signup',
                            {
                              username:email,
                              firstName:FirstName,
                              lastName:LastName,
                              password:password
                            },
                            {
                              headers: {                                // Headers
                                  "Content-Type": "application/json"    // Set content type to JSON
                              },
                              timeout:5000
                            },
                        )
                        console.log(res.data.token);
                        localStorage.setItem("token",res.data.token)
                        navigate("/dashboard")

                      }
                      catch(err){
                        console.log(err)
                      }
                      
                   }}/>


                   <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />

                </div>
            </div>

        </div>
    )
}

export default Signup;