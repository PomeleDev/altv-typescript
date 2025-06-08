import * as alt from 'alt-client';
import * as native from 'natives';
import { EVENTS } from '../../shared/events.js';
import { MarkerSync } from '../../shared/interfaces.js';

const streamRange = 10;

let existingMarkers: Array<MarkerSync> = [];

function draw() {
    if (existingMarkers.length <= 0) {
        return;
    }

    for (let marker of existingMarkers) {
        const pos = new alt.Vector3(marker.pos.x, marker.pos.y, marker.pos.z);
        const dist = pos.distanceTo(alt.Player.local.pos);
        if (dist > streamRange) {
            continue;
        }

        native.drawMarker(
            marker.type,      // Marker 类型（例如 1 = 箭头，6 = 圆形等）
            pos.x,            // X 坐标
            pos.y,            // Y 坐标
            pos.z,            // Z 坐标
            0,                // Marker 的方向向量（常为 0）
            0,
            0,
            0,                // Marker 的旋转角度（绕 X/Y/Z 轴）
            0,
            0,
            3,                // Marker 的大小缩放（常用 Y/Z 控制高度）
            3,
            1,
            marker.color.r,   // Marker 的颜色
            marker.color.g,
            marker.color.b,
            marker.color.a,
            false,            // 是否上下浮动动画
            false,            // 是否始终面向玩家相机方向
            2,                // 保留参数，一般设为 0
            false,            // 是否持续旋转
            undefined,        // 材质字典（用于自定义纹理）
            undefined,        // 材质名称（一般为空字符串）
            false             // 是否附着在实体上
        );
    }
}

function syncMarkers(markers: Array<MarkerSync>) {
    existingMarkers = existingMarkers.concat(markers);
}

alt.onServer(EVENTS.TO_CLIENT.SYNC_MARKERS, syncMarkers);
alt.everyTick(draw);
