import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("here is the deets", data);
  }
  // console.log("errors", errors); just the errors...

  return (
    <>
      <div>
        <h1>Alpaca Fan ClubForm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Tell us about yourself!</legend>
            <div className='form-group'>
            <label htmlFor="name">Name </label>
          <input type="text" id="firstname" placeholder="First Name" {...register('firstName')} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input {...register('lastName', {required: true})} />
              {errors.lastName ?(<p className="error">  missing something</p>): null}
            </div>
            <div className='form-group'>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="1234 Main St" {...register('address', {required: true})} />
              {errors.address ?(<p className="error">  missing something</p>): null}
              </div>
            <div className="form-group">
              <label>State</label>
                <select {...register('state', { required: true })} >
                  <option value="">Select a state</option>
                  <option value="OK">Oklahoma!</option>
                  <option value="TX">Texas!</option>
                  <option value="CA">California!</option>
                  <option value="NY">New York!</option>
                  <option value="WA">Washington!</option>
                  <option value="CO">Colorado!</option>
            </select>
            </div>
            <div className="form-group">
              <label>Country</label>
              <input type="text" {...register('country', { required: true })} />
              {errors.country ?(<p className="error">  missing something</p>): null}
            </div>
              
          </fieldset>
          <fieldset>
            <legend>Alpaca Preferences</legend>
            <div className="form-group">
              <p>What's your favorite Alpaca color(s)?</p>
              <label>white! <input type="checkbox" {...register('favColor')}/></label>
              <label>red! <input type="checkbox" {...register('favColor')}/></label>
              <label>blue! <input type="checkbox" {...register('favColor')}/></label>
              <label>green! <input type="checkbox" {...register('favColor')}/></label>
              <label>purple! <input type="checkbox" {...register('favColor')}/></label>
              <label>pink! <input type="checkbox" {...register('favColor')}/></label>
              <label>orange! <input type="checkbox" {...register('favColor')}/></label>
              <label>yellow! <input type="checkbox" {...register('favColor')}/></label>
            </div>
            <fieldset>
              <legend>What's your favorite thing about Alpacas?</legend>
                <div>
                  <textarea rows="5" cols="50" {...register('favThing')} />
                </div>
            </fieldset>
          </fieldset>
          <button type="submit">Submit</button>
          
        </form>
      </div>
    </>
  )
}

export default App
