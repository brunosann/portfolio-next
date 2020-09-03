import React from "react";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="sm:my-20 my-10">
        <h2 className="text-4xl pl-10 leading-8 sm:leading-4">
          Olá, eu sou o Bruno Teixeira
        </h2>
        <h1 className="text-5xl pl-10 font-bold leading-10 sm:leading-0 my-8">
          Full Stack Developer
        </h1>
        <div className="relative w-64 px-10 py-6 border border-pink rounded-md mt-4">
          <h3 className="absolute top-0 font-bold -mt-5 bg-pink py-1 px-3 text-white text-xl">
            Contato
          </h3>
          <ul className="flex justify-between text-5xl">
            <li>
              <a
                href="https://www.linkedin.com/in/bruno-teixeira-920661142/"
                rel="noopener"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/brunosann" rel="noopener">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Bruno_ts13" rel="noopener">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
