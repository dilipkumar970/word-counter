// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React , { useState } from 'react' ;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link 
// } from "react-router-dom";

function App() {

  const [mode , setMode] = useState('dark');
  const [alert ,setAlert] = useState(null);

  const showAlert = (Message ,type)=>{
    setAlert({
      msg: Message ,
      type: type 
    })
    setTimeout(() => {
      showAlert(null)
    }, 2500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled", "success");

    }
  }

  const router = createBrowserRouter([
    {
      path: "/textForms",
      element:
      <>
      <Navbar  mode={mode} toggleMode={toggleMode} /> 
       <div className="container my-2">
          <TextForm heading="Enter the Text to Analyze" mode={mode}/>
        </div> 
        </>       
    },
    {
      path:"/about",
      element: 
      <>
      <Navbar  mode={mode} toggleMode={toggleMode} /> 
      <About mode={mode} toggleMode={toggleMode} />
      </>
    },
    {
      path:"/",
      element: 
      <>
        <Navbar  mode={mode} toggleMode={toggleMode} /> 
        <div className="container my-2">
          <TextForm heading="Enter the Text to Analyze" mode={mode}/>
        </div> 
      </>
    },
  ]);
  return (
    <>
    <Alert alert={alert}/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
