# Controlled Form w/new context

Check out the [final result](https://2pl30j8mnj.codesandbox.io/)
to see the expected look and behavior.

Convert the existing app to use the new context api.

## Tips

- remove `getChildContext` and `childContextTypes` on the form
- create a new file for your context object and use `React.CreateContext` to make and export one
- make use of your `Context.Provider` in `ControlledForm` to put the form state and handlers in context
- remove `contextTypes` from all components and use the `Context.Consumer` instead (remember it uses a render prop!)