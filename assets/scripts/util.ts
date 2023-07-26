import { math, v2, v3 } from "cc"

export class Util {
    static v2ToV3(nodeV2: math.Vec2) {
        return v3(nodeV2.x, nodeV2.y, 0)
    }
    static v3ToV2(nodeV3: math.Vec3) {
        return v2(nodeV3.x, nodeV3.y)
    }
}


