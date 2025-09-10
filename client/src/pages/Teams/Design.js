import React from 'react';
import TeamPageTemplate from '../../components/Teams/TeamPageTemplate';
import { designTeamData } from '../../data/index';

const Design = () => {
  return (
    <TeamPageTemplate 
      teamData={designTeamData}
      teamName="DESIGN TEAM"
      teamDescription="Creating visual excellence and user experiences"
    />
  );
};

export default Design;
