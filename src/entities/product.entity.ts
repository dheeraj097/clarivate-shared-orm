import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity('products')
export class Product {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 255 })
	productName!: string;

	@Column({ type: 'text', nullable: true })
	description!: string;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	price!: number;

	@Column({ type: 'int' })
	stockQuantity!: number;

	@Column()
	categoryId!: number;

	@ManyToOne(() => Category, (category) => category.products)
	@JoinColumn({ name: 'categoryId' })
	category!: Category;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
