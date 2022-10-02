const BASE_URL = "http://localhost:3000";

export const getImageUrl = (data) => {
  return `${BASE_URL}/data/${data.dir}/${data.imageName}`;
};

export const getStausUrl = (data) => {
  return `${BASE_URL}/statusIcons/${data.statusIcon}`;
};

export const getReloadDataUrl = (data) => {
  return `${BASE_URL}/status/${data.dir}`;
};

export const getUploadFileUrl = () => {
  return `${BASE_URL}/upload`;
};

export const getListDataFileUrl = () => {
  return `${BASE_URL}/my_list`;
};
