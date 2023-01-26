import React  from 'react'
import styled from 'styled-components'
import {  } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const InputContainer = styled.div`
margin-top: 2%;
display: flex;
justify-content: center;
align-items: center;
height: 40px;
border-radius:25px;
background-color: white;
width: 25%;
margin-left: 38%;
height: 50px;
color: #cf41ae;
`
const InputStyled = styled.input`
border: none;
border-radius:25px;
color: black;
width: 100%;
height: 100%;
margin-left: 10px;
&:focus{
  outline: none;
}
`

export default function TodoSearch({search, setSearch}) {
  

  function onSearchValueChange(e){
    console.log(e.target.value)
    setSearch(e.target.value)

  }


  return (
    <InputContainer>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <InputStyled
         placeholder='busca tu tarea '
         onChange={onSearchValueChange}
         value={search}
         />
         
    </InputContainer>
  )
}
