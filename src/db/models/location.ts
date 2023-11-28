import { DataTypes, Model, Optional } from "sequelize";

import sequalizeConnection from "../../config/connection";

interface LocationAttributes {
  id?: number,
  name: string,
  lat: number,
  lng: number

  createdAT?: Date,
  updatedAt?: Date
}

export interface LocationInput extends Optional<LocationAttributes, 'id'>{ };
export interface LocationOutput extends Required<LocationAttributes>{ };

class Location extends Model<LocationAttributes, LocationInput> implements LocationAttributes {
  public id!: number;
  public name!: string;
  public lat!: number;
  public lng!: number;

  public readonly createdAT!: Date;
  public readonly updatedAt!: Date;
}

Location.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lat: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 6)
  },
  lng: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 6)
  }
}, {
  timestamps: true,
  sequelize: sequalizeConnection,
  underscored: false
});

export default Location;