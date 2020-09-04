import React from "react";

const Stats = ({ userJson }) => {
  return (
    <div className=" mt-10 text-center">
      <h2 className="text-4xl text-pink">Meus Códigos / Contribuições</h2>
      <h3 className="text-2xl">GitHub Status</h3>
      <span>
        Repositórios: {userJson.public_repos}, Seguidores: {userJson.followers}
      </span>
    </div>
  );
};

export default Stats;
