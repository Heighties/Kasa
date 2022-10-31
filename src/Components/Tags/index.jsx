import React from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Tag = styled.div`
  background: ${colors.primary};
  border-radius: 5px;
  color: white;
  padding: 3px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  /* min-width: 68px; */
  text-align: center;
`
const Text = styled.p`
    margin: 0;
    font-size: 10px;
    font-weight: 500;
`

const Tags = ({ getTag }) => {
  return (
    <Tag>
      <Text>{getTag}</Text>
    </Tag>
  );
};

export default Tags;
