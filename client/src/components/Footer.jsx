import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <!--Footer container-->
  

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 p-20">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" class="hover:underline">Foodify™</Link>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="#" class="hover:underline m-4 md:m-6">About</Link>
        </li>
        <li>
            <Link href="#" class="hover:underline m-4 md:m-6">Privacy Policy</Link>
        </li>
        <li>
            <Link href="#" class="hover:underline m-4 md:m-6">Licensing</Link>
        </li>
        <li>
            <Link href="#" class="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  );
};

export default Footer;
