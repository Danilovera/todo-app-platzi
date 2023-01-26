import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import '../styles/index.css';

const LiStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
`;

export default function TodoItem(props) {
  return (
    <LiStyled>
      <div>
        {
          props.completed
          ?
          <span className="verde"><FontAwesomeIcon icon={faCircleCheck}  /></span>
          :
          <span><FontAwesomeIcon icon={faCircleCheck} onClick={props.estadoTarea} /></span>
        }
      </div>
      <div>
        <p>
          {props.text}
        </p>
      </div>
      <div>
        <span onClick={props.delete}>X</span>
      </div>
    </LiStyled>
  );
}
