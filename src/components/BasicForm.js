import useInput from '../hooks/useInput';

const isNotEmpty = (value) => value.trim() !== '';
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isEmail = (value) => re.test(value.trim());

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: isValidFirstName,
    hasError: hasErrorFirstName,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    isValid: isValidLastName,
    hasError: hasErrorLastName,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: isValidEmail,
    hasError: hasErrorEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (isValidFirstName && isValidLastName && isValidEmail) formIsValid = true;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    console.log(firstName);
    console.log(lastName);
    console.log(email);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameStyle = hasErrorFirstName
    ? 'form-control invalid'
    : 'form-control';
  const lastNameStyle = hasErrorLastName
    ? 'form-control invalid'
    : 'form-control';
  const emailStyle = hasErrorEmail ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {hasErrorFirstName && (
            <p className="error-text">Enter correct First Name!</p>
          )}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {hasErrorLastName && (
            <p className="error-text">Enter correct Last Name!</p>
          )}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {hasErrorEmail && <p className="error-text">Enter correct Email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
