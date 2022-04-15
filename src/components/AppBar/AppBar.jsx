import { SideBarContainer } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
export const AppBar = ({ user, onClose }) => {
  return (
    <SideBarContainer>
      <UserMenu user={user} />
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </SideBarContainer>
  );
};
