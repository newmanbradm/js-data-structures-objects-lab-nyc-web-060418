// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const updatedDriver = Object.assign({}, driver, {[key]: value});
  return updatedDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign(driver, {[key]: value});
  return newDriver;
}
function deleteFromDriverByKey(driver, key) {
  const updatedDriver = Object.assign({}, driver)
  delete updatedDriver[key];
  return updatedDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
