function PatientCard({individualPatient, setPatientToEdit, removePatient}) {
    
  return (
    <div id={individualPatient.id} className='w-11/12 mx-auto bg-white hover:bg-cyan-50 shadow-lg rounded-2xl py-5 px-5 mb-4 transition duration-300 ease-in'>
        <p className="uppercase font-bold">Name: {''}
            <span className="font-normal normal-case">{individualPatient.name}</span>
        </p>
        <p className="uppercase font-bold">Owner: {''}
            <span className="font-normal normal-case">{individualPatient.owner}</span>
        </p>
        <p className="uppercase font-bold">Email: {''}
            <span className="font-normal normal-case">{individualPatient.email}</span>
        </p>
        <p className="uppercase font-bold">Date: {''}
            <span className="font-normal normal-case">{individualPatient.date}</span>
        </p>
        <p className="uppercase font-bold">Symptoms: {''}
            <span className="font-normal normal-case">{individualPatient.symptoms}</span>
        </p>
        <div className="mt-4">
            <button
            onClick={()=>setPatientToEdit(individualPatient)}
            title="Edit"
            className="uppercase transition-all cursor-pointer text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2">
            <span className="material-symbols-outlined">edit_square</span>
            </button>

            <button 
            onClick={()=>removePatient(individualPatient.id)}
            title="Delete"
            className="float-right uppercase transition-all cursor-pointer text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2">
            <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
    </div>
  )
}

export default PatientCard