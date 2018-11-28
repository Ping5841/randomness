
export function isPrimitive (value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number'
    )
}

export function isUndef (value) {
    return value === undefined || value === null
}

export function isDef (value) {
    return value !== undefined && value !== null
}
