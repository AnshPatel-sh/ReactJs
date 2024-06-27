import { useRef, useState, useTransition } from "react";
import { checkEmail, checkPassword } from "./validators";

export function RefForm() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isAfterFormSubmit, setIsAfterCormSubmit] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setIsAfterCormSubmit(true);
    const emailResult = checkEmail(emailRef.current.value);
    const passwordResult = checkPassword(passwordRef.current.value);

    setEmailErrors(emailResult);
    setPasswordErrors(passwordResult);
    if (emailResult.length === 0 && passwordResult.length === 0) {
      alert("Success");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <div className={`form-group ${emailErrors.length > 0 ? `error` : ""}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            onChange={
              isAfterFormSubmit
                ? (e) => {
                    setEmailErrors(checkEmail(e.target.value));
                  }
                : undefined
            }
            className="input"
            type="email"
            id="email"
            ref={emailRef}
          />
          {emailErrors.length > 0 && (
            <div className="msg">{emailErrors.join(", ")}</div>
          )}
        </div>
        <div
          className={`form-group ${passwordErrors.length > 0 ? `error` : ""}`}
        >
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            ref={passwordRef}
            type="password"
            id="password"
            onChange={
              isAfterFormSubmit
                ? (e) => {
                    setPasswordErrors(checkPassword(e.target.value));
                  }
                : undefined
            }
          />
          {passwordErrors.length > 0 && (
            <div className="msg">{passwordErrors.join(", ")}</div>
          )}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
