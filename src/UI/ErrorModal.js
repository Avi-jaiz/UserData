import Card from "./Card";

import '../styles/errorModal.css'


const ErrorModal =(props)=>
{

     


    return(

<div className="backDrop" onClick={props.onConfirmation}>
<Card >
<div className="errorModal">

<h2 className="errorModalTitle">
    {props.title}
</h2>

<h4 className="errorModalErrorMessage">
    {props.message}
</h4>

<button className='errorButton' onClick={props.onConfirmation}>Okay</button>

</div>


</Card>

</div>

    )
}

export default ErrorModal;