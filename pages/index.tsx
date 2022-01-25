// import { services } from '../data';

import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
// import {
//   GetServerSideProps,
//   GetServerSidePropsContext,
//   GetStaticPropsContext
// } from 'next';

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        I am currently working on learning different front-end technologies like
        Tailwind and NextJs (which this website is made from) and back-end technologies such as Java and Python. I have 1+ years
        of experience as of now in mobile and web development. I began my
        journey in January 2021!
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer:</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
//   const res = await fetch ('http://localhost:3000/api/services')
//   const data = await res.json()
//   return {
//     props: {
//       services: data.services
//     }
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   return {
//     props: {
//       services: data.services
//     }
//   };
// };
