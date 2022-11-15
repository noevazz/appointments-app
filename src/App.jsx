import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import PatientList from './components/PatientList'

/*
    cd Documentos/repos/
    mkdir react_projects
    cd react_projects/
    npm init vite@latest    # in this step I created appointments-app
    cd appointments-app/
    npm install             # install dependencies
    npm run dev
    npm i -D tailwindcss postcss autoprefixer  # install dev dependencies
    npm fund                # this is just listing
    npx tailwindcss init -p
*/


function App() {
  const INITIAL = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients]=useState(INITIAL);
  const [patientToEdit, setPatientToEdit] = useState({});

 
  useEffect(()=>{
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  return (
    <>
      <Header/> 
    <div className='mt-8 mx-8 md:mx-20 lg:mx-40'>
      <div className='sm:flex mt-12'>
        <Form
          patients = {patients}
          setPatients = {setPatients}
          patientToEdit={patientToEdit}
          setPatientToEdit={setPatientToEdit}
        />
        <PatientList
          patients={patients} 
          setPatients={setPatients}
          setPatientToEdit={setPatientToEdit}
        />
      </div>
    </div>
    </>

  )
}

export default App
