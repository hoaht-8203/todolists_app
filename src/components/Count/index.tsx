import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Count = () => {
  const [width, setWidth] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      setWidth(sectionRef.current?.offsetWidth || 0);
    };
    measure();

    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('resize', measure);
    };
  }, []);

  console.log('render');
  return (
    <div>
      <section ref={sectionRef} className="bg-red-500">
        Content
      </section>
      {width > 300 && <div className="bg-yellow-500">Please resize screen smaller</div>}
    </div>
  );
};

export default React.memo(Count);
