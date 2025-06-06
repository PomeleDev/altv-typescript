**第一步** 需要提前安装 [Node.js](https://nodejs.org/en/download/current)
```python
# 检查环境
node -v
npm -v
```
**第二步** 检查package.json中依赖版本冲突
```json
{
    "devDependencies": {
        "@altv/types-client": "^15.0.9",
        "@altv/types-natives": "^15.0.8",
        "@altv/types-server": "^15.0.8"...
    }
}
```
**第三步** 安装依赖
在**CMD终端**中输入 `npm i` 或者 `npm install`

如果提示错误，请尝试使用 `npm audit fix --force` 或者 `npm install --force`

提示 `found 0 vulnerabilities` 即为安装成功

