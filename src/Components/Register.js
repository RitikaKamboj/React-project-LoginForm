import React from "react";
import Styled from "styled-components";

export default function Register(props) {
  // const btnStyle = {
  //     backgroundColor: "green",
  //     color: "white",
  // };
  let btnText, passBoxType;
  let btnClasses = ["btn", "m-1"];
  if (props.showPass === true) {
    // btnStyle.backgroundColor = "red";
    btnText = "Hide Password";
    passBoxType = "text";
    btnClasses.push("btn-danger");
  } else {
    btnText = "Show Password";
    passBoxType = "password";
    btnClasses.push("btn-success");
  }

  const StyledButton = Styled.button`
        display:  ${(props) => props.flag ? "inline-block" : "block"};
        padding: 10px 5px;
        background-color: ${(props) => props.bgcolor};
        border: none;  
        color: white; 
        width: ${(props) => props.flag === "1" ? "45%" : "100%"};
        margin: 8px;
    `;

  //   const StyledDiv = Styled.div`
  //     background-color: red;
  //     width: 400px;
  //     height: 300px;
  //    `;
  const StyledRegisterContainer = Styled.div`
    width: 600px;
    &:hover{
        box-shadow: 0px 0px 5px grey;

    }
    @media (min-width:0px) and (max-width:600px){
        width: 300px;
    }

  `;

  return (
    <StyledRegisterContainer className="container card p-3 mt-2">
      <h1 className="text-center">Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type={passBoxType}
            name="password"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Register
        </button>
        <button
          type="button"
          className={btnClasses.join(" ")}
          onClick={props.click}
        >
          {btnText}
        </button>
        <br/>
        <StyledButton type="button" flag= "1" bgcolor="orange">Login</StyledButton>
        {/* <StyledButton type="button">Terms & Conditions</StyledButton> */}
        <StyledButton type="button" flag= "1" bgcolor="green">Login with Google</StyledButton>
        <StyledButton type="button" flag= "0" bgcolor="blue">Login with Facebook</StyledButton>
      </form>
    </StyledRegisterContainer>
  );
}
