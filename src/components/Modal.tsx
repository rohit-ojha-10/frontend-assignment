import React, { ReactNode } from "react";
import Modal from "react-modal";
import { ModalDiv, modalContentStyle, overlayStyle } from "./styles";

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
};

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <ModalDiv>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
          content: modalContentStyle,
          overlay: overlayStyle,
        }}
      >
        {children}
      </Modal>
    </ModalDiv>
  );
};

export default CustomModal;
