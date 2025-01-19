import Display from "./Display";
import Button from "./Button";
 

const Counter = ({ incrementor, decrementor, counterValue }) => {
     


    return (
        <div> 
          <Display counterValue={counterValue} />
          <Button incrementor={incrementor} decrementor={decrementor} />
        </div>
    );
}

export default Counter;

/** Counter - (Child of App): Renders the Display and Button components. */