import React from "react";

const Repos = ({ repos }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 md:my-10 mx-2">
      {repos.map(({ id, full_name, language }) => (
        <div key={id} className="rounded-md bg-white  p-4 hover:shadow-md">
          <a
            href={`https://github.com/${full_name}`}
            className="font-bold text-lg"
          >
            {full_name}
          </a>
          <span className="block">{language}</span>
        </div>
      ))}
    </div>
  );
};

export default Repos;
