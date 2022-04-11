import styled from '@emotion/styled';
export const MenuContainer = styled.div`
  position: relative;
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
export const PointsPopover = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  transform: translateX(100%);
  height: 100%;
  background-color: grey;
  padding: 4px;
`;

export const PointsLabel = styled.p`
  font-size: 10px;
  line-height: 0.3;
`;

export const Points = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 0.3;
  color: ${p => (p.variant === 'total' ? 'orange' : 'red')};
`;
