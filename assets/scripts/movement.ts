import { _decorator, Component, EventMouse, misc, Node, v2, Input, math, UITransform, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('movement')
export class movement extends Component {
    v2ToV3(nodeV2: math.Vec2) {
        return v3(nodeV2.x, nodeV2.y, 0)
    }
    v3ToV2(nodeV3: math.Vec3) {
        return v2(nodeV3.x, nodeV3.y)
    }
    // LIFE_CYCLE CALLBACKS:
    positionXY(event: EventMouse) {

        const playerPosition = v2(this.node.position.x, this.node.position.y);
        let mousePosition = event.getLocation();
        mousePosition = this.v3ToV2(this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(this.v2ToV3(mousePosition)));
        const offSetY = mousePosition.y - playerPosition.y + 60;
        const offSetX = mousePosition.x - playerPosition.x;
        const angleRad = Math.atan2(offSetY, offSetX);
        const angleDeg = misc.radiansToDegrees(angleRad);
        this.node.angle = angleDeg - 360;
    }

    onLoad() {
        this.node.parent.on(Input.EventType.MOUSE_MOVE, this.positionXY, this)
        console.log("movement onLoad")
    }
    start() {
        console.log("movement start")
    }

    update(deltaTime: number) {

    }

}


