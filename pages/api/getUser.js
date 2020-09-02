import { getUser } from "../../utils/getUser";

const apiGetUser = async (req, res) => {
  const { userJson, repos } = await getUser("brunosann");
  res.json({ user: userJson, repositories: repos });
};
export default apiGetUser;
