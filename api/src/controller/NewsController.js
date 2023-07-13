const knex = require("../database/knex");

class NewsController {
    async create(request, response) {
        const { title, content } = request.body;

        const [news_id] = await knex("news").insert({
            title,
            content
        });

        return response.status(201).json()
    }

    async show(request, response) {
        const { id } = request.params;

        const news = await knex("news").where({ id }).first();

        return response.json(news)
    }

    async index(request, response) {
        const { title } = request.query;

        const news = await knex("news").orderBy("created_at");

        return response.json(news);
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("news").where({ id }).delete();

        return response.json();
    }
}

module.exports = NewsController;