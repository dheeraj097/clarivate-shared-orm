import 'reflect-metadata'; // Important for TypeORM
import { DatabaseConnection } from './database';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
import { faker } from '@faker-js/faker';

async function seedDatabase() {
  try {
    await DatabaseConnection.initialize();
    const connection = DatabaseConnection.getConnection();
    const categoryRepository = connection.getRepository(Category);
    const productRepository = connection.getRepository(Product);

    // Seed Categories
    const categories = [];
    for (let i = 0; i < 5; i++) {
      const category = new Category();
      category.categoryName = faker.commerce.department();
      category.description = faker.lorem.sentence();
      category.isActive = true;
      categories.push(category);
    }
    await categoryRepository.save(categories);
    console.log('Categories seeded successfully!');

    // Seed Products
    const products = [];
    const savedCategories = await categoryRepository.find();
    for (let i = 0; i < 20; i++) {
      const product = new Product();
      product.productName = faker.commerce.productName();
      product.description = faker.commerce.productDescription();
      product.price = parseFloat(faker.commerce.price());
      product.stockQuantity = faker.number.int({ min: 0, max: 100 });
      // Assign a random category from the seeded categories
      const randomCategory = savedCategories[Math.floor(Math.random() * savedCategories.length)];
      product.categoryId = randomCategory.id;
      products.push(product);
    }
    await productRepository.save(products);
    console.log('Products seeded successfully!');

    console.log('Database seeding completed!');
    await DatabaseConnection.getConnection().destroy();
  } catch (error) {
    console.error('Database seeding failed:', error);
  }
}

seedDatabase();