const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require('../database/sqlite')

class UsersController {
    async create(request, response) {
        const { email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        
        if(checkUserExist) {
            throw new AppError("Este e-mail já está em uso")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (email, password) VALUES (?, ?)", [ email, hashedPassword ])

        return response.status(201).json();
    }

    async update(request, response) {
        const { email, password, old_password } = request.body;
        const user_id = request.user.id;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

        if (!user) {
            throw new AppError("Usuario não encontrado");
        }

        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso");
        }

        user.email = email ?? user.email;

        if (password && !old_password) {
            throw new AppError("É necessario fornecer a senha antiga para mudar a senha!");
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new AppError("Senha antiga está errada!");
            }

            user.password = await hash(password, 8)
        }

        await database.run(`UPDATE users SET email = ?, password = ? WHERE id = ?`, [user.email, user.password, user_id]);

        return response.json();
    }
}

module.exports = UsersController;