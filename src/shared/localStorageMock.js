// This is used during testing - Jest has no window.localStorage
// so this defines a mock API if localStorage does not exist
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
}
if (!global.localStorage) {
  global.localStorage = new LocalStorageMock();
}
