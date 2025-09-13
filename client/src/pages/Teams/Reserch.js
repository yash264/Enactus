import React from 'react';
import TeamPageTemplate from '../../components/Teams/TeamPageTemplate';
import { researchTeamData } from '../../data/index';

const research = () => {
  return (
    <TeamPageTemplate 
      teamData={researchTeamData}
      teamName="RESEARCH AND DEVELOPMENT"
      teamDescription="Building partnerships and community outreach"
    />
  );
};

export default research;
