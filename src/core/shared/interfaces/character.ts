import * as alt from 'alt-shared';

export interface Character {
    id: number;
    accountId: number;
    name: string;
    model: string;
    position: alt.Vector3;
    rotation: alt.Vector3;
    
    // 状态属性
    health: number;
    armor: number;
    
    // 金钱系统
    money: {
        cash: number;
        bank: number;
    };
    
    // 角色信息
    age: number;
    gender: 'male' | 'female';
    
    // 统计信息
    stats: {
        playTime: number;
        lastLogin: Date;
        created: Date;
    };
}

export interface CharacterCreationData {
    name: string;
    age: number;
    gender: 'male' | 'female';
    appearance: CharacterAppearance;
}

export interface CharacterAppearance {
    model: string;
    components: Array<{
        id: number;
        drawable: number;
        texture: number;
    }>;
} 