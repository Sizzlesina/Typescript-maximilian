/*
@ Accepting props in React components:
++ 1 :
function MyComponent({name,id}: {
  name: string; 
  id:number
}) {
  return <h1>My Component</h1>
}

++ 2 :
type MyComponentProps = {
  name : string;
  id: number;
};
function MyComponent({name,id}:MyComponentProps){
  return <h1>My Component</h1>
}

++ 3 : 
interface MyComponentProps {
  name: string;
  id : number;
}
function MyComponent({name,id}:MyComponentProps){
  return <h1>My Component</h1>
}

@ How to accept children in the props (What is the type of a children prop?):
++ We can use a special type that can be used in React which is called ReactNode

interface MyComponentProps{
  name: string;
  id: number;
  children : ReactNode;
}
function MyComponent({name,id,children}:MyComponentProps){
  return <h1>My Component</h1>
}

! ReactNode will be imported from 'react'
++ So its better to write "type" keyword before the imported ReactNode:
import {type ReactNode} from 'react'


++ Amother special React type this time using "type" keyword:
import {type PropsWithChildren} from 'react';
type MyComponentProps = PropsWithChildren<{
name:string;
id: number;
}>
*/