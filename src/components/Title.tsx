import React from 'react';

const Title = () => {
  console.log('Title had re-render');
  return <h1 className="text-2xl font-bold">To do list typescript</h1>;
};

export default React.memo(Title);
