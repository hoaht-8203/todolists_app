import React, { createContext, useContext, useId, useState } from 'react';

interface ThemeType {
  theme: {
    color: 'light' | 'dark';
  };
  onChangeTheme: (color: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
});

const Welcome = () => {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' });

  const onChangeTheme = (color: 'light' | 'dark') => {
    console.log(color);
    setTheme((prev) => {
      return { ...prev, color };
    });
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        <Form />
        <Label />
      </ThemeContext.Provider>
    </div>
  );
};

const Label = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const id = useId();

  return (
    <div className="m-3">
      <input
        type="checkbox"
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light');
        }}
        id={id}
      />
      <label htmlFor={id}>Use dark mode</label>
    </div>
  );
};

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
};

const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`m-3 rounded-lg p-5 ${theme.color === 'light' ? 'bg-white text-black' : 'bg-black text-white'} `}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Button = ({ children }: { children: React.ReactNode }) => {
  console.log('render button');

  return <button className="mr-1 rounded-md bg-gray-400 px-2 py-1">{children}</button>;
};

export default Welcome;
