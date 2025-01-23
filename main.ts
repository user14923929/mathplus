/**
 * Use the VARIABLE.defl=VALUE notation to specify
 * default argument values.
 */

namespace Math {
    //% block
    //% x.defl=42
    export function sinOfCube(x: number) {
        return Math.sin(x ^ 3)
    }
    //% block
    //% x.defl=42
    export function cosOfCube(x: number) {
        return Math.cos(x ^ 3)
    }
    //% block
    //% x.defl=42
    export function circle(x: number) {
        return Math.round(x) ^ 3
    }
}
