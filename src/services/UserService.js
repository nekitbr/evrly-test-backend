import { N8NClient } from "../clients/N8nClient.js";
import { decryptPayload } from "./EncryptionService.js";

export const UserService = {

    async getUsersPaginated({ start, limit }) {
        return await N8NClient.fetchUsersPaginated(start, limit);
    },

    async processUsers() {
        const encryptedData = await N8NClient.fetchEncryptedUsers();
        const decryptedData = decryptPayload(encryptedData.data);

        await N8NClient.saveUsers(decryptedData);
    },

    async clearUsers() {
        await N8NClient.truncateUsersTable();
    }

}
