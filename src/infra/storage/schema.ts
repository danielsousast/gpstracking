import Realm, {ObjectSchema} from 'realm';

// Define your object model
export class PackagePointSchema extends Realm.Object<PackagePointSchema> {
  _id!: Realm.BSON.ObjectId;
  id!: string;
  latitude!: number;
  longitude!: number;
  time!: string;
  speed!: number;
  synced!: boolean;
  static schema: ObjectSchema = {
    name: 'PackagePoint',
    properties: {
      _id: 'objectId',
      latitude: 'double',
      longitude: 'double',
      time: 'string',
      speed: 'double',
      synced: 'bool',
    },
    primaryKey: '_id',
  };
}
