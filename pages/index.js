import React from "react";
import { getUser } from "../utils/getUser";

const Index = ({ repos, userJson }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Olá, eu sou o Bruno Teixeira</h1>
      <h3 className="text-2xl">GitHub Status</h3>
      <span>
        Repositórios: {userJson.public_repos}, Seguidores: {userJson.followers}
      </span>
      {repos.map(({ id, full_name, language }) => (
        <div key={id} className="rounded bg-gray-300 my-4 p-4 hover:shadow-md">
          <h1 className="font-bold text-lg">{full_name}</h1>
          <span>{language}</span>
        </div>
      ))}
      <span>{repos.length}</span>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { userJson, repos } = await getUser("brunosann");

  return {
    props: {
      repos,
      userJson,
    },
  };
}

export default Index;
