import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #00eeffff; /* Light purple */
  padding: 35px;
  width: 450px;
  margin: 60px auto;
  border-radius: 18px;
  border: 3px solid black;
  box-shadow: 8px 8px 0px #00000055;  /* Shadow like the image */

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 2px solid #555;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: black;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: -10px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 2px solid #555;
  font-size: 16px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ✨ NEW: Submit Button Style like the image */
export const SubmitButton = styled.button`
  padding: 12px;
  width: 150px;
  background-color: #006effff; /* Light green */
  border-radius: 10px;
  border: 3px solid black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  box-shadow: 4px 4px 0px black;

  &:hover {
    background-color: #ff6f00ff;
  }

  &:active {
    box-shadow: 0px 0px 0px black;
    transform: translate(3px, 3px);
  }
`;
