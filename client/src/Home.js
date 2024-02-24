import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './Style.css';


function Home() {
   
    const [Ename, setEname] = useState('')
    const [Eid, setEid] = useState('')
    const [Edept, setEdept] = useState('')
    const [Edob, setEdob] = useState('')
    const [Egender, setEgender] = useState('')
    const [Edesign, setEdesign] = useState('')
    const [Esalary, setEsalary] = useState('')
    const navigate=useNavigate();

    const [data,setData]=useState([]);

    // const fetchdata=async()=>{
            
    //     try{
    //     const response=await axios.get('http://localhost:8081/');
    //     console.log(response.data);
    //     if(response.status===200){
    //         setData(response.data);
    //     }else{
    //         throw new Error('Something went wrong');
    //     }
    // }catch(err){
    //     console.log(err);   
    // }  

    // } state management in navigation
// adha net la padhichiyaa -> ama
// ippo submit panna home page ku ponum but adhu nana pora mari dhan iruku adhuku enna panna

    const handleSubmit = (event) =>{
        // alert('Form Submitted Successfully');
        // console.log(Ename,Eid,Edept,Edob,Egender,Edesign,Esalary);
        event.preventDefault();
        // axios.post('http://localhost:8081/',{Ename,Eid,Edept,Edob,Egender,Edesign,Esalary})
        // .then(res =>{
           
        // }).catch(err => console.log(err));
        navigate('/Homenew',{state:{Ename:Ename,Eid:Eid,Edept:Edept,Edob:Edob,Egender:Egender,Edesign:Edesign,Esalary:Esalary}});
    
    }

    
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

})
    const handleDelete=(Eid)=>{
        axios.delete('http://localhost:8081/'+Eid)
        .then(res => {navigate('/')})
        .catch(err => console.log(err));
    }
    // const handleNextpage=()=>{
    //     navigate('/Homenew',{Ename,Eid,Edept,Edob,Egender,Edesign,Esalary});
    // }
  return (
    <div>
        <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <h1>Enter Employee Details</h1>
                        <div className='inputs'>
                            <div className='name'>Employee_Name:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Name:' onChange={e => setEname(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Id:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Id:' onChange={e => setEid(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Department:</div>
                            <div className='inputs'>
                                <select className='select-dropdown'value={Edept} onChange={e => setEdept(e.target.value)} required>
                                    <option value="">Select Department</option>
                                    <option value="HR">HR</option>
                                    <option value="Ceo">CEO</option>
                                    <option value="Branch Manager">Branch Manager</option>
                                    <option value="Finance Manager">Finance Manager</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Tester">Tester</option>
                                </select>
                            </div>
                        </div>

                        <div className='inputs'>
                            <div className='name'>Employee_DOB:</div>
                            <div classname='inputs'>
                                <input type='date' onChange={e => setEdob(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="inputs">
                            <div className="name">Employee_Gender</div>
                                    <input className="male" type="radio" name="Gender" value="Male" checked={Egender === "Male"} onClick={(e) => setEgender(e.target.value)} />
                                    <label className="Male-label">Male</label>

                            
                            
                                    <input className="female" name="Gender" type='radio' value="Female" checked={Egender === "Female"} onClick={(e) => setEgender(e.target.value)} />
                                         <label className="Female-label">Female</label>
                        
                        </div>

                        <div className='inputs'>
                            <div className='name'>Employee_Designation:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Designation :' onChange={e => setEdesign(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Salary:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Salary:' onChange={e => setEsalary(e.target.value)} required/>
                            </div>
                        </div>


                        <div>
                            <button>Next</button>
                        </div>
                    </form>
                </div>
        <div className='table-container'>
            <div className='main'>
                <h1> Employee Details</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Emp_Name</th>
                            <div></div>
                            <th>Emp_ID</th>
                            <div></div>
                            <th>Emp_Department</th>
                            <div></div>
                            <th>Emp_DOB</th>
                            <div></div>
                            <th>Emp_Gender</th>
                            <div></div>
                            <th>Emp_Designation</th>
                            <div></div>
                            <th>Emp_Salary</th>
                            <div></div>
                            <th>Emp_Address</th>
                            <div></div>
                            <th>Emp_Location</th>
                            <div></div>
                            <th>Emp_Pincode</th>
                            <div></div>
                            <th>Emp_Experience</th>
                            <div></div>
                            <th>Emp_Age</th>
                            <div></div>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (
                            <tr>
                                <td>{d.Ename}</td>
                                <div></div>
                                <td>{d.Eid}</td>
                                <div></div>
                                <td>{d.Edept}</td>
                                <div></div>
                                <td>{d.Edob}</td>
                                <div></div>
                                <td>{d.Egender}</td>
                                <div></div>
                                <td>{d.Edesign}</td>
                                <div></div>
                                <td>{d.Esalary}</td>
                                <div></div>
                                <td>{d.Eaddress}</td>
                                <div></div>
                                <td>{d.Elocation}</td>
                                <div></div>
                                <td>{d.Epincode}</td>
                                <div></div>
                                <td>{d.Eexperience}</td>
                                <div></div>
                                <td>{d.Eage}</td>
                                <div></div>
                                <td>
                                    <button onClick={e=>handleDelete(d.Eid)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}
export default Home