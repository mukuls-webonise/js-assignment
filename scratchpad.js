
// set,get,remove,removeAll,calculate length

var customLoader = function () {
  
  var sessionKey = 'sessionStorage';
  var localKey = 'localStorage';
  
  if (storageAvailable(sessionKey)) {
    console.log("Using session storage");
    
    var sessionStorageManager = new StorageManager(sessionStorage);
    useStorageManager(sessionStorageManager);
  }
  
  if (storageAvailable(localKey)) {
    console.log("Using local storage");
    
    var localStorageManager = new StorageManager(localStorage);
    useStorageManager(localStorageManager);
  }
  
}

function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

function useStorageManager(storageManager) {
  
  var userKey = 'currentUser';
  storageManager.set(userKey, 'mukul');
  console.log('User: ' + storageManager.get(userKey));
  
  var ageKey = 'age';
  storageManager.set(ageKey, 22);
  console.log('Age: ' + storageManager.get(ageKey));
  
  console.log('Length: ' + storageManager.length());
  
  console.log('Removing username: ')
  storageManager.remove(userKey);
  
  console.log('Length: ' + storageManager.length());
  
  console.log('Removing all')
  storageManager.removeAll();
  
  console.log('Length: ' + storageManager.length());
}


function StorageManager(storage) {
  this.get = function (key) {
    return storage.getItem(key);
  };
  this.set = function (key, value) {
    storage.setItem(key, value);
  };
  this.remove = function (key) {
    storage.removeItem(key);
  };
  this.removeAll = function () {
    storage.clear();
  };
  this.length = function () {
    return storage.length;
  };
}
onLoad = customLoader;
onLoad();
