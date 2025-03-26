import React, { useState } from 'react';
import './App.css';

function myAlpacaForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    state: "AK", // Default value for the state dropdown
    country: 'USA', // Default value for country input
    colors: [],
  });

  function handleChange(event) {
    const { name, id, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        colors: checked
          ? [...prevFormData.colors, id]
          : prevFormData.colors.filter((color) => color !== id),
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      state: 'AK',
      country: 'USA',
      colors: [],
    });
  }

  return (
  <>
  <div>
    <form onSubmit={handleSubmit}>
      <h1>my form!</h1>
      <fieldset>
        <label htmlFor="first name">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="last name">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend htmlFor="state">State:</legend>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          multiple={false}  
        >
        <option value="AK">Alaska</option>
        <option value="AL">Alabama</option>
        <option value="AR">Arkansas</option>
        <option value="AS">American Samoa</option>
        <option value="AZ">Arizona</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DC">District of Columbia</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="GU">Guam</option>
        <option value="HI">Hawaii</option>
        <option value="IA">Iowa</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="MA">Massachusetts</option>
        <option value="MD">Maryland</option>
        <option value="ME">Maine</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MO">Missouri</option>
        <option value="MP">Northern Mariana Islands</option>
        <option value="MS">Mississippi</option>
        <option value="MT">Montana</option>
        <option value="NA">National</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="NE">Nebraska</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NV">Nevada</option>
        <option value="NY">New York</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="PR">Puerto Rico</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VA">Virginia</option>
        <option value="VI">Virgin Islands</option>
        <option value="VT">Vermont</option>
        <option value="WA">Washington</option>
        <option value="WI">Wisconsin</option>
        <option value="WV">West Virginia</option>
        <option value="WY">Wyoming</option>  
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="Country">Country: </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend htmlFor="alpaca colors">Favorite Alpaca Colors: </legend>
        <label htmlFor="black">Black</label>
        <input
          type="checkbox"
          name="checkBox1"
          id="black"
          value={formData.checkBox1}
          onChange={handleChange}
        />
        <label htmlFor="white">White</label>
        <input
          type="checkbox"
          name="checkBox2"
          id="white"
          value={formData.checkBox2}
          onChange={handleChange}
        />
        <label htmlFor="brown">Brown</label>
        <input
          type="checkbox"
          name="checkBox3"
          id="brown"
          value={formData.checkBox3}
          onChange={handleChange}
        />
        <label htmlFor="gray">Gray</label>
        <input
          type="checkbox"
          name="checkBox4"
          id="gray"
          value={formData.checkBox4}
          onChange={handleChange}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
    </div>
  </>


  );
}

export default myAlpacaForm;