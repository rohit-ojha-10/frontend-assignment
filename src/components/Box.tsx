import { Dispatch, useEffect, useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import styled from "@emotion/styled";
import { boxStyle } from "./styles";
import Button from "./Button";
import CustomModal from "./Modal";
import Form, { User } from "./Form";
import api from "../api/api";
import UserData from "./UserData";

type Props = {
  id: string;
  width: number;
  height: number;
  setCounterChange: Dispatch<React.SetStateAction<boolean>>;
  counterChange: boolean;
};

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const Box = ({ id, width, height, setCounterChange, counterChange }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [request, setRequest] = useState<"Add" | "Update">("Add");
  const [data, setData] = useState<User | undefined>();

  const openModal = (requestType: typeof request) => {
    setRequest(requestType);
    setIsModalOpen(true);
  }; // modal form open

  const closeModal = () => {
    setIsModalOpen(false);
  }; // modal form close

  useEffect(() => { // everytime the component mounts or component changes I fetch the user from backend
    const getData = async () => {
      const name = localStorage.getItem(id);
      if (name) {
        try {
          const res = await api.getUser(name);
          setData(res.data.data);
        } catch (error) {
          console.log("No previous Data Fetched");
        }
      }
      else setData(undefined)
    };
    getData();
  }, [counterChange]);

  return (
    <ResizableBox
      width={width}
      height={height}
      minConstraints={[0, 0]}
      maxConstraints={[1000, 1000]}
      resizeHandles={["s", "e", "n", "w", "se", "sw", "ne", "nw"]}
      style={boxStyle}
    >
      <BoxContainer>
        {data && <UserData data={data} />}
        <ButtonsContainer>
          <Button label={"Add"} onClick={() => openModal("Add")} />
          {data && (
            <Button label={"Update"} onClick={() => openModal("Update")} />
          )}
        </ButtonsContainer>
      </BoxContainer>
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        children={
          <Form
            box_id={id}
            closeModal={closeModal}
            request={request}
            data={data}
            setData={setData}
            setCounterChange={setCounterChange}
          />
        }
      />
    </ResizableBox>
  );
};

export default Box;
