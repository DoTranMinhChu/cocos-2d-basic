import { _decorator, Animation, Collider2D, Component, Contact2DType, director, Graphics, math, misc, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('creep')
export class creep extends Component {

    speed: number = 200; // Adjust the speed of the alien movement as needed.
    onBeginContact(contact: Collider2D, selfCollider: Collider2D, otherCollider: Collider2D) {
        // Check if the alien collides with the main sprite.
        console.log("onBeginContact ===> ", {
            contact,
            selfCollider,
            otherCollider
        })
    }

    onEndContact(contact: Collider2D, selfCollider: Collider2D, otherCollider: Collider2D) {
        // Check if the alien collides with the main sprite.
        console.log("onEndContact ===> ", {
            contact,
            selfCollider,
            otherCollider
        })
    }


    update(deltaTime: number) {
        const robot = this.node.parent.getChildByName("robot");

        if (!robot || !this.node) {
            return;
        }
        const { x: robotX, y: robotY } = robot.position
        const { x, y } = this.node.position
        if (Math.abs(x - robotX) < 40 && Math.abs(y - robotY) < 40) {
            return;
        }

        // Calculate the direction from the alien to the main sprite.
        const direction = this.node.parent.getChildByName("robot").position.subtract(this.node.position);
        direction.normalize();

        // Move the alien towards the main sprite.
        const newPosition = this.node.position.add(direction.multiplyScalar(this.speed * deltaTime));
        this.node.setPosition(newPosition);

        // Rotate the alien to face the main sprite.
        const angleRad = Math.atan2(direction.y, direction.x);
        const angleDeg = misc.radiansToDegrees(angleRad);
        this.node.angle = angleDeg - 90; // Adjust the angle offset as needed.
    }
    protected onLoad(): void {

        const collider = this.getComponent(Collider2D);
        collider
        console.log("collider ===> ", collider);
        if (collider) {
            collider.on("begin-contact", this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this)
        }
    }
    start() {

    }

    //     update(deltaTime: number) {

    //     }
    // }

}
