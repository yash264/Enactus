import teamData from "../Home/teamData.json";
import Template from "../Home/Template.js";

const TeamCard = () => {
  return <Template members={teamData} />;
};
export default TeamCard;
