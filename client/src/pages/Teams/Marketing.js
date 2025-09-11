import React from 'react';
import TeamPageTemplate from '../../components/Teams/TeamPageTemplate';
import { designTeamData, marketingTeamData } from '../../data/index';

const Marketing = () => {
  return (
    <TeamPageTemplate 
      teamData={marketingTeamData}
      teamName="MARKETING TEAM"
      teamDescription="Building brand presence and engaging our audience"
    />
  );
};

export default Marketing;
