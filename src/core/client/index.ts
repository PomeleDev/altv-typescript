import * as alt from 'alt-client';

// 创建WebView实例
const view = new alt.WebView('http://resource/client/html/index.html');

let bool: boolean = true;
// 设置WebView为可见并显示鼠标
view.focus();
alt.showCursor(bool);  // 显示鼠标光标

// 监听来自WebView的消息
view.on('test', (msg: string) => {
    alt.log(`收到WebView消息: ${msg}`);
});

alt.log('客户端UI已加载!');

// 添加按键监听以便关闭界面
alt.on('keyup', (key: number) => {
    if (key === 113) { // F2键
        bool = !bool;
        alt.showCursor(bool);  // 隐藏鼠标光标
        // view.destroy();  // 销毁WebView
    }
});
