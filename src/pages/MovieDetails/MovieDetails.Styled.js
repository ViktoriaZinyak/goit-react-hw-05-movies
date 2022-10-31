import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  gap: 40px;
  /* padding: 40px; */
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 20px;
  color: #000;
  text-decoration: none;
`;

export const Section = styled.section`
  padding: 40px;
`;

export const AddInfo = styled.p`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const AddLink = styled(NavLink)`
  font-size: 20px;
  color: #000;
  text-decoration: none;

  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const LinkWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
