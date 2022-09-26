import styled  from "styled-components";


export const Container = styled.div<{selected : boolean;}>`
    display: flex;
    border: 2px solid ${props => props.selected ? 'rgb(91, 24, 153)' : 'rgb(208, 180, 235)'}; /* rgb(177, 113, 238) */
    margin-top: 30px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    &:hover {
        border: 2px solid rgb(91, 24, 153);
    }
   @media (max-width: 768px) {
    flex-direction: column;
   gap: 2rem;
   }
    background-color: rgb(235, 235, 235);
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(91, 24, 153);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;
const Description = `
font-size: 14px;
line-height: 1.5;

`
export const DescriptionDiv = styled.div`
  ${Description}
   
`;
export const DescriptionSpan = styled.span`

${Description} 
`;
export const More =styled.span`
    font-size: 14px;
    color:rgb(91,24,153);
`;