import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <h5 className="my-2 text-xl font-bold">
            Bachelors of science in Kinesiology
          </h5>
          <p className="font-semibold">Purdue University (2017-2020)</p>
          <p className="my-3">
            After finishing my degree, I decided that it wasn&apos;t the correct fit.
            I quickly switched to software development which has been the best
            decision I have ever made.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <h5 className="my-2 text-xl font-bold">
            Full-Stack Mobile & Web Developer
          </h5>
          <p className="font-semibold">January 2021 - Present</p>
          <p className="my-3">
            At SpinSpire, we create applications for a variety of clients, using
            technology like react, svelte, react native, nodeJs, express, etc...
            to create mobile and web applications.
          </p>
        </motion.div>
      </div>

      {/* languages */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 font-bold text-2x1">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        {/* tools */}
        <div>
          <h5 className="my-3 font-bold text-2x1">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
