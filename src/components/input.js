import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-text-mask';

import FormGroup from './formGroup';
import InputButton from './inputButton';

import checkmark from '../assets/checkmark.svg';
import xmark from '../assets/xmark.svg';

const StyledInputMask = styled(InputMask)`
  display: flex;
  flex-grow: 1;
  font-family: 'Open Sans';
  padding: 0.5rem 18% 0.5rem 1rem;
  width: 100%;
  color: ${props => props.theme.main};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main};
  outline: none;
  font-size: ${props => (props.readOnly ? '1.5rem' : '1rem')};
  cursor: ${props => (props.readOnly ? 'default' : 'inherit')};
`;

const StyledObject = styled.object`
  height: 18px;
`;

const maskEntryRule = '[a-z|0-9]';

const createMask = (entryAmount, amountPerEntry) => {
  const rule = new RegExp(maskEntryRule);
  const mask = [];

  for (let x = 0; x < entryAmount; x++) {
    for (let y = 0; y < amountPerEntry; y++) mask.push(rule);
    if (x < entryAmount - 1) mask.push(' ');
  }

  return mask;
};

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mask: createMask(props.entryAmount, props.amountPerEntry),
      valid: false
    };
  }

  onChange = ({ target: { value } }) => {
    const rule = new RegExp(
      `${maskEntryRule}{${this.props.amountPerEntry}}`,
      'g'
    );

    const match = value.match(rule);
    const valid =
      match !== null ? match.length === this.props.entryAmount : false;

    this.setState({ valid });

    if (valid) this.props.onChange(value);
    else this.props.onChange('');
  };

  render() {
    return (
      <FormGroup>
        <StyledInputMask
          mask={this.state.mask}
          onChange={this.onChange}
          guide
          showMask
          value={this.props.value}
          readOnly={this.props.readOnly}
        />
        {!this.props.readOnly && (
          <InputButton disabled={!this.state.valid} valid={this.state.valid}>
            <StyledObject
              type="image/svg+xml"
              data={this.state.valid ? checkmark : xmark}
            />
          </InputButton>
        )}
      </FormGroup>
    );
  }
}
