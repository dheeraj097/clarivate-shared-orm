import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('categories')
export class Category {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 255 })
	categoryName!: string;

	@Column({ type: 'text', nullable: true })
	description!: string;

	@Column({ default: true })
	isActive!: boolean;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;

	@OneToMany(() => Product, (product) => product.category)
	products!: Product[];
}
