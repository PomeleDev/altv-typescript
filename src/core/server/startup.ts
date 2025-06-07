import * as alt from 'alt-server';
import './secondFile.js'; // NOTE THE .js extension is required for file imports

alt.log(`alt:V Server - Boilerplate Started`);
alt.on('playerConnect', handlePlayerConnect);

async function handlePlayerConnect(player: alt.Player) {
    alt.log(`[${player.id}] ${player.name} has connected to the server.`);

    player.model = 'mp_m_freemode_01';
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);
    
    // 等待 1 秒
    await alt.Utils.wait(1000)

    alt.emitClient(player, 'log:Console', 'alt:V Server - Boilerplate Started');

    // 向客户端发送一个名为 'do-something' 的事件，并传递参数 'hello'
    alt.emitClient(player, 'do-something', 'hello')

    // 向客户端发送一个名为 'example' 的事件
    alt.emitClient(player, 'example')
}
// 监听客户端发来的名为 'do-something' 的事件，并绑定处理函数 doSomething
alt.onClient('do-something', doSomething);

// 处理函数 doSomething，接收玩家对象和消息字符串作为参数
function doSomething(player: alt.Player, msg: string) {
    // 打印日志，显示从客户端收到的消息内容
    console.log(`Hello we got ... ${msg} from the 'client'.`);
}
