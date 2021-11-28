import React from "react";
import styled from "@mui/system/styled";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

const InputBx = styled(TextField)(() => ({
    width: "17.5rem",
    margin: '2% 0 4%',
    letterSpacing: '0.075rem',
    '& label.Mui-focused': {
      color: '#5F2EEAFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fcfcfc',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '2px solid #5F2EEA55'
      },
      '&:hover fieldset': {
        borderColor: '#5F2EEAFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5F2EEAFF',
      },
    },
    '& .Mui-focused': {
      color: '#5F2EEAFF'
    },
    '& .MuiInput-input': {
      color: '#fcfcfc'
    },
    '& .MuiInputLabel-root': {
      color: '#5F2EEAFF'
    },
    '& 	.MuiOutlinedInput-root': {
      color: '#fcfcfc'
    }
}))

// width: 280px;
//   height: 56px;
//   border: 2px solid #121212;
//   background: #121212;
//   box-sizing: border-box;
//   border-radius: 16px;
//   font-size: 1em;
//   line-height: 175%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   letter-spacing: 0.75px;
//   color: #fcfcfc;
//   margin: 0;
//   margin-top: 2%;
//   margin-bottom: 4%;
//   box-shadow: none;
//   transition: 0.5s;
//   padding: 3%;
//   :hover{
//     border: 2px solid #5F2EEA;
//   }
//   &:focus{
//       outline: none;
//     border: 2px solid #5F2EEA;
//   }

//   @media only screen and (max-width: 400px){
//     width: 250px;
//     height: 50px;
//     font-size: 0.9em;
//   }

const InputBox = (props) => {
  return <InputBx type={props.type} label={props.place} variant="outlined" InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        {props.type === "password" ? <AiOutlineEye fontSize="1.5rem" color="#fcfcfc" /> : <HiOutlineMail fontSize="1.5rem" color="#fcfcfc" />}
      </InputAdornment>
    )
  }} {...props}></InputBx>;
};

export default InputBox;