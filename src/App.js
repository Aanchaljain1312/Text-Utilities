import React ,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
// import About from './components/About';
import TextForms from './components/TextForms';
import Alert from './components/Alert';

export default function App() {

  const [mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    },1500);

  }
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled" , "success");
    }
    else 
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled" , "success");
    }

  }

  return (
    <div>
      <Navbar title = "TextUtils" about = "AboutTextUtils" mode = {mode} toggleMode= {toggleMode} />
      <Alert alert = {alert}/>
      <div className='container my-3'>
      <TextForms showAlert = {showAlert} heading="Enter the text to analyze below" mode = {mode}/> 
      {/* <About/> */}
      </div>
    </div>
  )
}
