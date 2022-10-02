import { useState, useEffect } from "react";
import styled from "styled-components";
import { map } from "lodash";
import ImageListItem from "./ImageListItem";
import { getListDataFileUrl } from "../utils";

const OuterWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImagesList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(getListDataFileUrl());
      const json = await data.json();
      setList(json);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <OuterWrapper>
      <Wrapper>
        {map(list, (el) => {
          return <ImageListItem key={el.dir} data={el} />;
        })}
      </Wrapper>
    </OuterWrapper>
  );
};

export default ImagesList;
