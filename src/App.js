import './App.css';
import AddUser from './components/Adduser'
import UserLists from './components/UserLists';
import  {useState} from 'react'


function App(props) {
  const [userLists,setUserLists] =useState([])



const UserAdderHandler =(userName,age,id)=>
{
     setUserLists((prevState)=>
     {
         return [...prevState,{name:userName, age:age, id: Math.random()}]
     })
}
console.log(userLists)
  return (
    <div className="App">
      <AddUser  onAddUser={UserAdderHandler}/>
      <UserLists items={userLists}/>
    </div>
  );
}

export default App;
