import {CreateParams} from '@/data';
import {PackagePointSchema} from '@/infra';
import NetInfo from '@react-native-community/netinfo';

const realm = new Realm({schema: [PackagePointSchema]});
const SCHEMA = 'PackagePoint';

const createPackagePoint = async (params: CreateParams) => {
  const isConnected = await NetInfo.fetch().then(state => {
    return state.isConnected;
  });
  const synced = isConnected ? true : false;
  realm.write(() => {
    realm.create(SCHEMA, {
      ...params,
      synced,
    });
  });
};

const getAllPackages = ({onlyNotSynced = false}) => {
  console.log(realm.objects(SCHEMA));
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
