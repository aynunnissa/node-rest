import { DataTypes, Model, Optional } from "sequelize";

import sequalizeConnection from "../../config/connection";
import Menu from "./menu";

interface CartAttributes {
  id?: number,
  quantity: number,
  menuId: number,
  
  createdAT?: Date,
  updatedAt?: Date
}

export interface CartInput extends Optional<CartAttributes, 'id'>{ };
export interface CartOutput extends Required<CartAttributes>{ };

class Cart extends Model<CartAttributes, CartInput> implements CartAttributes {
  public id!: number;
  public quantity!: number;
  public menuId !: number;

  public readonly createdAT!: Date;
  public readonly updatedAt!: Date;
}

Cart.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  menuId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: 'Menus',
      key: 'id',
    },
  },
}, {
  timestamps: true,
  sequelize: sequalizeConnection,
  underscored: false
});

Cart.belongsTo(Menu, { foreignKey: 'menuId' })

export default Cart;