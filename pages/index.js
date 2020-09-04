import React from "react";
import PageHead from "../components/PageHead";
import { getUser } from "../utils/getUser";
import Header from "../components/Header";
import Sobre from "../components/Sobre";
import Stats from "../components/Stats";
import Repos from "../components/Repos";
import Footer from "../components/Footer";

const Index = ({ repos, userJson }) => {
  return (
    <React.Fragment>
      <PageHead />
      <div className="container mx-auto">
        <Header />
        <Sobre />
        <Stats userJson={userJson} />
        <Repos repos={repos} />
        <Footer />
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
