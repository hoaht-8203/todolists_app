import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const Input = forwardRef((props, ref) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const type = () => {
    let numberIndex = 0;
    const initalString = 'Hoang Trung Hoa';
    inputRef.current?.focus();

    let interval: any = setInterval(() => {
      console.log('Interval is running');

      setValue(initalString.slice(0, numberIndex));

      if (numberIndex === initalString.length) {
        return clearInterval(interval);
      }

      numberIndex++;
    }, 100);
  };

  useImperativeHandle(ref, () => {
    return {
      type
    };
  });

  return (
    <div>
      <input
        className="rounded-md px-2 py-2 font-bold focus:outline-none"
        type="text"
        placeholder="Type Something..."
        value={value}
        ref={inputRef}
        onChange={() => {}}
      />
    </div>
  );
});

const AutoInput = () => {
  const funcInputRef = useRef<{ type: () => void }>({ type: () => {} });

  const handleClick = () => {
    console.log(funcInputRef.current.type());
  };

  return (
    <div className="m-5">
      <Input ref={funcInputRef} />
      <button
        className="mt-2 rounded-md bg-green-400 px-1 py-2 text-sm font-medium text-white"
        onClick={handleClick}>
        Click to see magix
      </button>
    </div>
  );
};

export default AutoInput;
