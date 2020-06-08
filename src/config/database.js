require("dotenv/config"); //tem q carregar aqui dentro tb, pois existem comando que n acessam o server.js antes

module.exports = {
	dialect: "postgres",
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	define: {
		timestamps: true,
		underscored: true,
	},
};
