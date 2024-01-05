function getFullResponseFromAPI(api) {
  return new Promise((resolve, reject) => {
    if (api) resolve({ status: 200, body: 'Success' });
    reject(Error('Failed to fetch API'));
  });
}
// Export the function for external use
export default getFullResponseFromAPI;
