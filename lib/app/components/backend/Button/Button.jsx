import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
background-color: #0085ba;
border: none;
border-radius: 4px;
padding: 1em 2em;
color: #fafafa;
font-size: 1.2em;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
cursor: pointer;
&:hover {
	background-color: #0c8fc3;
}
`;

const Button = (props) => {
  return (
    <Container onClick={props.handler}>
      {props.text}
    </Container>
  );
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired
};

export default Button;
