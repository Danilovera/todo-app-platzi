import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  border-radius: 25px;
  background-color: white;
  margin: auto;
`

export const ButtonAgg = () => {
  return (
    <div>
        <StyledButton><FontAwesomeIcon icon={faPlus} /></StyledButton>
    </div>
  )
}
