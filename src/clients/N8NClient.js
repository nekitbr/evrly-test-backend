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

/**
 * @typedef {Object} GetPaginatedUsersResponse
 * @property {UserEntity[]} data
 * @property {number} totalElements
 */

const EVRLY_N8N_BASE_URL = "https://n8n-apps.nlabshealth.com/webhook";
const NEKITBR_N8N_BASE_URL = "https://nekitbr.app.n8n.cloud/webhook";

export const N8NClient = {

    /**
     * @returns {Promise<EncryptedResponse>}
     */
    async fetchEncryptedUsers() {
        const response = await fetch(`${EVRLY_N8N_BASE_URL}/data-5dYbrVSlMVJxfmco`);
        return response.json();
    },

    /**
     * @param {number} start
     * @param {number} limit
     * @returns {Promise<GetPaginatedUsersResponse>}
     */
    async fetchUsersPaginated(start, limit) {
        const params = new URLSearchParams({ start, limit });

        const response = await fetch(`${NEKITBR_N8N_BASE_URL}/users?${params.toString()}`);
        const json = await response.json();

        return {
            data: json[0].data ?? [],
            totalElements: json[0].totalElements ?? json[0].count // n8n shenanigans - will return count if data is empty, otherwise totalElements
        };
    },

    /**
     * @param {UserData | UserData[]} data
     * @returns {Promise<UserEntity[]>}
     */
    async saveUsers(data) {
        await fetch(`${NEKITBR_N8N_BASE_URL}/users/save`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Array.isArray(data) ? data : [data]),
        });
    },

    async truncateUsersTable() {
        await fetch(`${NEKITBR_N8N_BASE_URL}/users/truncate-table`, {
            method: 'DELETE',
        })
    }

};
