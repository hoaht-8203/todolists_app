import React from 'react';

interface TitleProps {
  handleClickTitle: (value: any) => void;
}

const Title = (props: TitleProps) => {
  console.log(props);

  return <h1 className="text-2xl font-bold">To do list typescript</h1>;
};

export default React.memo(Title);
