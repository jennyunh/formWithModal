import React, { useState } from "react";
import "./App.css";
import LoginBox from "./components/LoginBox/LoginBox";
import ListSection from "./components/ListSection/ListSection";
import ModalBox from "./components/ModalBox/ModalBox";
import ModalBoxAge from "./components/ModalBoxAge/ModalBoxAge";

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(false);
  const [ageError, setAgeError] = useState(false);



  const submitHandler = (e) => {
    e.preventDefault();
 
    let user = { name: name, age: age, key: name + age };

    if (name.length === 0) {
      setName('');
      setError(true);
    }

    if (age.length === 0) {
      setAge('');
      setError(true);
    }

    if ((age < 0) || (isNaN(Number(age)))) {
setAgeError(true);
return
    }

    if ((name.length > 0) && (age.length > 0) && (ageError === false)) 
    {setList((prevList) => [...prevList, user]);
 
      //reset the states
      setName('');
      setAge('');
   }

 
  };



  const nameHandler = (e) => {
    setError(false);
    setName(e.target.value);
    console.log(name);
  };



  const ageHandler = (e) => {
    setError(false);
    setAge(e.target.value);
    console.log(age);
  };



  const closeHandler = () => {
    setError(false);
    setAgeError(false);
  }

  return (
    <>
      <LoginBox
        nameHandler={nameHandler}
        ageHandler={ageHandler}
        submitHandler={submitHandler}
        name={name}
        age={age}
      />

      <ListSection list={list} />

      {(error === true) && (<ModalBox closeHandler={closeHandler}/>)}
      {(ageError === true) && (<ModalBoxAge closeHandler={closeHandler}/>)}

    </>
  );
}

export default App;
