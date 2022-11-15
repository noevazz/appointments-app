import React from 'react';
import {useState, useEffect} from 'react';
import ErrorModal from './ErrorModal';

/*
Basically the State represents that, the state of your page.
Example: what is the state of your shoping cart? how many items do you have, etc.

Components can share a state or components can have their own state.

The app reacts to the state, if the state change then React renders the proper changes
*/


function Form({patients, setPatients, patientToEdit, setPatientToEdit}) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymtoms] = useState('');
  const [error, setError] = useState(false);

  useEffect(()=>{
    if (Object.keys(patientToEdit).length> 0){
      setName(patientToEdit.name);
      setOwner(patientToEdit.owner);
      setEmail(patientToEdit.email);
      setDate(patientToEdit.date);
      setSymtoms(patientToEdit.symptoms);
    } 
  }, [patientToEdit]);


  const generateId= () => Math.random().toString(36).substring(2) + Date.now().toString(36);

  const objPatient = {
    name,
    owner,
    email,
    date,
    symptoms,
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valdiating before submission')
    if ([name, owner, email, date, symptoms].includes('')){
      console.log('at least one empty');
      setError(true);
    } else {
      setError(false);
      console.log('all good');
      if (patientToEdit.id) {
        objPatient.id = patientToEdit.id
        console.log(patients.map(p=>p.id===patientToEdit.id?objPatient:p));
        setPatients(patients.map(p=>p.id===patientToEdit.id?objPatient:p))
        setPatientToEdit({})
      } else {
        console.log('added new patient')
        objPatient.id = generateId(),
        setPatients([...patients, objPatient]);
      }
      setName('');
      setOwner('');
      setEmail('');
      setDate('');
      setSymtoms('');
    }
  }
  return (
    <div className='md:w-full'>
      <h2 className='font-bold text-3xl text-center mb-10 '>Follow up</h2>
      <form
      action=""
      className='bg-white shadow-lg rounded-2xl py-5 px-5 w-11/12 mx-auto'
      onSubmit={handleSubmit}>
        {error && <ErrorModal> <span>Oops! 😅 all fields are required.</span></ErrorModal> }
        <section className='mb-4'>
          <label htmlFor="name" className='block uppercase font-bold'>Name:</label>
          <input
            type="text"
            id='name'
            name='name'
            placeholder='Scrappy Doo'
            className='border-2 w-full p-2 mt-2 mb-2 rounded-md'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
          />
        </section>
        <section className='mb-4'>
          <label htmlFor="owner" className='block uppercase font-bold'>Owner:</label>
          <input
            type="text"
            id='owner'
            name='owner'
            placeholder='Noe Vaz'
            className='border-2 w-full p-2 mt-2 mb-2 rounded-md'
            value={owner}
            onChange={(e)=>setOwner(e.target.value)}
            
          />
        </section>
        <section className='mb-4'>
          <label htmlFor="email" className='block uppercase font-bold'>email:</label>
          <input
            type="email"
            id='email'
            name='email'
            placeholder='example@domain.com'
            className='border-2 w-full p-2 mt-2 mb-2 rounded-md'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
          />
        </section>
        <section className='mb-4'>
          <label htmlFor="date" className='block uppercase font-bold'>date:</label>
          <input
            type="date"
            id='date'
            name='emadateil'
            className='border-2 w-full p-2 mt-2 mb-2 rounded-md'
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            
          />
        </section>
        <section className='mb-4'>
          <label htmlFor="symptoms" className='uppercase font-bold'>symptoms</label>
          <textarea name="symptoms"
            id="symptoms"
            className='w-full border-2 rounded-md p-2'
            placeholder='Symptoms'
            onChange={(e)=>setSymtoms(e.target.value)}
            value = {symptoms}
            ></textarea>
        </section>

        <input
        value={patientToEdit.id? 'save': 'Create patient'}
        title={patientToEdit.id? 'save': 'Create patient'}
        type="submit"
        className="uppercase transition-all cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" />


      </form>
    </div>
  )
}

export default Form