import api from './apiConfig';

export default async function apiDisplayInfo() {
  const response = await api.get();
  // console.log(response);
  return response.data;
}
