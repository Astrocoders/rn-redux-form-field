import React from 'react'
import {
  Input,
  Label,
  Item,
} from 'native-base'
import { Field as ReduxField } from 'redux-form/immutable'

function Field({input, label, type, meta, labelStyle = {}, last = false, ...props}){
  return (
    <Item floatingLabel last>
      <Label
        style={labelStyle}
      >
        {label}
      </Label>
      <Input
        {...input}
        {...props}
      />
    </Item>
  )
}

export default function ReduxFieldContainer(props){
  return (
    <ReduxField
      {...props}
      component={Field}
    />
  )
}
