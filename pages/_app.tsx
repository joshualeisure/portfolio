import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { AnimatePresence } from 'framer-motion';

import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute='class'>
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white shadow-custom-light dark:custom-dark dark:bg-dark-500 lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:custom-darkflex dark:bg-dark-500 lg:col-span-9 rounded-2xl">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default MyApp;
