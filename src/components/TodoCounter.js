
import React from 'react'
import styled from 'styled-components'

const DivStyled = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5%;
`

const CounterTareas = styled.div`
width: 25%;
background-color: white;
border: solid black 4px;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;

`

const TextStyled = styled.h1`
color:#cf41ae ;

`

const SpanStyled = styled.span`
color:#000;

`



const TodoCounter = ({total,completados}) => {
  return (
    <DivStyled>
      <CounterTareas>
        <TextStyled>
            Tareas completadas
            <SpanStyled> {completados} </SpanStyled>
            de
            <SpanStyled> {total} </SpanStyled>
        </TextStyled>
    </CounterTareas>
    </DivStyled>
  )
}

export default TodoCounter