export const getUser = async (name) => {
  const user = await fetch(`https://api.github.com/users/${name}`);
  const userJson = await user.json();

  const notShow = ["brunosann/modulogit"];
  const repositories = await fetch(
    `https://api.github.com/users/${name}/repos?sort=update`,
  );
  let repos = await repositories.json();
  repos = repos.filter((repo) => !repo.fork);
  repos = repos.filter(
    (repo) => notShow.findIndex((name) => name === repo.full_name) === -1,
  );
  repos = repos.map((repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
  }));

  return {
    userJson,
    repos,
  };
};
