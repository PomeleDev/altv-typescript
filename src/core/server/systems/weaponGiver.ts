import * as alt from 'alt-server';
import { RGBA } from 'alt-shared';

type WeaponInfo = { weaponHash: number; identifier: string; pos: alt.IVector3 };
const identifiers: Array<WeaponInfo> = [];

function getWeaponInfo(colshape: alt.Colshape): WeaponInfo | undefined {
    if (typeof colshape['identifier'] === 'undefined') {
        return undefined;
    }

    const index = identifiers.findIndex((x) => {
        if (x.identifier === colshape['identifier']) {
            return true;
        }

        return false;
    });

    if (index <= -1) {
        return undefined;
    }
    return identifiers[index];
}

function handleEnterColshape(colshape: alt.Colshape, player: alt.Player) {
    const weaponGiverInfo = getWeaponInfo(colshape);
    if (typeof weaponGiverInfo === 'undefined') {
        return;
    }

    alt.log('player left a weapon give point.');
    player.giveWeapon(weaponGiverInfo.weaponHash, 9999, true);
}

function handleLeaveColshape(colshape: alt.Colshape, player: alt.Player) {
    const weaponGiverInfo = getWeaponInfo(colshape);
    if (typeof weaponGiverInfo === 'undefined') {
        return;
    }

    player.removeWeapon(weaponGiverInfo.weaponHash);

    console.log('player has left the weapon getting colshape.');
}

const WeaponGiver = {
    init() {
        alt.log('Weapon Giver file was registered.');
    },
    add(pos: alt.IVector3, identifier: string, weaponHash: number, sprite: number, name: string, color: number) {
        identifiers.push({
            pos,
            identifier,
            weaponHash,
        });

        const weaponColshape = new alt.ColshapeCylinder(pos.x, pos.y, pos.z, 3, 3);
        weaponColshape.playersOnly = true;
        weaponColshape['identifier'] = identifier;


        const blip = new alt.PointBlip(pos.x, pos.y, pos.z, true);
        blip.sprite = sprite;
        blip.name = name;
        blip.scale = 1;
        blip.color = color;
        blip.blipType = 4;
    },
};

export default WeaponGiver;

alt.on('entityEnterColshape', handleEnterColshape);
alt.on('entityLeaveColshape', handleLeaveColshape);

WeaponGiver.add(
    { x: 28.27446174621582, y: 852.566650390625, z: 196.73324584960938 },
    'weapon-pistol-giver',
    alt.hash('WEAPON_PISTOL'),
    156,
    "手枪",
    0,
);

WeaponGiver.add(
    { x: 27.670907974243164, y: 860.95947265625, z: 196.7394256591797 },
    'weapon-rpg-giver',
    alt.hash('WEAPON_RPG'),
    157,
    "RPG",
    9,
);
