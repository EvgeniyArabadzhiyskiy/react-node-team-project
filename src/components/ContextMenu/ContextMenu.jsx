import { RxCross2 } from 'react-icons/rx';
import { CloseBtn, DeleteBtn, Menu } from './ContextMenu.styled';

const ContextMenu = ({ isOpenMenu, isDelete, onContextMenu, onEdit, onDelete, onClearId }) => {
    
  return (
    <Menu isOpenMenu={isOpenMenu} isDelete={isDelete}>
      <CloseBtn onClick={onContextMenu} aria-label="close"><RxCross2 /></CloseBtn>
      <DeleteBtn onClick={onEdit}>EDIT</DeleteBtn>
      {isDelete && <DeleteBtn onClick={onDelete}>DELETE</DeleteBtn>}
      {!isDelete && <DeleteBtn onClick={onClearId}>CANCEL</DeleteBtn>}
    </Menu>
  );
};

export default ContextMenu;
