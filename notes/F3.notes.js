/** @format */

{/* prettier-ignore */}

/*
@ Advance prop component rendering using props:
++ - When we want to use a component inside another component but we want to render it conditionaly we can use this syntax:


@ In the main component:

function MainComponent() {
let componentRender = ReactNode;
if(condition){
  componentRender = <MyComponent />
}

  return (
  <>
  {componentRender}
  <h1>Hello World!</h1>  
  </>
  )
}

*/
