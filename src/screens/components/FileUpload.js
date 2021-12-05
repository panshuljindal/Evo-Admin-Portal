import { useState } from "react";
import { Button } from "@mui/material";
import styled from "@mui/system/styled";

const reader = new FileReader();

const UploadRegion = styled("div")(() => ({
  width: "30rem",
  height: "30rem",
  backgroundColor: "#181818",
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const FileUpload = ({ formValues, setFormValues }) => {
  const handleImageChange = (event) => {
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        image: event.target.files ? event.target.files[0] : null,
        data: reader.result,
      }));
      console.log(reader.result);
    };
  };

  return (
    <label for="inputFile">
      <UploadRegion>
        {formValues.image?.name ?? "Upload File"}
        {/* Bind the handler to the input */}
        <input id="inputFile" onChange={handleImageChange} type="file" hidden />
      </UploadRegion>
    </label>
  );
};

export default FileUpload;
