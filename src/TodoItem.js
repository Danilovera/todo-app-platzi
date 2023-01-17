import React from "react";
import styled from "styled-components";
import './App.css';

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
          props.completed?
          <span className="verde">√</span>
          :
          <span>√</span>
        }
      </div>
      <div>
        <p>
          {props.text}
        </p>
      </div>
      <div>
        <span>X</span>
      </div>
    </LiStyled>
  );
}
