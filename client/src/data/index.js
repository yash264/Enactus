// Team data imports from single JS file
import {
  teamData,
  teamConfig,
  getTeamData,
  getTeamMetadata,
  webTeamData,
  researchTeamData,
  contentTeamData,
  fieldTeamData,
  designTeamData,
  marketingTeamData
} from './teamData.js';

// Leadership data imports
import {
  leadershipData,
  getLeadershipData,
  getLeaderById,
  getLeadersByDepartment
} from './leadershipData.js';

// Export everything for use in components
export {
  teamData,
  teamConfig,
  getTeamData,
  getTeamMetadata,
  webTeamData,
  researchTeamData,
  contentTeamData,
  fieldTeamData,
  designTeamData,
  marketingTeamData,
  leadershipData,
  getLeadershipData,
  getLeaderById,
  getLeadersByDepartment
};
