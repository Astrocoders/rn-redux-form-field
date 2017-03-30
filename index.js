import React from 'react'
import {
  Input,
  Label,
  Item,
} from 'native-base'
import {
  compose,
  pure,
} from 'recompose'
import { Field as ReduxField } from 'redux-form/immutable'

function Field({
  input, 
  label, 
  type, 
  meta, 
  labelStyle = {}, 
  ...props
}){
  const hasError = meta.touched && Boolean(meta.error)

  return (
    <Item
      floatingLabel={props.floatingLabel}
      stackedLabel={props.stackedLabel}
      last={props.last}
      error={hasError}
      success={!hasError}
    >
      <Label
        style={labelStyle}
      >
        {label} {hasError ? `(${meta.error})` : ''}
      </Label>
      <Input
        {...input}
        {...props}
        value={input.value || props.defaultValue}
      />
    </Item>
  )
}

function ReduxFieldContainer(props){
  return (
    <ReduxField
      {...props}
      component={Field}
    />
  )
}

export default compose(
  pure,
)(ReduxFieldContainer)
