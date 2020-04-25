import React from 'react';
import Link from 'next/link';
import { api } from 'styleguide/components';

const Home = () => {
  return (
    <div>
      <h1>Hello Prospect</h1>
      <Link href='start'>
        <a>Start hello {api()}</a>
      </Link>
    </div>
  );
};

// Home.getInitialProps = async (ctx) => {
//   console.log('getInitialProps');
//   console.log(ctx);

//   return {};
// };

// export async function getStaticProps(context) {
//   console.log('getStaticProps');
//   console.log(context);
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps(context) {
  console.log('getServerSideProps Home');
  console.log(context);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
