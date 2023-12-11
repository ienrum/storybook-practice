import { useState } from "react";

interface Props {
  onIncrease?: () => void;
}

const Counter = ({ onIncrease }: Props) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    onIncrease && onIncrease();
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increment</button>
    </div>
  );
};

export default Counter;
