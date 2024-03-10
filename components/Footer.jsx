import React from 'react';

const Footer = () => (



<footer className="bg-white dark:bg-gray-900 px-12 py-16">

  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-7">
      <div className="md:max-w-md text-start lg:col-span-3">
        <div className="grid">
          <a href="/">
            {/* <Image src={Logo} alt="GDSC Logo" className="w-14 h-auto" /> */}
          </a>
          <span
            className="text-xl font-bold tracking-wide text-gray-800 dark:text-white"
            >MJCT Management & Services </span>
          <span className="tracking-wide text-gray-700 dark:text-gray-100"
            >Decision Support System</span>
        </div>

        <div className="mt-4 lg:max-w-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Together, we discover future.
          </p>

          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            Located in 1041 Doña Casimiro Street, Maypajo, Caloocan, 1400 Metro Manila
          </p>

          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            Need Help? Contact Us: 
            <a href="mailto:gdsc.ue@gmail.com" className="hover:underline pl-2">
             mjctdesirehd@gmail.com</a>
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 justify-end">

        <div>
          <p
            className="font-semibold tracking-wide text-gray-800 dark:text-gray-300">
            Home
          </p>
          <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-400">
            <li>
              <a
                href="#home-welcome"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Welcome</a
              >
            </li>
            <li>
              <a
                href="#home-events"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Events</a
              >
            </li>
            <li>
              <a
                href="#home-partners"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Partners and Sponsors</a
              >
            </li>

            <li>
              <a
                href="#home-email"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Email us</a
              >
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold tracking-wide text-gray-800 dark:text-white">
            About us
          </p>
          <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-400">
            <li>
              <a
                href="about#about-mission"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Mission</a
              >
            </li>
            <li>
              <a
                href="about#about-vision"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Vision</a
              >
            </li>
            <li>
              <a
                href="about#about-igmakadima"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Igma Kadima</a
              >
            </li>

            <li>
              <a
                href="about#about-gdscchapters"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Other GDSC Chapters</a
              >
            </li>
          </ul>
        </div>

        <div>
          <p
            className="font-semibold tracking-wide text-gray-800 dark:text-gray-100">
            Events
          </p>
          <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-400">
            <li>
              <a
                href="events#featured-event"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Featured Event</a
              >
            </li>

            <li>
              <a
                href="events#all-events"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >All Events</a
              >
            </li>
          </ul>
        </div>

        <div>
          <p
            className="font-semibold tracking-wide text-gray-800 dark:text-gray-100">
            Team
          </p>
          <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-400">
            <li>
              <a
                href="about#about-gdscchapters"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Executive Board</a
              >
            </li>
            <li>
              <a
                href="about#about-gdscchapters"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Operations Dept</a
              >
            </li>

            <li>
              <a
                href="about#about-gdscchapters"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Technology Dept</a
              >
            </li>

            <li>
              <a
                href="about#about-gdscchapters"
                className="transition-colors duration-300 hover:text-purple-950 dark:hover:text-purple-500"
                >Creatives Dept</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />

    <div className="sm:flex sm:items-center sm:justify-between">
      <p className="text-sm text-gray-600  my-auto sm:text-start dark:text-gray-400">
        MJCT Management & Services - Decision Support System
      </p>

      <div className="flex mt-4 sm:justify-center items-center my-auto sm:mt-0 gap-4">
        <a
          href="https://www.facebook.com/MjctManagementServices"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <title>Facebook</title>
          <svg
            className="w-5 h-5 transition-colors duration-300 hover:text-purple-700 dark:hover:text-purple-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            ><path
              d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
            ></path></svg
          >
        </a>

        <a
          href="https://github.com/KurutoDenzeru/MJCT-Decision-Support-System"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <title>Github</title>
          <svg
            className="w-5 h-5 transition-colors duration-300 hover:text-purple-700 dark:hover:text-purple-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            ><path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            ></path></svg
          >
        </a>
      </div>
    </div>
  </div>
</footer>



);

export default Footer;
