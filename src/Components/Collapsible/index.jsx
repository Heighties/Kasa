import React from 'react';
import useCollapse from 'react-collapsed';
import styled from 'styled-components'
import colors from '../../utils/style/colors';


const Collapse = styled.div`
    width: 800px;
    padding: 0.5rem;
`
const CollapseContent = styled.div`
    padding: 6px;
    background-color: #F6F6F6;
    color : ${colors.primary};
`
const CollapseHeader = styled.div`
    background-color: ${colors.primary};
    padding: 6px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
`


function Collapsible({title, content}) {
    const { getCollapseProps, getToggleProps} = useCollapse();
return (
    <Collapse>
        {/* <div className="header" {...getToggleProps()}>
            {isExpanded ? title : title}
        </div> */}
        <CollapseHeader {...getToggleProps()}>
            {title}
        </CollapseHeader>
        <CollapseContent {...getCollapseProps()}>
            {content}
        </CollapseContent>
    </Collapse>
    );
}

export default Collapsible;