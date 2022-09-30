import styled from 'styled-components'

export const Container = styled.div`
height: 100vh ;
width: 100vw;
`

export const Area = styled.div`
width: 80vw;
margin: auto ;
height: 100vh ;
@media only screen and (max-width: 600px) {
    {
        width: 100vw;
   }
 }
`
export const Steps = styled.div`
width: 100% ;
display: flex ;
`
export const Sidebar = styled.div`
width: 50% ;
border-right: 1px solid rgb(91, 24, 153);
`
export const Page = styled.div`
width: 100% ;

`