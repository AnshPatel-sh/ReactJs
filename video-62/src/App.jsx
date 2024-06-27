import { useRef, useState } from "react";
import { FormGroup } from "./FormGroup";
import "./style.css";
import { checkCountry, checkEmail, checkPassword } from "./validators";

function App() {
  const COUNTRY_OPTIONS = [
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "Mexico", value: "MX" },
  ];
  const email = useRef();
  const password = useRef();
  const country = useRef();

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [countryErrors, setCountryErrors] = useState([]);
  const [afterSubmit, setAfterSubmit] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setAfterSubmit(true);

    const emailResults = checkEmail(email.current.value);
    const passwordResults = checkPassword(password.current.value);
    const countryResults = checkCountry(country.current.value);

    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);
    setCountryErrors(countryResults);

    if (
      emailResults.length === 0 &&
      passwordResults.length === 0 &&
      countryResults.length === 0
    ) {
      alert("Success");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormGroup errors={emailErrors}>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            ref={email}
            onChange={
              afterSubmit
                ? (e) => {
                    setEmailErrors(checkEmail(e.target.value));
                  }
                : undefined
            }
          />
        </FormGroup>

        <FormGroup errors={passwordErrors}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            ref={password}
          />
        </FormGroup>

        <FormGroup errors={countryErrors}>
          <label className="label" htmlFor="country">
            Country
          </label>
          <select className="input" id="country" ref={country}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Australia">Australia</option>
          </select>
        </FormGroup>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
