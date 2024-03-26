import { useState } from "react";
import handImage from "../assets/img/hand.png";
import faceImage from "../assets/img/face.webp";

const Main = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [rotateEyes, setRotateEyes] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(emailValue, passwordValue);
  };

  const handleEmailInputChange = (e) => {
    const value = e.target.value;
    setEmailValue(value);
    toggleEyeClasses(value.length);
  };

  const handlePasswordInputChange = (e) => {
    const value = e.target.value;
    setPasswordValue(value);
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const toggleEyeClasses = (length) => {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      if (length > 5) {
        dot.classList.add("rotate2");
      } else {
        dot.classList.remove("rotate2");
      }
      if (length > 10) {
        dot.classList.remove("rotate2");
        dot.classList.add("rotate");
        setRotateEyes(true);
      } else {
        dot.classList.remove("rotate");
        setRotateEyes(false);
      }
    });
  };

  const toggleHandClasses = () => {
    const hand = document.querySelector(".hand");
    if (showPassword) {
      hand.classList.add("handAfter2");
    } else {
      hand.classList.remove("handAfter2");
      hand.classList.add("handAfter");
    }
  };

  return (
    <div className="container">
      <h1>Please login</h1>
      <main>
        <div id="monkey">
          <img src={faceImage} id="monkeyface" alt="Monkey face" />
          <div className="eyes-cont">
            <div className="eyes"></div>
            <div className="eyes"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <img src={handImage} className="hand" alt="Hand" />
          </div>
        </div>
      </main>
      <form onSubmit={handleFormSubmit} id="form">
        <input
          type="email"
          placeholder=" Enter your email"
          id="email"
          value={emailValue}
          onChange={handleEmailInputChange}
        />
        <input
          type={showPassword ? "text" : "password"}
          id="pass-input"
          placeholder=" Enter your password"
          value={passwordValue}
          onChange={handlePasswordInputChange}
        />
        <div className="passdiv">
          <input
            type="checkbox"
            id="checkPass"
            checked={showPassword}
            onChange={() => {
              handleShowPasswordChange();
              toggleHandClasses();
            }}
          />
          <label htmlFor="checkPass">Show Password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { Main };
