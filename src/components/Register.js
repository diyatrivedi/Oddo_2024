// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const Navigate=useNavigate()
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     gender: '',
//     height: '',
//     weight: '',
//     fitnessGoal: '',
//     healthConditions: [],
//   })
//   const [selectedOption, setSelectedOption] = useState('');
//   const [gender, setGender] = useState('');
//   const [fitnessGoal, setFitnessGoal] = useState('');
//   const handleOptionChange = (event) => {
//     event.preventDefault();
//     // Send the data to your backend, e.g., via fetch or axios
//     // Make sure to send the data in the correct format
//     const data = { gender, fitnessGoal };
//     console.log(data);
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };
//   const RegisterUser = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5000/register", {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: { "Content-Type": "application/json" },
//     });
//     const data1 = await res.json();
//     alert(data1.message);
//     console.log(data1.success);
//     if (data1.success) {
      
//       Navigate("/");
//     }
//   };
//   return (
//     <div class="wrapper fadeInDown">
//     <div id="formContent">
   
//       <br />
//       <h2>Register</h2>

//       <form onSubmit={RegisterUser}>
//         <label>Name:-</label>
//       <input
//           type="text"
//           id="name"
//           class="fadeIn second"
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Name"
//         />
//         <label>Email:-</label>
//         <input
//           type="email"
//           id="login"
//           class="fadeIn second"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Email"
//         />
//         <label>Password:-</label>
//         <input
//           id="password"
//           class="fadeIn third"
//           name="password"
//           type="password"
//           className="form-control"
//           value={user.password}
//           onChange={handleChange}
//           placeholder="Enter your Password"
//         />
//         <label>Age:-</label>
//       <input
//           type="text"
//           id="age"
//           class="fadeIn second"
//           name="age"
//           value={user.age}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Age"
//         />
//         <label>Weight:-</label>
//         <input
//           type="text"
//           id="weight"
//           class="fadeIn second"
//           name="weight"
//           value={user.weight}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Weight"
//         />
//         <label>Height:-</label>
//          <input
//           type="text"
//           id="height"
//           class="fadeIn second"
//           name="height"
//           value={user.height}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Height"
//         />

//         <label>Gender:-</label>
//         <label>
//         <input
//           type="text"
//           id="gender"
//           class="fadeIn second"
//           name="gender"
//           value={user.gender}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="gender"
//         />
//           Gender
//         </label>
        

//         <label>Fitness-Goal:-</label>
//         <label>
//         <input
//             type="radio"
//             value="Weight Loss"
//             checked={fitnessGoal === 'Weight Loss'}
//             onChange={(e) => setFitnessGoal(e.target.value)}
//           />
//           Weight Loss
//         </label>
//         <label>
//         <input
//             type="radio"
//             value="Muscle Gain"
//             checked={fitnessGoal === 'Muscle Gain'}
//             onChange={(e) => setFitnessGoal(e.target.value)}
//           />
//           Muscle Gain
//         </label>
//         <label>
//         <input
//             type="text"
//             value="Maintain Fitness"
//             checked={fitnessGoal === 'Maintain Fitness'}
//             onChange={(e) => setFitnessGoal(e.target.value)}
//           />
//            Maintain Weight
//         </label>
    
//         <label>Health-condition </label>
//             <input
//             type="text"
//             id="healthConditions"
//             class="fadeIn second"
//             name="healthConditions"
//             value={user. healthConditions}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="health-condition"
//           />
       


//         <input type="submit" class="fadeIn fourth" value="Register" />
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Register
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    fitnessGoal: '',
    healthConditions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleGenderChange = (e) => {
    setUser({
      ...user,
      gender: e.target.value,
    });
  };

  const handleFitnessGoalChange = (e) => {
    setUser({
      ...user,
      fitnessGoal: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
    const data1 = await res.json();
    alert(data1.message);
    console.log(data1.success);
    if (data1.success) {
      navigate('/');
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <br />
        <h2>Register</h2>

        <form onSubmit={registerUser}>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
          />
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
          />
          <label>Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your Password"
          />
          <label>Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={user.age}
            onChange={handleChange}
            className="form-control"
            placeholder="Age"
          />
          <label>Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={user.weight}
            onChange={handleChange}
            className="form-control"
            placeholder="Weight"
          />
          <label>Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={user.height}
            onChange={handleChange}
            className="form-control"
            placeholder="Height"
          />

          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={user.gender === 'Male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={user.gender === 'Female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={user.gender === 'Other'}
                onChange={handleGenderChange}
              />
              Other
            </label>
          </div>

          <label>Fitness Goal:</label>
          <div>
            <label>
              <input
                type="radio"
                name="fitnessGoal"
                value="Weight Loss"
                checked={user.fitnessGoal === 'Weight Loss'}
                onChange={handleFitnessGoalChange}
              />
              Weight Loss
            </label>
            <label>
              <input
                type="radio"
                name="fitnessGoal"
                value="Muscle Gain"
                checked={user.fitnessGoal === 'Muscle Gain'}
                onChange={handleFitnessGoalChange}
              />
              Muscle Gain
            </label>
            <label>
              <input
                type="radio"
                name="fitnessGoal"
                value="Maintain Fitness"
                checked={user.fitnessGoal === 'Maintain Fitness'}
                onChange={handleFitnessGoalChange}
              />
              Maintain Fitness
            </label>
          </div>

          <label>Health Conditions:</label>
          <input
            type="text"
            id="healthConditions"
            name="healthConditions"
            value={user.healthConditions}
            onChange={handleChange}
            className="form-control"
            placeholder="Health Conditions"
          />

          <input type="submit" className="fadeIn fourth" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;

