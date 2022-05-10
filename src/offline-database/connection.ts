import { Connection, createConnection } from "typeorm"

import { Account } from "./account.model"
import { CreateAccountsTable1650436810884 } from "./migrations"

export const initConnection = async (): Promise<Connection> => {
  return await createConnection({
    type: "expo",
    database: "testdb-0004.db",
    driver: require("expo-sqlite"),
    logging: true,

    entities: [
      Account,
    ],
    synchronize: false,

    migrations: [
      CreateAccountsTable1650436810884,
    ],
    migrationsRun: true,
  })
}
