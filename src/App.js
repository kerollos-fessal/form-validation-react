import Input from "./reusableComponents/input/input";
import {useState} from "react";
import "./App.css";

function App() {
  const [formInputs, setFormInputs]= useState({
    name: "",
    email:"",
    password:"",
    confirmPassword:"",
    img:""
  });

  const [formErrors, setFormErrors]= useState({
    nameError: "",
    emailError :"",
    passwordError:"",
    confirmPasswordError:"",
    imgError:"" //or false
  })

  const handleChange =(e) => {
    console.log("e");
    switch (e.target.id) {
      case "name-input":
        setFormInputs({...formInputs, name: e.target.value})
      break;

      case "email-input":
        setFormInputs({...formInputs, email: e.target.value})
      break;

      case "password-input":
        setFormInputs({...formInputs, password: e.target.value})
      break;

      case "confirm-password-input":
        setFormInputs({...formInputs, confirmPassword: e.target.value});
      break;

      case "img-input":
        setFormInputs({...formInputs, img: e.target.value});
      break;

    default:
      return;
      }
  }

  const validateErrors = () =>{
    setFormErrors({
      nameError: !formInputs.name.length?"name is required": "",
      emailError: !formInputs.email.length?"email is required": !/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(formInputs.email)? "Invalid email address!": "",
      passwordError: !formInputs.password.length?"password is required between 5 and 8 characters": formInputs.password.length <= 5
            ? "password length must be greater than 5"
            : formInputs.password.length >= 8
            ? "password length must be smaller than 8"
            : "",
      confirmPasswordError: !formInputs.confirmPassword.length? "confirm Password input is required": formInputs.confirmPassword !== formInputs.password? "Passwords don't match": "",
      imgError: !formInputs.img.length?"image is required" : ""
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    console.log(formInputs)
    validateErrors();
  }
  return (
    <div className="App">
      <section className="p-5">
        <form className="border border-2 border-secondary p-5">
          {/* name input */}
          <Input
            type="text"
            handleChange={handleChange}
            placeholder={"enter your name"}
            id="name-input"
            className="form-control w-50 m-auto mb-4"
            value={formInputs.name}
          />
          {formErrors.nameError && <span className="errStyle">{formErrors.nameError}</span>}
           {/* email input */}
          <Input
            type="text"
            handleChange={handleChange}
            placeholder={"enter your email"}
            id="email-input"
            className="form-control w-50 m-auto mb-4"
            value={formInputs.email}
          />
          {formErrors.emailError && <span className="errStyle">{formErrors.emailError}</span>}
           {/* password input */}
          <Input
            type="password"
            handleChange={handleChange}
            placeholder={"enter your password"}
            id="password-input"
            className="form-control w-50 m-auto mb-4"
            value={formInputs.password}
          />
          {formErrors.passwordError && <span className="errStyle">{formErrors.passwordError}</span>}
           {/* confirm password input */}
          <Input
            type="password"
            handleChange={handleChange}
            placeholder={"re-enter your password"}
            id="confirm-password-input"
            className="form-control w-50 m-auto mb-4"
            value={formInputs.confirmPassword}
          />
          {formErrors.confirmPasswordError && <span className="errStyle">{formErrors.confirmPasswordError}</span>}
          {/* image input */}
          <Input
            type="file"
            handleChange={handleChange}
            id="img-input"
            className="form-control w-25 m-auto mb-4"
            accept="image/*"
            value={formInputs.img}
          />
          {formErrors.imgError && <span className="errStyle">{formErrors.imgError}</span>}
          <button className="btn border border-black border-2 px-3" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
