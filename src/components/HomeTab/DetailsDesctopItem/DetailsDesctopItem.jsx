import { forwardRef } from "react";
import { GoSettings } from 'react-icons/go';
import ContextMenu from "components/ContextMenu";
import { StyledItem } from "./DetailsDesctopItem.styled";
import { SettingBtn } from "components/ContextMenu/ContextMenu.styled";
import { CategoryName, SumText } from "components/HomeTab/HomeTabDesctop/HomeTabDesctop.styled";
import { sendMsg } from "helpers/formAddTransaction/sendMessage";

const DetailsDesctopItem = forwardRef(({ operationDate, typeOperation, category,
    comment, amount, itemBalance, isLongAmount, isLongBalance, onContextMenu,
    isOpenMenu, isDelete, onEdit, onClearId, onDelete }, ref) => {

  const bodyTransaction = (
    <>
      <CategoryName>
        <SettingBtn onClick={onContextMenu} aria-label="settings">
          <GoSettings />
        </SettingBtn>
      </CategoryName>
      
      <CategoryName>{operationDate}</CategoryName>
      <CategoryName>{typeOperation}</CategoryName>
      <CategoryName>{category}</CategoryName>
      <CategoryName>{comment}</CategoryName>

      <SumText textColor={typeOperation} onClick={() => sendMsg(isLongAmount, amount)}>
        {isLongAmount ? "Click" : amount}
      </SumText>

      <CategoryName onClick={() => sendMsg(isLongBalance, itemBalance)}>
        {isLongBalance ? "Click" : itemBalance}
      </CategoryName>
            
      <ContextMenu
        isDelete={isDelete}
        isOpenMenu={isOpenMenu}
        
        onEdit={onEdit}
        onDelete={onDelete}
        onClearId={onClearId}
        onContextMenu={onContextMenu}
      />
    </>
  );
    
  const content = ref 
  ? <StyledItem ref={ref}>{bodyTransaction}</StyledItem>
  : <StyledItem >{bodyTransaction}</StyledItem>;
    
  return content;
})
 
export default DetailsDesctopItem;