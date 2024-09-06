import React, { useState, useEffect } from 'react';

const CountUp = ({ start = 0, end = 100, duration = 3000 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start >= end) return;

    // Calculate how much to increment based on the duration and desired end value
    const increment = (end - start) / (duration / 30);

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + increment; // Increment count by calculated value
        } else {
          clearInterval(interval); // Stop when reaching the end
          return end;
        }
      });
    }, 30);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [start, end, duration]);

  return (
    <div className="text-5xl font-bold text-center text-brand">
      {Math.floor(count)}+
    </div>
  );
};

export default CountUp;
