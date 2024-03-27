import Box from "../components/Box";
import logo from "../assets/image.png";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import api from "../api/api";
import Button from "../components/Button";

export type Counter = {
  additions: number;
  deletions: number;
  updations: number;
};

const Home = () => {
  const [counterChange, setCounterChange] = useState<boolean>(false);
  const [counterData, setCounterData] = useState<Counter>({
    additions: 0,
    deletions: 0,
    updations: 0,
  });
  useEffect(() => {
    const getCounter = async () => { // Getting Count Each Time count Changes
      try {
        const res = await api.getCount();
        setCounterData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCounter();
  }, [counterChange]);
  const reset = async () => { // function to reset everything from backend , reset count to 0 in backend and in frontend
    // implemented this so that it's easier for testing...
    try {
      await api.reset();
      localStorage.removeItem("1");
      localStorage.removeItem("2");
      localStorage.removeItem("3");
      setCounterChange((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {/* Header */}
      <img src={logo}></img>
      <h1 style={{ textAlign: "center" }}>Assignment </h1>
      {/* Reset Button */}
      <div>
        <Button color="#D04848" label="Reset Everything" onClick={reset} />
      </div>
      {/* Count Fetched from API */}
      <span>Additions: {counterData.additions} &nbsp;</span>
      <span>Deletions: {counterData.deletions} &nbsp;</span>
      <span>Updations: {counterData.updations} &nbsp;</span>
      <br></br>
      {/* Main Container with Add and Update Buttons and frontend task implementation*/}
      <Container>
        <Box
          id="1" 
          width={600}
          height={400}
          counterChange={counterChange}
          setCounterChange={setCounterChange}
        />
        <Box
          id="2"
          width={600}
          height={400}
          counterChange={counterChange}
          setCounterChange={setCounterChange}
        />
        <Box
          id="3"
          width={900}
          height={300}
          counterChange={counterChange}
          setCounterChange={setCounterChange}
        />
      </Container>
      ;
    </>
  );
};

export default Home;
