import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(getCurrentTime());

  function getCurrentTime(): string {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const isAM = hours < 12;

    hours = hours % 12 || 12; // Convert 0 to 12
    const hourStr = hours.toString().padStart(2, '0');
    const amPm = isAM ? 'AM' : 'PM';

    return `${hourStr}:${minutes} ${amPm}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={"px-2.5"}>
      {time}
    </div>
  );
};

export default Clock;
