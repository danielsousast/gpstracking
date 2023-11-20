import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {PackagePointSchema} from './schema';

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [PackagePointSchema],
};
// Create a realm context
const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

export {RealmProvider, useRealm, useObject, useQuery};
