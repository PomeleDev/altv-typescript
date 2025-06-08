import * as alt from 'alt-server';
import Marker from '../systems/marker.js';

alt.on('playerConnect', handlePlayerConnect);

async function handlePlayerConnect(player: alt.Player) {
    alt.log(`[${player.id}] ${player.name} has connected to the server.`);

    player.model = 'mp_m_freemode_01';
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);

    // 同步标记实例
    Marker.sync(player);
}