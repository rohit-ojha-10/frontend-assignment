import React, { Dispatch, useState } from "react";
import styled from "@emotion/styled";
import api from "../api/api";
export type User = {
  name: string;
  email: string;
  role: string;
};
type props = {
  box_id: string;
  request: "Add" | "Update";
  closeModal: () => void;
  data: User | undefined;
  setData: Dispatch<React.SetStateAction<User | undefined>>;
  setCounterChange: Dispatch<React.SetStateAction<boolean>>;
};
const Form: React.FC<props> = ({
  box_id,
  data,
  setData,
  request,
  closeModal,
  setCounterChange
}: props) => {
  const [formData, setFormData] = useState<User>({
    name: request === "Update" ? data?.name || "" : "",
    email: request === "Update" ? data?.email || "" : "",
    role: request === "Update" ? data?.role || "" : "",
  }); // if request is update , i am populating form with previous data
  const [isloading, setIsLoading] = useState(false);
  const nameDisabled = request === 'Update';
  const [message, setMessage] = useState(
    request === "Add" ? "Add New data" : "Update Previous Data"
  );
  const [messageColor, setMessageColor] = useState('black');
  console.log(isloading);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = request === "Add" ? "addUser" : "updateUser"; // api function name 
    setIsLoading(true);
    try {
      if (data?.name && request === "Add") { // deleting previous user in this box from backend in case of addition
        const deleteRes = await api.deleteUser(data.name);
        console.log({ deleteRes });
      }
      const res = await api[endpoint](formData); // api called [add or update]
      setData(res.data.data);
      localStorage.setItem(box_id, res.data.data.name);
      setCounterChange(prev => !prev);
      setIsLoading(false);
      closeModal();
    } catch (error: any) {
      console.log(error);
      const errorData = error?.response?.data?.error;
      const dupError = errorData?.code === 11000;
      if (dupError) { // duplicacy check
        const [key] = Object.keys(errorData.keyValue);
        setMessage(`${key} already exists.`);
        setMessageColor('red');
      }

      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <h2 style={{color:messageColor}}>{message}</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            disabled={nameDisabled}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="role">Role:</Label>
          <Select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </Select>
        </FormGroup>

        <Button disabled={isloading} type="submit">
          {isloading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </FormContainer>
  );
};
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export default Form;
