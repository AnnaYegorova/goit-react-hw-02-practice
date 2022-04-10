
import styled from '@emotion/styled';
export const SideBarContainer = styled.div`
  height: 100vh;
  background-color: #fff;
  width: 320px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const UserMenu = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  :hover {
    background-color: lightgray;
  }
`;

export const Avatar = styled.div`
  display: inline-flex;
  border-radius: 50%;
  border: 8px solid ${p => (p.isOnline ? 'green' : 'red')};
`;
export const Username = styled.p``;