import styled from "@emotion/styled";

export const boxStyle = {
  backgroundColor: "#3498db", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #2980b9", 
  borderRadius: "8px",
  boxSizing: "border-box",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
  color: "#fff", 
  fontSize: "16px",
  flexShrink: 100,
  flexGrow: 100,
} as const;

export const StyledButton = styled.button`
  background-color: #2980b9;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #001f3f;
  }
`;
export const ModalDiv = styled.div`
  height: "50vh";
  width: "50vw";
`;

export const modalContentStyle: React.CSSProperties = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "50vw", 
  width: "50vw", 
  height: "50vh", 
  maxHeight: "50vh", 
  overflow: "auto", 
};

// Style the overlay (background) of the modal
export const overlayStyle: React.CSSProperties = {
  backgroundColor: "rgba(0,0,0,0.7)",
  backdropFilter: "blur(50px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// Styled close button
export const CloseButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
