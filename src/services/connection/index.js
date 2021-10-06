import { api } from "../api";

export const getPublicImage = async (id) => {
  const { data } = await api.get(
    `/images/search?limit=3&breed_id=${id}&size=med`
  );
  return data;
};

export const searchBreed = async (nameBreed) => {
  const { data } = await api.get(`/breeds/search?q=${nameBreed}`);
  return data;
};

export const getPaginateBreeds = async (pageNumber) => {
  const { data } = await api.get(`/breeds?limit=10&page=${pageNumber}`);
  return data;
};
