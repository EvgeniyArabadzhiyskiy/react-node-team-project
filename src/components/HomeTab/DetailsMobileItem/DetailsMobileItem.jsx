import { forwardRef } from "react";
import { GoSettings } from 'react-icons/go';
import ContextMenu from "components/ContextMenu";
import { StyledList, SumText } from "./DetailsMobileItem.styled";
import { SettingBtn } from "components/ContextMenu/ContextMenu.styled";
import { sendMsg } from "helpers/formAddTransaction/sendMessage";

const DetailsMobileItem = forwardRef(({ operationDate, typeOperation, category,
    comment, amount, itemBalance, isLongAmount, isLongBalance, onContextMenu,
    isOpenMenu, isDelete, onEdit, onClearId, onDelete }, ref) => {

    const bodyTransaction = 
    <span onClick={() => sendMsg(isLongBalance, itemBalance)}>
        {isLongBalance ? "Click" : itemBalance}
    </span>
          
    const content = ref 
    ? <li ref={ref}>Balance {bodyTransaction}</li>
    : <li>Balance {bodyTransaction}</li> ;

    return (
        <StyledList borders={typeOperation}>
        <li><SettingBtn onClick={onContextMenu} aria-label="settings"><GoSettings /></SettingBtn></li>
        <li>Date <span>{operationDate}</span></li>
        <li>Type <span>{typeOperation}</span></li>
        <li>Category <span>{category}</span></li>
        <li>Comment <span>{comment}</span></li>
        
        <li> Sum
            <SumText textColor={typeOperation} onClick={() => sendMsg(isLongAmount, amount)}>
              {isLongAmount ? "Click" : amount}
            </SumText>
        </li>
        {content}
    
        <ContextMenu
            isDelete={isDelete}
            isOpenMenu={isOpenMenu}
            
            onEdit={onEdit}
            onDelete={onDelete}
            onClearId={onClearId}
            onContextMenu={onContextMenu}
        />
    
        </StyledList>
    );
})
 
export default DetailsMobileItem;