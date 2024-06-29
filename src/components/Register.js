// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/register.css';

// const Register = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     gender: '',
//     height: '',
//     weight: '',
//     fitnessGoal: '',
//     healthConditions: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const registerUser = async (e) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:5000/register', {
//       method: 'POST',
//       body: JSON.stringify(user),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const data = await res.json();
//     alert(data.message);
//     if (data.success) {
//       navigate('/');
//     }
//   };

//   return (
//     <div className="contacts">
//       <div id="formContent">
//         <form onSubmit={registerUser} className="card-body">
//           <h2>Register</h2>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={user.name}
//             onChange={handleChange}
//             placeholder="Name"
//           />
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />

//           <label>Gender:</label>
//           <input
//             type="text"
//             name="gender"
//             value={user.gender}
//             onChange={handleChange}
//             placeholder="Gender"
//           />
//           <label>Height:</label>
//           <input
//             type="text"
//             name="height"
//             value={user.height}
//             onChange={handleChange}
//             placeholder="Height"
//           />
//           <label>Weight:</label>
//           <input
//             type="text"
//             name="weight"
//             value={user.weight}
//             onChange={handleChange}
//             placeholder="Weight"
//           />
//           <label>Fitness Goal:</label>
//           <label>
//             <input
//               type="radio"
//               value="Weight Loss"
//               checked={user.fitnessGoal === 'Weight Loss'}
//               onChange={(e) =>
//                 setUser({ ...user, fitnessGoal: e.target.value })
//               }
//             />
//             Weight Loss
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="Muscle Gain"
//               checked={user.fitnessGoal === 'Muscle Gain'}
//               onChange={(e) =>
//                 setUser({ ...user, fitnessGoal: e.target.value })
//               }
//             />
//             Muscle Gain
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="Maintain Fitness"
//               checked={user.fitnessGoal === 'Maintain Fitness'}
//               onChange={(e) =>
//                 setUser({ ...user, fitnessGoal: e.target.value })
//               }
//             />
//             Maintain Fitness
//           </label>
//           <label>Health Conditions:</label>
//           <input
//             type="text"
//             name="healthConditions"
//             value={user.healthConditions}
//             onChange={handleChange}
//             placeholder="Health Conditions"
//           />
//           <input type="submit" value="Register" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
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

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    alert(data.message);
    if (data.success) {
      navigate('/');
    }
  };

  return (
    <div className="contacts">
      <div id="formContent">
        <form onSubmit={registerUser} className="card-body">
          <h2>Register</h2>
          <div className="input-group">
            <div className="input-column">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <label>Gender:</label>
              <input
                type="text"
                name="gender"
                value={user.gender}
                onChange={handleChange}
                placeholder="Gender"
              />
            </div>
            <div className="input-column">
              <label>Height:</label>
              <input
                type="text"
                name="height"
                value={user.height}
                onChange={handleChange}
                placeholder="Height"
              />
              <label>Weight:</label>
              <input
                type="text"
                name="weight"
                value={user.weight}
                onChange={handleChange}
                placeholder="Weight"
              />
              <label>Fitness Goal:</label>
              <label>
                <input
                  type="radio"
                  value="Weight Loss"
                  checked={user.fitnessGoal === 'Weight Loss'}
                  onChange={(e) =>
                    setUser({ ...user, fitnessGoal: e.target.value })
                  }
                />
                Weight Loss
              </label>
              <label>
                <input
                  type="radio"
                  value="Muscle Gain"
                  checked={user.fitnessGoal === 'Muscle Gain'}
                  onChange={(e) =>
                    setUser({ ...user, fitnessGoal: e.target.value })
                  }
                />
                Muscle Gain
              </label>
              <label>
                <input
                  type="radio"
                  value="Maintain Fitness"
                  checked={user.fitnessGoal === 'Maintain Fitness'}
                  onChange={(e) =>
                    setUser({ ...user, fitnessGoal: e.target.value })
                  }
                />
                Maintain Fitness
              </label>
              <label>Health Conditions:</label>
              <input
                type="text"
                name="healthConditions"
                value={user.healthConditions}
                onChange={handleChange}
                placeholder="Health Conditions"
              />
            </div>
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
