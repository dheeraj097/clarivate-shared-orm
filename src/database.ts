import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource } from 'typeorm';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || '3306', 10),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: [Category, Product],
	migrations: [`${__dirname}/migrations/*{.ts,.js}`],
	synchronize: false,
	logging: process.env.DB_LOGGING === 'true',
});

export class DatabaseConnection {
	private static connection: DataSource;

	public static async initialize(): Promise<DataSource> {
		if (!DatabaseConnection.connection) {
            console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_DATABASE);
			DatabaseConnection.connection = await AppDataSource.initialize()
		}
		return DatabaseConnection.connection;
	}

	public static getConnection(): DataSource {
		if (!DatabaseConnection.connection) {
			throw new Error(
				'Database connection not initialized. Call initialize() first.'
			);
		}
		return DatabaseConnection.connection;
	}
}
