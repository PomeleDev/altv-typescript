// Events
import './events/playerConnect.js';

// Systems
import marker from './systems/marker.js';
marker.init();

import weaponGiver from './systems/weaponGiver.js';
// import './systems/weaponGiverAgain.js';
weaponGiver.init();