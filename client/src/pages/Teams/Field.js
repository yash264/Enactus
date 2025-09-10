import React from 'react';
import TeamPageTemplate from '../../components/Teams/TeamPageTemplate';
import { fieldTeamData } from '../../data/index';

const Field = () => {
  return (
    <TeamPageTemplate 
      teamData={fieldTeamData}
      teamName="FIELD OFFICER"
      teamDescription="Making impact on the ground"
    />
  );
};

export default Field;
