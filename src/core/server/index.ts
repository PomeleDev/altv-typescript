import * as alt from 'alt-server';


alt.log('~r~加载服务端脚本!');
alt.log('~g~加载服务端脚本成功!');



alt.on('playerConnect', (player) => {
    alt.log("[玩家] ~g~" + player.name + "~y~ 连接了服务器"); // 完善日志

})