import {httpClient} from '@/infra';

interface CreateParams {
  latitude: number;
  longitude: number;
  speed: number;
  time: string;
  packageId: string;
}

async function create(params: CreateParams): Promise<void> {
  const reponse = await httpClient.post<void>(`point/${params.packageId}`, {
    params,
  });
  return reponse.data;
}

export const Service = {
  create,
};
