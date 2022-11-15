import React from 'react'
import PatientCard from './PatientCard'

function PatientList({patients, setPatients, setPatientToEdit}) {
  
  const removePatient = pId => {
    if (confirm('Are you sure?')) {
      const updatedList = patients.filter(p=>{if (p.id!=pId) return p})
      setPatients(updatedList);
    }
  }

  return (
    <div className='md:w-full md:h-screen overflow-y-scroll'>
      <h2 className='font-bold text-3xl text-center mb-10 '>Patient List</h2>

      { patients.length? patients.map( individualPatient => (
        <PatientCard
        removePatient={removePatient}
        key={individualPatient.id}
        individualPatient={individualPatient}
        setPatientToEdit={setPatientToEdit} />
      ))
    : (
      <div className='w-11/12 mx-auto bg-white hover:bg-cyan-50 shadow-lg rounded-2xl py-5 px-5 mb-4 transition duration-300 ease-in font-bold text-center'>
        No patients yet
      </div>
      )}
    </div>
  )
}

export default PatientList