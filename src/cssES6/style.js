import styled from 'styled-components';

export const Hell = styled.div`
    font-size:50px;
    color:green;
    .btn{
      background-color:yellow;
      span{
          color:#fff;
          &.change{
            color:red
          }
          &:hover{
            color:green;
          }
          &::after{
            content:"aaa"
          }

        }
    }
    /* .change{
      color:red;
    } */
  `
export const Pcolor = styled.h2`
    text-decoration:underline;
`