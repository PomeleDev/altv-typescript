import * as alt from 'alt-client';

alt.onServer('log:Console', handleLogConsole);
// 监听服务器端发送的 'do-something' 事件，并绑定处理函数 handleDoSomething
alt.onServer('do-something', handleDoSomething)

function handleLogConsole(msg: string) {
    alt.log(msg);
}

// 处理服务器发来的 'do-something' 事件，在消息后追加 ' world!' 并回传给服务器
function handleDoSomething(msg: string) {
    msg += ' world!'
    // 向服务器发送 'do-something' 事件，并附带修改后的消息
    alt.emitServer('do-something', msg);
}