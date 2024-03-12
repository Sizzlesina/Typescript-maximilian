/** @format */

import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className='control'>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}

export default Input;
