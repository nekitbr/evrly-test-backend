/**
 * @typedef {Object} EncryptedPayload
 * @property {string} iv
 * @property {string} authTag
 * @property {string} encrypted
 */

/**
 * @typedef {Object} EncryptionInfo
 * @property {string} algorithm
 * @property {string} secretKey
 * @property {EncryptedPayload} encrypted
 */

/**
 * @typedef {Object} EncryptedResponse
 * @property {boolean} success
 * @property {EncryptionInfo} data
 */

/**
 * @typedef {Object} UserData
 * @property {string} nome
 * @property {string} phone
 * @property {string} email
 */

/**
 * @typedef {Object} UserEntity
 * @property {number} id
 * @augments UserData
 */

const EVRLY_N8N_BASE_URL = "https://n8n-apps.nlabshealth.com/webhook";
const NEKITBR_N8N_BASE_URL = "https://nekitbr.app.n8n.cloud/webhook";

export const N8NClient = {

};
