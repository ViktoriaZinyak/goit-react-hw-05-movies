import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
  width: 180px;
  height: 340px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 80%;
`;

export const Discrip = styled.p`
  margin: 0;
`;
