"use client";

import { useCounterStore } from "@/stores/counter";

const Counter = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  );

  return (
    <div>
      Count: {count}
      <hr />
      <div>
        <button type="button" onClick={() => void incrementCount()}>
          Increment Count
        </button>
      </div>
      <div>
        <button type="button" onClick={() => void decrementCount()}>
          Decrement Count
        </button>
      </div>
    </div>
  );
};

export default Counter;
