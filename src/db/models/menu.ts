import { DataTypes, Model, Optional } from "sequelize";

import sequalizeConnection from "../../config/connection";

interface MenuAttributes {
  id?: number,
  name: string,
  price: number,
  image?: string,
  description?: string,
  availability: string,

  createdAT?: Date,
  updatedAt?: Date
}

export interface MenuInput extends Optional<MenuAttributes, 'id'>{ };
export interface MenuOutput extends Required<MenuAttributes>{ };

class Menu extends Model<MenuAttributes, MenuInput> implements MenuAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public image!: string;
  public description!: string;
  public availability!: string;

  public readonly createdAT!: Date;
  public readonly updatedAt!: Date;
}

Menu.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  availability: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
}, {
  timestamps: true,
  sequelize: sequalizeConnection,
  underscored: false
});

export default Menu;