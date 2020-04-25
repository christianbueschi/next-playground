import React from 'react';

const Start = () => {
  return <div>Start</div>;
};

Start.getInitialProps = async (ctx) => {
  console.log('getInitialProps');
  console.log(ctx);

  return {};
};

export default Start;
