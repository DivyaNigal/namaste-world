//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import React,{useState} from 'react'

function App() {
  const [mode,setMode] = useState('dark');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000);
  }
 



  const togglemode = () =>{
    if(mode === 'dark'){
      setMode ('light');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enables","success");
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enables","success");
      }
    }    
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode}/>
    <Alerts alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text for analyse below" mode={mode} />
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
