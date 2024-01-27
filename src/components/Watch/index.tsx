import { useEffect, useRef, useState } from 'react';

function WatchTimer() {
  const [second, setSencond] = useState<number>(0);
  const interval = useRef<any>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setSencond((prevSecond) => prevSecond + 1);
      console.log('SetInterval is running!');
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return <div>Watch: {second}</div>;
}

const Watch = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Set visible interval</button>
      {visible ? <WatchTimer /> : null}
    </div>
  );
};

export default Watch;
