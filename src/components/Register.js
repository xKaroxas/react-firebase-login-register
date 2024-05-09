import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  // Actualizar El Estado
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  // Ver El Estado
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold my-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
            className="shadow appearance-none border rounded f-ull py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold my-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="******"
            className="shadow appearance-none border rounded f-ull py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="bg-blue-500 hover:bg-lue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">Already have an Account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
