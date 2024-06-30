import { useRef } from "react";
import { FormGroup } from "../FormGroup";

export function App(){
    const emailRef = useRef()
    return (
      <>
        <form onSubmit={onSubmit}>
          <FormGroup></FormGroup>
        </form>
      </>
    );
}