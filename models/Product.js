// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
		// define product name column
		product_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		// define price column
		price: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: false,
			validate: {
				isDecimal: true
			}
		},
		// define stock column
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
			validate: {
				isInt: true
			}
		}
  },
	// define category_id column
	catergory_id: {
		type: DataTypes.INTEGER,
		references: {
			model: 'category',
			key: 'id'
		}
	},
	// pass our imported sequelize instance into the Product model
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
