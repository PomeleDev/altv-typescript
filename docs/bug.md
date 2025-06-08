## 服务端BUG问题汇总
### 服务端报错
```js
[17:47:01][js] Invoking IPC Event 'kick-all'
[17:47:01][js] Invoking IPC Event 'kick-all'
[17:47:01][js] Invoking IPC Event 'kick-all'
[17:47:01][js] Invoking IPC Event 'kick-all'
[17:47:01][js] Invoking IPC Event 'kick-all'
[17:47:01][js] Invoking IPC Event 'kick-all'
[17:47:01][js] Invoking IPC Event 'kick-all'
[17:47:01][js] Invoking IPC Event 'kick-all'
file:///D:/altv-typescript/node_modules/fkill/index.js:167
                throw new AggregateError(errors);
                      ^

AggregateError:
    Error: Killing process :7788 failed: Process ...
```
TypeScript 监听脚本 `watch.js` 里尝试使用 `fkill` 杀掉端口 `7788` 上的进程，但该端口上**并没有任何正在运行的进程**，所以抛出了 `Process doesn't exist` 异常。
#### 解决办法
修改你的 `watch.js`，包裹 `fkill` 调用，忽略“进程不存在”的错误：
找到`./node_modules/fkill/index.js` 第 167 行
将下面这段代码：
```ts
if (errors.length > 0 && !options.silent) {
  throw new AggregateError(errors);
}
```
改成：
```ts
const realErrors = errors.filter(msg => !msg.includes("Process doesn't exist"));
if (realErrors.length > 0 && !options.silent) {
  throw new AggregateError(realErrors);
}
```
这样，像你遇到的 `"Process doesn't exist"` 情况就会被安静地忽略，而不是中断整个重启逻辑。