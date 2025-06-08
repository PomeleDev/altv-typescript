import * as alt from 'alt-server';


const weaponHash = alt.hash('WEAPON_PISTOL');
const identifier = 'weapon-colshape-navyrevoler';
const pos = {"x":28.27446174621582,"y":852.566650390625,"z":196.73324584960938}
const weaponColshape = new alt.ColshapeCylinder(pos.x, pos.y, pos.z, 3, 3);
weaponColshape.playersOnly = true;
weaponColshape['identifier'] = identifier;

function handleEnterColshape(colshape: alt.Colshape, player: alt.Player) {
    if (colshape['identifier'] !== identifier) {
        return;
    }

    player.giveWeapon(weaponHash, 9999, true);

    console.log('player is getting a weapon.');
}

function handleLeaveColshape(colshape: alt.Colshape, player: alt.Player) {
    if (colshape['identifier'] !== identifier) {
        return;
    }

    player.removeWeapon(weaponHash);

    console.log('player has left the weapon getting colshape.');
}

alt.on('entityEnterColshape', handleEnterColshape);
alt.on('entityLeaveColshape', handleLeaveColshape);