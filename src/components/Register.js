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

  const handleFitnessGoalChange = (e) => {
    setUser({
      ...user,
      fitnessGoal: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setUser({
      ...user,
      gender: e.target.value,
    });
  };

  const RegisterUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
    const data1 = await res.json();
    alert(data1.message);
    if (data1.success) {
      navigate('/');
    }
  };

  return (
    <div className="register-wrapper">
      <div className="form-content">
        <h2>Register</h2>
        <form onSubmit={RegisterUser}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input
              type="text"
              name="weight"
              value={user.weight}
              onChange={handleChange}
              placeholder="Weight"
            />
          </div>
          <div className="form-group">
            <label>Height</label>
            <input
              type="text"
              name="height"
              value={user.height}
              onChange={handleChange}
              placeholder="Height"
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
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
          </div>
          <div className="form-group">
            <label>Fitness Goal</label>
            <div className="radio-group">
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
          </div>
          <div className="form-group">
            <label>Health Conditions</label>
            <input
              type="text"
              name="healthConditions"
              value={user.healthConditions}
              onChange={handleChange}
              placeholder="Health Conditions"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
