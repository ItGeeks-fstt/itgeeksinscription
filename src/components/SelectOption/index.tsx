import { useState } from 'react';
import * as C from './styles';

type Props = {
    title: string;
    description: string;
    more:string;
    icon: string;
    selected: boolean;
    onClick: () => void;
    
}



export const SelectOption = ({title, description, icon, selected, onClick,more}: Props) => {
    const [showMore,setshowMore]=useState(false);
    const showMoreHandler=(e:React.MouseEvent<HTMLSpanElement, MouseEvent>)=>
{
    e.stopPropagation();  
    setshowMore(prv=>!prv);
}
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.DescriptionDiv>{description}&nbsp;
            
        {more!=='' && <>
                {!showMore  && <C.More onClick={showMoreHandler} >show more</C.More>}
                {showMore && <C.DescriptionSpan>{more}</C.DescriptionSpan>}
                {showMore && <C.More onClick={showMoreHandler} >&nbsp;show less</C.More>}
        </>}
                
                
                </C.DescriptionDiv>
            </C.Info>
        </C.Container>
    );
}