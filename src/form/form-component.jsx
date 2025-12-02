import React from "react";
import {
  FormContainer,
  Input,
  Select,
  Title,
  Label, 
  RadioGroup
} from "./form-style.jsx";
const FormComponent = () => {
  return (
    <FormContainer>
      <Title>Hello, Everyone!</Title>
      <h1>Welcome to the Computer Science Department</h1>

      <Label htmlFor="name">Name:</Label>
      <Input type="text" id="name" maxLength="20" placeholder="Enter your name" required />

      <Label htmlFor="email">Email:</Label>
      <Input type="email" id="email" placeholder="Enter your email" required />

      <Label htmlFor="dept">Department:</Label>
      <Select id="dept">
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
      </Select>

      <Label>Year of Study:</Label>
      <RadioGroup>
        <input type="radio" id="first" name="year" value="First" />
        <label htmlFor="first">First</label>

        <input type="radio" id="second" name="year" value="Second" />
        <label htmlFor="second">Second</label>

        <input type="radio" id="third" name="year" value="Third" />
        <label htmlFor="third">Third</label>

        <input type="radio" id="fourth" name="year" value="Fourth" />
        <label htmlFor="fourth">Fourth</label>
      </RadioGroup>

      <button type="submit">Submit</button>
    </FormContainer>
  );
};

export default FormComponent;
