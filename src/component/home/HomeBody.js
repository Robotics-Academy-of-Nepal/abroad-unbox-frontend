import React from "react";
import styled from "styled-components";
import BackgroundImg from "../images/backimg.jpg"; 
import BodyLeft from "./BodyLeft";
import homeimg from '../images/study.png';

const BackgroundImage = styled.div`
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 49vh; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeBody = () => {
  return (
    <BackgroundImage>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex justify-start items-center p-4 mt-7 md:mt-2">
          <BodyLeft />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img 
            src={homeimg} 
            alt="Student studying illustration" 
            className="h-auto md:h-96 mt-10 md:mt-0 max-w-full mx-auto object-contain" 
          />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default HomeBody;
