import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Name = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-right: 10px;
`;

const Firstname = styled.p`
  padding-top: 15.5px;
  margin: 0;
  text-align: end;
  color: #ff6060;
`;

const Lastname = styled.p`
  margin: 0;
  text-align: end;
  color: #ff6060;
`;
const Picture = styled.img`
  border-radius: 50%;
  height: 62px;
  width: 62px;
`;

function Host({ host }) {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <Wrapper>
      <Name>
        <Firstname>{name.trim()}</Firstname>
        <Lastname>{lastname.trim()}</Lastname>
      </Name>
      <Picture src={host.picture} alt="" />
    </Wrapper>
  );
}

export default Host;
