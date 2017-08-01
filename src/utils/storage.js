var storage = localStorage;
var _maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');

var defaultSerializer = {
    serialize: function (item) {
        return JSON.stringify(item);
    },
    deserialize: function (data) {
        return data && JSON.parse(data);
    }
};

function _getExpiresDate(expires, now) {
    now = now || new Date();
    if (typeof expires === 'number') {
        expires = expires === Infinity ?
            _maxExpireDate : new Date(now.getTime() + expires * 1000);
    } else if (typeof expires === 'string') {
        expires = new Date(expires);
    }
    return expires;
}
//判断是否过期
function _checkCacheItemIfEffective(cacheItem) {
    var timeNow = (new Date()).getTime();
    return timeNow < cacheItem.e;
}
// 格式化
function FormatCacheItem(value, exp) {
    this.c = (new Date()).getTime();
    exp = exp || _maxExpireDate;
    var expires = _getExpiresDate(exp);
    this.e = expires.getTime();
    this.v = value;
}

var storageAPI = {
    set: function (key, val, options) {
        if (val === undefined) {
            return this.delete(key);
        }
        var value = defaultSerializer.serialize(val);
        var cacheItem = new FormatCacheItem(value, options && options.exp || 60 * 60 * 24);
        try {
            storage.setItem(key, defaultSerializer.serialize(cacheItem));
        } catch (e) {
        }
        return val;
    },
    get: function (key) {
        var cacheItem = null;
        try {
            cacheItem = defaultSerializer.deserialize(storage.getItem(key));
        } catch (e) {
            return null;
        }

        if (cacheItem && _checkCacheItemIfEffective(cacheItem)) {
            var value = cacheItem.v;
            return defaultSerializer.deserialize(value);
        } else {
            this.delete(key);
        }
        return null;
    },
    delete: function (key) {
        storage.removeItem(key);
        return key;
    }
};
export default storageAPI;
