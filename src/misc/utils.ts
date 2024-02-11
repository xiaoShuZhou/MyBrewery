const googleMapsUrl = (latitude: string, longitude: string) => {
  return `https://maps.google.com/?q=${latitude},${longitude}`;
};

export default googleMapsUrl;