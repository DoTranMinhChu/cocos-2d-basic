import { _decorator, Component, EventMouse, Input, instantiate, Node, Prefab, UITransform, v2 } from 'cc';
import { Util } from './util';
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {

    @property(Prefab)
    bullet: Prefab = null;

    @property
    posX: number = 0;
    posY: number = 0;
    start() {

    }
    bulletSpawn(event: EventMouse) {
        const newBullet = instantiate(this.bullet);
        const robot = this.node.getChildByName("robot");
        newBullet.setPosition(robot.position.x + 100, robot.position.y + 100);
        newBullet.angle = robot.angle + 45;
        this.node.addChild(newBullet);
        let mousePosition = event.getLocation();
        mousePosition = Util.v3ToV2(this.node.getComponent(UITransform).convertToNodeSpaceAR(Util.v2ToV3(mousePosition)));
        this.posX = mousePosition.x;
        this.posY = mousePosition.y;
        setInterval(() => {

            newBullet.setPosition(newBullet.position.x + 10, newBullet.position.y + 10);
        }, 10)

    }
    protected onLoad(): void {
        this.node.on(Input.EventType.MOUSE_DOWN, this.bulletSpawn, this)
    }
    update(deltaTime: number) {

    }
}


