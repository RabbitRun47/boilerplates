export const getRandomKey = (keyLength = 7, baseLength = 36) =>
    Math.random().toString(baseLength).substring(keyLength);

/**
 * returns `integer` where `0 <= integer < max`
 */
export const getRandomInt = (max) => Math.floor(Math.random() * max);
