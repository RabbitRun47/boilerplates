export const getRandomKey = (keyLength: number = 7, baseLength: number = 36) =>
    Math.random().toString(baseLength).substring(keyLength);

/**
 * returns `integer` where `0 <= integer < max`
 */
export const getRandomInt = (max: number) => Math.floor(Math.random() * max);
