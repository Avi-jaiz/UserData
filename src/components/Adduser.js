import Card from '../UI/Card';
import '../styles/addUser.css';
import '../UI/Button';
import Button from '../UI/Button';
import { useState } from 'react';


const Adduser =(props)=>
{
  
const [userName,setUserName] = useState('');
const [age,setAge]= useState('')


const handleUserName=(event)=>
{
   setUserName(event.target.value)
}

const handleAge=(event)=>
{
    setAge(event.target.value)
}

    const handleAddUser =(event)=>
    {
     event.preventDefault();
   
 
      if(userName.trim().length===0 || age.trim().length===0)
      {
         return;
      }
      if(age <0)
      {
         return;
      }
 
      props.onAddUser(userName,age)
console.log(userName,age)
     setAge('')
     setUserName('')
     
    

    }

    return(
        <div>

        <Card item={userName}>
<form className='adduserForm' onSubmit={handleAddUser}>
<label htmlFor="username" className='formUserLabel'>
    Username:
</label>
<input type='text' id='username'  className='formUsernameInput' value={userName} onChange={handleUserName}/>

<label htmlFor="age" className='formAgeLabel'>
    Age:
</label>
<input type='number' id='age' className='formAgeInput' value={age} onChange={handleAge}/>



<Button onClick={handleAddUser} type='submit'>Add User</Button>
</form>

</Card>



</div>
    )
}

export default Adduser;