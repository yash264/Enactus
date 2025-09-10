import React from 'react';
import TeamPageTemplate from '../../components/Teams/TeamPageTemplate';
import { contentTeamData } from '../../data/index';

const Content = () => {
  return (
    <TeamPageTemplate 
      teamData={contentTeamData}
      teamName="CONTENT TEAM"
      teamDescription="Crafting compelling stories and narratives"
    />
  );
};

export default Content;
