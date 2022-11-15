import React from "react";
import useCollapse from "react-collapsed";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import VectorB from "../../assets/VectorB.png";
import VectorT from "../../assets/VectorT.png";

const Collapse = styled.div`
  /* width: 800px; */
  /* padding: 0.5rem; */
  width: 100%;
`;
const CollapseContent = styled.div`
  /* padding: 6px; */
  background-color: #f6f6f6;
  color: ${colors.primary};
`;
const CollapseHeader = styled.div`
  background-color: ${colors.primary};
  /* padding: 6px; */
  cursor: pointer;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

function Collapsible({ title, content }) {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <Collapse>
      {/* <div className="header" {...getToggleProps()}>
            {isExpanded ? title : title}
        </div> */}
      <CollapseHeader {...getToggleProps()}>
        {title}
        <span className="vector"></span>
      </CollapseHeader>
      <CollapseContent {...getCollapseProps()}>{content}</CollapseContent>
    </Collapse>
  );
}

export default Collapsible;
