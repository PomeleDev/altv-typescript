import * as alt from 'alt-client';
import * as native from 'natives';

alt.onServer('log:Console', handleLogConsole);
// 监听服务器端发送的 'do-something' 事件，并绑定处理函数 handleDoSomething
alt.onServer('do-something', handleDoSomething);
// 监听服务器端发送的 'example' 事件，并绑定处理函数 handleExample
// alt.onServer('example', handleExample);

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

function handleLogConsole(msg: string) {
    alt.log(msg);
}

// 处理服务器发来的 'do-something' 事件，在消息后追加 ' world!' 并回传给服务器
function handleDoSomething(msg: string) {
    msg += ' world!';
    // 向服务器发送 'do-something' 事件，并附带修改后的消息
    alt.emitServer('do-something', msg);
}

// 处理服务器发来的 'example' 事件，执行本地爆炸效果
function handleExample() {
    // 在玩家当前位置触发一个爆炸效果
    native.addExplosion(
        alt.Player.local.pos.x,       // 玩家当前位置 X 坐标
        alt.Player.local.pos.y,       // 玩家当前位置 Y 坐标
        alt.Player.local.pos.z,       // 玩家当前位置 Z 坐标
        5,                            // 爆炸类型（5 表示一般爆炸）
        5,                            // 爆炸威力系数
        true,                         // 是否可见
        false,                        // 是否无声
        9,                            // 持续时间（单位：秒）
        false                         // 是否在水中爆炸
    );
}
