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

@ In some case we may need to accept a prop in the component but we wont pass the value to that prop everywhere so what can we do?:
++ Example:
type InfoBoxProps = {
  severity : "high" | "low" | "medium";
  mode : "mode1" | "mode2";
  children : ReactNode;
}
function InfoBox({severity,mode,children} : InfoBoxProps){
  if(mode === "mode1"){
    return (
      ...
    )
  }
  if(mode === "mode2"){
    return (
      <h1 className={`class-${severity}`}>Hello world</h1>
    )
  }
}

function MainComponent(){
  if(condition){
    return (
      <InfoBox mode="mode1">This is for the first condition</InfoBox>
    )
  }
  if(condition){
    return (
      <InfoBox mode="mdoe2" severity="high">This is for the second condition</InfoBox>
    )
  }
}
! In the first condition of the main component we dont need to pass the severity prop to the InfoBox component but in the second condition we will pass in the prop so in the fisrt one we may get an error

? So whats the solution to this problem?
++  When we create the custom type of the props inside the InfoBox we must use this syntax for the severity prop : 
type InfoBoxPorps = {
  severity?: "high" | "low" | "medium";
}
@ Or we can do this:
type InfoBoxProps = {
  severity : "high" | "low" | "medium" | undefined;
}

@ But this way is not good (So whats the best practice?):
++ Take a look at this syntax:
type FirstModeProps = {
  mode : "mode1";
  children : ReactNode;
}
type SecondModeProps = {
 mode : "mode2";
 severity : "high" | "low" | "medium";
  children : ReactNode
}
type MyComponentProps = FirstModeProps | SecondModeProps;

function MyComponent(props : MyComponentProps){
  const {children,mode} = props;
  if(mode "mode1"){
    return (
      ...
    )
  }
  const {severity} = props;
  return (
    <h1 className={`class-${severity}`}>Hello World!</h1>
  )
}
! Now we can pass in the severity prop whenever we in the mode2 and dont pass it when we in the mode1

*/
