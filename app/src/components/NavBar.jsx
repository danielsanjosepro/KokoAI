import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import home from "../assets/home.svg";
import back from "../assets/arrow-back.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 22px;
  width: 22px;
  cursor: pointer;
`;

const NavBar = ({}) => {
  const navigate = useNavigate();

  const onHomePress = () => {
    navigate("/");
  };
  const onBackPress = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <ImgWrapper onClick={onHomePress}>
        <img
          src={home}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "10px",
          }}
        />
      </ImgWrapper>
      <ImgWrapper onClick={onBackPress}>
        <img
          src={back}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "10px",
          }}
        />
      </ImgWrapper>
    </Wrapper>
  );
};

export default NavBar;
