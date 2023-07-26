import { _decorator, Component, misc, Node, Vec2 } from 'cc';
import { Util } from './util';
const { ccclass, property } = _decorator;

@ccclass('bullet')
export class bullet extends Component {
    // @property
    // speed: number = 600; // Adjust the speed of the bullet as needed.

    // targetPosition: Vec2 = new Vec2();

    // setTargetPosition(target: Vec2) {
    //     this.targetPosition.set(target);
    // }

    // update(deltaTime: number) {
    //     if (!this.targetPosition) {
    //         return;
    //     }
    //     console.log("check ->")
    //     // Calculate the direction from the bullet to the target position.
    //     const direction = this.targetPosition.subtract(Util.v3ToV2(this.node.position));
    //     direction.normalize();

    //     // Move the bullet towards the target position.
    //     const newPosition = this.node.position.add(Util.v2ToV3(direction.multiplyScalar(this.speed * deltaTime)));
    //     this.node.setPosition(newPosition);

    //     // Rotate the bullet to face its movement direction.
    //     const angleRad = Math.atan2(direction.y, direction.x);
    //     const angleDeg = misc.radiansToDegrees(angleRad);
    //     this.node.angle = angleDeg - 90; // Adjust the angle offset as needed.
    // }
}


