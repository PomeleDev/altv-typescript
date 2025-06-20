export enum ChatType {
    NORMAL = 0,     // 普通聊天，可被30米内的玩家看到
    SHOUT = 1,      // 喊话，可被50米内的玩家看到
    WHISPER = 2,    // 低语，可被5米内的玩家看到
    OOC = 3,        // OOC聊天，服务器范围
    ME = 4,         // 动作描述，15米范围
    DO = 5,         // 场景描述，15米范围
    NEWS = 6,       // 新闻，服务器范围
    ADMIN = 7       // 管理员消息，服务器范围
}

export enum ChatColor {
    NORMAL = '#FFFFFF',
    SHOUT = '#FF8C00',
    WHISPER = '#808080',
    OOC = '#C0C0C0',
    ME = '#C2A2DA',
    DO = '#87CEEB',
    NEWS = '#FFD700',
    ADMIN = '#FF0000'
} 