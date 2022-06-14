export const tegsRecognition = (data) => {
  if (!Array.isArray(data)) {
    const splitStr = data.split(' ');
    return splitStr.filter((word) => word.includes('#')).map((word) => word.slice(1));
  }
  return data;
};
