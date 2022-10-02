import styled from "styled-components";
import FileUpload from "../components/FileUpload";
import listSvg from "../assets/list.svg";
import RoundButton from "../components/RoundButton";

import { useNavigate } from "react-router-dom";

const TextDescription = styled.div`
  padding: 10px;
  color: rgba(119,146,95,1);
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

const TextDescriptionTwi = styled.div`
  padding: 10px;
  color: rgb(210,178,120);
  font-weight: italic;
  font-size: 30px;
  text-align: center;
`;

const WrapperGrid = styled.div`
  display: grid;
`

const WrapperItemInGrid = styled.div`
  display: flex;
  justify-conten: space-around;
`

const HorizontalSpacer = styled.div`
  height: 60px;
`

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Home = () => {
  const navigate = useNavigate();

  const navigateToList = () => {
    setTimeout(() => {
      navigate("/list");
    }, 500);
  };

  return (
    <WrapperGrid>
        <HorizontalSpacer></HorizontalSpacer>
        <TextDescription>
          Take Picture
        </TextDescription>
        <TextDescriptionTwi>
          yɛ mfonim
        </TextDescriptionTwi>
        <FileUpload />
      <HorizontalSpacer></HorizontalSpacer>
      <HorizontalSpacer></HorizontalSpacer>
      <TextDescription>
          Check Pictures
        </TextDescription>
        <TextDescriptionTwi>
          hwehwɛ mu mfonim
        </TextDescriptionTwi>
        <RoundButton icon={listSvg} onClick={navigateToList} />
    </WrapperGrid>
  );
};

export default Home;
