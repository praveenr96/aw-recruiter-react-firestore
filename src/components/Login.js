import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth, firestore } from "../firebase/config";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const history = useHistory();
  var userRole;

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e, email, password) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      firestore
        .collection("users")
        .doc(userAuth.user.uid)
        .onSnapshot((querySnapshot) => {
          setCurrentUser({
            ...currentUser,
            name: querySnapshot.data().name,
            userRole: querySnapshot.data().role,
          });
          if (querySnapshot.data().role === "hr") {
            history.push("/dashboard");
          } else if (querySnapshot.data().role === "interviewer") {
            history.push("/interviewer");
          } else if (querySnapshot.data().role === "candidate") {
            history.push("/candidates");
          }
        });
    });
  };

  const handleChange = (e) => {
    if (e.target.id === "email-login") {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  };

  return (
    <div className="shadow p-3 mb-5 bg-white rounded loginsignup-form">
      <h1 className="text-center">Log in</h1>
      <form onSubmit={(e) => handleSubmit(e, email, password)}>
        <div className="form-group mt-4">
          <input
            onChange={handleChange}
            className="form-control"
            type="email"
            name="email-login"
            id="email-login"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group mt-4">
          <input
            onChange={handleChange}
            className="form-control"
            type="password"
            name="password-login"
            id="password-login"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="form-group mt-4">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-group">
          <h6>
            No account?
            <Link to="/signup"> Create one</Link>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
