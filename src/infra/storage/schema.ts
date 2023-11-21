import Realm from 'realm';
Realm.flags.THROW_ON_GLOBAL_REALM = true;

// Define your object model
export class PackagePointSchema extends Realm.Object<PackagePointSchema> {
  _id!: Realm.BSON.ObjectId;
  id!: string;
  latitude!: number;
  longitude!: number;
  time!: string;
  speed!: number;
  synced!: boolean;
  packageId!: string;

  static schema: Realm.ObjectSchema = {
    name: 'PackagePoint',
    properties: {
      _id: 'objectId',
      latitude: 'double',
      longitude: 'double',
      time: 'string',
      speed: 'double',
      synced: 'bool',
      packageId: 'string',
    },
    primaryKey: '_id',
  };
}
