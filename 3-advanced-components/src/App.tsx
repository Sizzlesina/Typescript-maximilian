/** @format */

import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input label='Your name' id='name' type='text' value={"Sina"} disabled />
      <Input label='Your age' id='age' type='number' />
      <p>
        <Button el='button'>A Button</Button>
      </p>
      <p>
        <Button el='anchor' href='https://google.com'>
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
