# @astrocoders/rn-redux-form-field
A Field wrapper using Native Base components

# Install
```
yarn add @astrocoders/rn-redux-form-field
```

# Usage
```js
function SomeForm({...}){
  return (
    <Form>
      <Field
        name="email"
        keyboardType="email"
        labelStyle={{fontSize: 16}}
      />
    </Form>
  )
}

export default compose(
  reduxForm({
    form: 'someForm'
  })
)(SomeForm) 
```
