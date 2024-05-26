import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
