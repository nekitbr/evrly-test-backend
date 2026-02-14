import crypto from 'node:crypto';

/**
 * Decrypts AES-256-GCM
 * @param {EncryptionInfo} encryptionInfo
 * @returns {Array|Object}
 */
export function decryptPayload({ encrypted, algorithm, secretKey }) {
    const keyBuffer = Buffer.from(secretKey, "hex");
    const ivBuffer = Buffer.from(encrypted.iv, "hex");
    const authTagBuffer = Buffer.from(encrypted.authTag, "hex");
    const ciphertextBuffer = Buffer.from(encrypted.encrypted, "hex");

    const decipher = crypto.createDecipheriv(algorithm, keyBuffer, ivBuffer);
    decipher.setAuthTag(authTagBuffer);

    let decrypted = decipher.update(ciphertextBuffer, null, "utf8");
    decrypted += decipher.final("utf8");

    return JSON.parse(decrypted);
}
