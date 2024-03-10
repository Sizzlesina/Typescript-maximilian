/*
@ Start using Redux in typescript:
++ 1 : npm i @reduxjs/toolkit react-redux 
++ 2 : Create a store folder inside the src
++ 3 : Create a store file and use this syntax:
const store = configureStore({
  reducer:{
    (custom name) : import the slicer file
  }
})

++ 4 : Create a slice file and use this syntax:
export const sliceName = createSlice({
  name : "Could be any name",
  initialState,
  reducers:{
    (methods that we wanna use like remove or add or whatever)
  }
})

@ How to write the initialState and the type for them?
type ItemsType ={
  name : string;
  price : number;
}
! Any key value that the items need (Its a state full of objects)
type SliceState = {
  items : ItemsType[];
};
const initialState : SliceState = {
  items : [];
}
! Now we can use the states 

@ How to write the reducer methods:
- Every reducer method will get an state and action parameter same as the reducer function

- We should use another special type for the action parameter and thats "PayloadAction" type

-In the action "PayloadAction" type we can use a <> and then if our payload contains a payload then write the properties there

- We should use the mutable syntax for this type of reducers

*/