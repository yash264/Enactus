import React from 'react';
import TeamPageTemplate from '../../components/Teams/TeamPageTemplate';
import { webTeamData } from '../../data/index';

const Web = () => {
  return (
    <TeamPageTemplate 
      teamData={webTeamData}
      teamName="WEB TEAM"
      teamDescription="Meet the architects of our digital journey"
    />
  );
};

export default Web;