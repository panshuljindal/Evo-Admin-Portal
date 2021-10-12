import React from "react";
import styled from "styled-components";

const InputBx = styled.input`
  width: 280px;
  height: 56px;
  border: 2px solid #121212;
  background: #121212;
  box-sizing: border-box;
  border-radius: 16px;
  font-size: 1em;
  line-height: 175%;
  display: flex;
  align-items: center;
  justify-content: center;
//   text-align: center;
  letter-spacing: 0.75px;
  color: #fcfcfc;
  margin: 0;
  margin-top: 2%;
  margin-bottom: 4%;
  box-shadow: none;
  transition: 0.5s;
  padding: 3%;
    
//   :hover{
//     border: 2px solid #5F2EEA;
//   }
  &:focus{
      outline: none;
    border: 2px solid #5F2EEA;
  }

  @media only screen and (max-width: 400px){
    width: 250px;
    height: 50px;
    font-size: 0.9em;
  }
`;

const InputBox = (props) => {
  return <InputBx type={props.type} placeholder={props.place}></InputBx>;
};

export default InputBox;