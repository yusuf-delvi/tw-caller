# tw-caller



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type     | Default                                                           |
| -------------- | --------------- | ----------- | -------- | ----------------------------------------------------------------- |
| `btnText`      | `btn-text`      |             | `string` | `'Call Us Now!'`                                                  |
| `callEndpoint` | `call-endpoint` |             | `string` | `''`                                                              |
| `calleNumber`  | `calle-number`  |             | `string` | `'+917676424299'`                                                 |
| `logoSrc`      | `logo-src`      |             | `string` | `'https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png'` |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `closed` |             | `CustomEvent<any>` |
| `opened` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [call-dialog](../call-dialog)
- [call-btn](../call-btn)

### Graph
```mermaid
graph TD;
  tw-caller --> call-dialog
  tw-caller --> call-btn
  style tw-caller fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
