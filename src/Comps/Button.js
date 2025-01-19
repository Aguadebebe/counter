

const Button = ({ incrementor, decrementor }) => {
    return (
        <div>
           <button  className="button" onClick={() => incrementor()}>Increment</button>
           <button  className="button" onClick={() => decrementor()}>Decrement</button>
        </div>
    );
}

export default Button;

/** Button - (Child of Counter): Increments( adds countValue by 1 ) and Decrements( subtracts countValue by 1 ). */