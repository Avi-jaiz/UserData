import '../styles/userLists.css'
import Card from "../UI/Card";
const UserLists =(props)=>
{
    console.log(props.items.length)
    
   
return(
    <div className={props.items.length!==0 ?'userLists':""} >
    
{props.items.map((ele,index)=>
{
    return(
       <div className="userListsCard" key={index.toString()}>
<h3>{ele.name}</h3> is <h5>{ele.age} years old</h5>


       </div>
    )
})}


    </div>
)
}

export default UserLists;