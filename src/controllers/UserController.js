import { UserService } from "../services/UserService.js";

export default async function UserController(fastify) {

    // fetch encrypted data -> decrypt -> send to N8N -> persist -> return users
    fastify.get("/users", async (req, res) => {
        return res.send(await UserService.getUsersPaginated(req.query));
    });

    // fetch encrypted data -> decrypt -> send to N8N -> persist -> return users
    fastify.post("/users/execute", async (req, res) => {
        return res.send(await UserService.processUsers());
    });

    // triggers N8N truncate workflow
    fastify.delete("/users/truncate", async (req, res) => {
        return res.send(await UserService.clearUsers());
    });
}
