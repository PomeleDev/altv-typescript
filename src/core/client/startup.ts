import * as alt from 'alt-client';
import * as native from 'natives';

import './systems/marker.js'

// 监听玩家按键事件，当按下 F1 时执行 handleF1KeyDown
alt.on('keydown', (key: number) => {
    if (key === 112) {
        printUserInfoformation();
    }
})
// 打印用户ID、位置、旋转角度等信息
function printUserInfoformation(){
    alt.log(`ID: ${alt.Player.local.id}`)
    alt.log(`POS: ${JSON.stringify(alt.Player.local.pos)}`)
    alt.log(`ROT: ${JSON.stringify(alt.Player.local.rot)}`)
}
