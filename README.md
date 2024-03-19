# Contact Book

Refactor the
[previous homework](https://github.com/Iryna-Holova/goit-react-woolf-hw-04-phonebook)
code by adding state control using the
[Redux Toolkit library](https://redux-toolkit.js.org/). Let the Redux state look
like this.

```js
{
  contacts: [],
  filter: ""
}
```

- Create a repository with `configureStore()`
- Use `createSlice()`
- Create actions to save and delete a contact, and update the filter
- Link React-components to Redux-logic with react-redux hooks
- Use the Redux Persist library to save an array of contacts to local storage
