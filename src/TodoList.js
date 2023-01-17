import React from 'react'
import styled from 'styled-components'

const ContainerUlStyled = styled.div`
background-color: white;
width: 50%;
margin:  2% 25% ;
border-radius: 25px;

`
const UlStyled = styled.ul`
list-style: none;

`

export const TodoList = (props) => {
  return (
    <ContainerUlStyled>
        <UlStyled>
        {props.children}
        </UlStyled>
    </ContainerUlStyled>
  )
}
