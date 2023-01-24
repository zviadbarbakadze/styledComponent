import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guid</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Api</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Zviadi ©</Copyright>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
