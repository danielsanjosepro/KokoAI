import { useEffect } from "react";
import styled from "styled-components";
import { useStore } from "easy-peasy";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { getStausUrl } from "../utils";
import "./Details.css";

const Section = styled.div`
  width: 100%;
  height: 85%;
  margin-top: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
`;

const ImageWrapper = styled.div`
  width: 80%;
`;

const Details = () => {
  const navigate = useNavigate();
  const store = useStore();
  const state = store.getState();
  const data = (state.tasks && state.tasks.currentItem) || {};

  useEffect(() => {
    if (!data.dir) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {!!data.dir && (
        <Section>
          <ImageWrapper>
            <img
              src={getStausUrl(data)}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "10px",
              }}
            />
          </ImageWrapper>

          <ReactMarkdown className="markdown">{data.description}</ReactMarkdown>
        </Section>
      )}
    </>
  );
};

export default Details;
