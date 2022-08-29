import Card from '../UI/Card';
import '../styles/addUser.css';
import '../UI/Button';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';


const Adduser =(props)=>
{
  
const [userName,setUserName] = useState('');
const [age,setAge]= useState('');

const [error,setError]=useState('');


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
        setError({
            title:'No username and/or age',
            message:'Please enter a valid Name and/or age'
        })
         return;
      }
      if(+age<1)
      {
         setError({
         title:'Invalid age',
         message:'Enter a valid age'
         })
         return
      }
 
      props.onAddUser(userName,age)
console.log(userName,age)
     setAge('')
     setUserName('')
     
    

    }

    const errorHandler =()=>
    {
        setError(false);
    }

console.log(error)


    return(
        <div>

        <Card item={userName}>

        

        {error &&<ErrorModal onConfirmation={errorHandler} title={error.title} message={error.message} />}
            
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