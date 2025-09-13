import React from 'react';
import TeamPageTemplate from '../../components/Teams/TeamPageTemplate';
import SEO from '../../components/General/SEO.jsx';
import { webTeamData } from '../../data/index';
import { seoConfig } from '../../data/seoConfig.js';

const Web = () => {
  return (
    <>
      <SEO 
        title={seoConfig.webTeam.title}
        description={seoConfig.webTeam.description}
        keywords={seoConfig.webTeam.keywords}
        url={seoConfig.webTeam.url}
        image={seoConfig.webTeam.image}
      />
      <TeamPageTemplate 
        teamData={webTeamData}
        teamName="WEB TEAM"
        teamDescription="Meet the architects of our digital journey"
         classname="m-0 p-0"
      />
    </>
  );
};

export default Web;