const typeorm = require("typeorm");
const wilder = require("./entity/wilder");
const skill = require("./entity/skill");

module.exports = {
    dataSource : new typeorm.DataSource({
        type: "sqlite",
        database: "./wildersdb.sqlite",
        synchronize: true,
        entities: [wilder, skill],
        logging: ["query", "error"]
      }),
};