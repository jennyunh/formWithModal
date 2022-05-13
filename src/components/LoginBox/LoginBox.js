import './LoginBox.css';


const LoginBox = props => {


    return (
<div className="box">

<form onSubmit={(e) => props.submitHandler(e)}>
  <label>First name:</label>
  <input value={props.name} type="text" onChange={(e) => props.nameHandler(e)}/><br/><br/>

  <label>Age (Years):</label>
  <input value={props.age} type="text" onChange={(e) => props.ageHandler(e)}/><br/><br/>

  <button type="submit" value="Submit">Add User</button>
</form>

</div>



    )
}

export default LoginBox