import styled from 'styled-components';

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #42a5f5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavBar = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-left: 20px;
  padding-right: 20px;
`;
