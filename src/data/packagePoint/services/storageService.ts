import Realm from 'realm';
import {CreateParams} from '@/data';
import {PackagePointSchema} from '@/infra';

const realm = new Realm({schema: [PackagePointSchema]});
const SCHEMA = 'PackagePoint';

interface CreateLocalParams extends CreateParams {
  synced: boolean;
}

const createPackagePoint = async (params: CreateLocalParams) => {
  realm.write(() => {
    realm.create(SCHEMA, {
      ...params,
      _id: new Realm.BSON.ObjectId(),
    });
  });
};

const getAllPackages = ({onlyNotSynced = false}) => {
  if (onlyNotSynced) {
    return realm.objects(SCHEMA).filtered('synced == false');
  } else {
    return realm.objects(SCHEMA);
  }
};

const updatePackageStatus = (id: string) => {
  const packageToUpdate = realm.objectForPrimaryKey(SCHEMA, id);
  if (packageToUpdate) {
    realm.write(() => {
      packageToUpdate.synced = true;
    });
  }
};

export const Storage = {
  getAllPackages,
  updatePackageStatus,
  createPackagePoint,
};
