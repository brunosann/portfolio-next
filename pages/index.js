import React from "react";
import PageHead from "../components/PageHead";
import { getUser } from "../utils/getUser";
import Header from "../components/Header";

const Index = ({ repos, userJson }) => {
  return (
    <React.Fragment>
      <PageHead />
      <div className="container mx-auto">
        <Header />
        <div className="bg-white rounded-md py-8 text-center md:text-left">
          <h2 className="text-4xl text-center text-pink">Sobre Min</h2>
          <div className="md:pl-10">
            <h3 className="text-3xl">Desenvolvedor Web / Habilidades</h3>
            <h3 className="text-xl font-bold">PHP</h3>
            <h3 className="text-xl font-bold">JavaScript</h3>
            <h3 className="text-xl font-bold">HTML</h3>
            <h3 className="text-xl font-bold">CSS</h3>
          </div>
        </div>

        <div className=" mt-10 text-center">
          <h2 className="text-4xl text-pink">Meus Códigos / Contribuições</h2>
          <h3 className="text-2xl">GitHub Status</h3>
          <span>
            Repositórios: {userJson.public_repos}, Seguidores:{" "}
            {userJson.followers}
          </span>
        </div>

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
        <footer className="text-center py-2 border-t-2 border-gray-400">
          Desenvolvido por Bruno Teixeira
        </footer>
      </div>
    </React.Fragment>
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
