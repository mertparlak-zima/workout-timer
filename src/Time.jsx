import { useEffect } from "react";

export default function Time({ setTime, formatTime, time }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        setTime(formatTime(new Date()));
      }, 1000);

      return () => clearInterval(id);
    },
    [formatTime, setTime]
  );

  return <time>For your workout on {time}</time>;
}
