import styled from 'styled-components'

export const Container = styled.div`
margin:auto;
display:flex;
justify-content: space-between;
width: 100%;
border-bottom: 1px solid rgb(91, 24, 153) ;
h1{
    padding: 30px 0 0 0 ;
    color: rgb(91, 24, 153);
    font-size:150%;
    
}
p{
    padding: 5px 0 10px 40px ;
    font-size:80%;
}


.img{
    align-self:center;
}
.img img{
    height:70px;
    border-radius: 50%;
}
@media only screen and (max-width: 600px) {
    {
     width:80vw;
   } 
 }
 @media only screen and (min-width: 600px) {
    .img img{
        height:100px;
    }
 }

`