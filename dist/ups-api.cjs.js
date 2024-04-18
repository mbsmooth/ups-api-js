/**
 * UPS API (for Javascript) 1.0.3.
 *
 * Copyright (c) 2014-2024 Platforme International.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var path = require('path');
var process$1 = require('process');
var fetch = require('node-fetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespace(fs);
var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

/**
 * Yonius 0.11.7.
 *
 * Copyright (c) 2008-2022 Hive Solutions Lda.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

class Observable {
    constructor() {
        this.callbacks = {};
    }

    bind(event, callback) {
        const callbacks = this.callbacks[event] || [];
        callbacks.push(callback);
        this.callbacks[event] = callbacks;
        return callback;
    }

    unbind(event, callback) {
        const callbacks = this.callbacks[event] || [];
        if (!callback) {
            delete this.callbacks[event];
            return;
        }

        const index = callbacks.indexOf(callback);
        if (index === -1) {
            return;
        }
        callbacks.splice(index, 1);
        this.callbacks[event] = callbacks;
    }

    trigger(event) {
        const callbacks = this.callbacks[event] || [];
        const results = [];
        for (const callback of callbacks) {
            const result = callback.apply(this, Array.prototype.slice.call(arguments, 1));
            result !== undefined && result !== null && results.push(result);
        }
        return Promise.all(results);
    }
}

const verify = function(
    condition,
    message = null,
    code = null,
    exception = null,
    kwargs = {},
    safeKeys = ["message"]
) {
    if (condition) return;
    message = message || "Verification failed";
    const Exception = exception || Error;
    kwargs = Object.assign({}, kwargs);
    if (message !== null && message !== undefined) kwargs.message = message;
    if (code !== null && message !== undefined) kwargs.code = code;
    const throwable = new Exception(kwargs.message || undefined);
    throwable.kwargs = kwargs;
    for (const [key, value] of Object.entries(kwargs)) {
        if (safeKeys.includes(key) && throwable[key] !== undefined) {
            continue;
        }
        throwable[key] = value;
    }
    throw throwable;
};

let HOME_DIR = null;

const pathExists = async function(path) {
    try {
        await fs__namespace.promises.access(path);
    } catch (error) {
        return false;
    }
    return true;
};

const expandUser = function(path$1) {
    if (!path$1) return path$1;
    if (path$1 === "~") return _homeDir();
    if (path$1.slice(0, 2) !== "~/") return path$1;
    return path.join(HOME_DIR, path$1.slice(2));
};

const getEnv = function(name) {
    // eslint-disable-next-line no-undef
    if (typeof Deno !== "undefined") return Deno.env.get(name);
    return process$1.env[name];
};

const getEnvObject = function() {
    // eslint-disable-next-line no-undef
    if (typeof Deno !== "undefined") return Deno.env.toObject();
    return process$1.env;
};

const _homeDir = function() {
    if (HOME_DIR !== null) return HOME_DIR;
    const isWindows = Boolean(typeof process !== "undefined" && process.platform === "win32");
    HOME_DIR = getEnv(isWindows ? "USERPROFILE" : "HOME") || "/";
    return HOME_DIR;
};

const FILE_NAME = "yonius.json";

const HOME_FILE = "~/.home";

const IMPORT_NAMES = ["$import", "$include", "$IMPORT", "$INCLUDE"];

const CASTS = {
    int: v => (typeof v === "number" ? v : parseInt(v)),
    float: v => (typeof v === "number" ? v : parseFloat(v)),
    bool: v => (typeof v === "boolean" ? v : ["1", "true", "True"].includes(v)),
    list: v => (Array.isArray(v) ? v : v.split(";")),
    tuple: v => (Array.isArray(v) ? v : v.split(";"))
};

const globals =
    typeof global === "undefined"
        ? typeof window === "undefined"
            ? typeof self === "undefined"
                ? {}
                : self
            : window
        : global;

globals.CONFIGS = globals.CONFIGS === undefined ? {} : globals.CONFIGS;

globals.CONFIG_F = globals.CONFIG_F === undefined ? [] : globals.CONFIG_F;

globals.HOMES = globals.HOMES === undefined ? [] : globals.HOMES;

globals.LOADED = globals.LOADED === undefined ? false : globals.LOADED;

const conf = function(name, fallback = undefined, cast = null, ctx = null) {
    const configs = ctx ? ctx.configs : globals.CONFIGS;
    cast = _castR(cast);
    let value = configs[name] === undefined ? fallback : configs[name];
    if (cast && value !== undefined && value !== null) value = cast(value);
    return value;
};

const load$1 = async function(
    names = [FILE_NAME],
    path$1 = null,
    encoding = "utf-8",
    force = false,
    ctx = null
) {
    if (globals.LOADED && !force) return;
    let paths = [];
    const homes = await getHomes();
    for (const home of homes) {
        paths = paths.concat([path.join(home), path.join(home, ".config")]);
    }
    paths.push(path$1);
    for (const path of paths) {
        for (const name of names) {
            await loadFile(name, path, encoding, ctx);
        }
    }
    await loadEnv(ctx);
    globals.LOADED = true;
};

const loadFile = async function(
    name = FILE_NAME,
    path$1 = null,
    encoding = "utf-8",
    ctx = null
) {
    const configs = ctx ? ctx.configs : globals.CONFIGS;
    const configF = ctx ? ctx.configF : globals.CONFIG_F;

    let key;
    let value;
    let exists;
    let filePath;

    if (path$1) path$1 = path.normalize(path$1);
    if (path$1) filePath = path.join(path$1, name);
    else filePath = name;

    filePath = path.resolve(filePath);
    filePath = path.normalize(filePath);
    const basePath = path.dirname(filePath);

    exists = await pathExists(filePath);
    if (!exists) return;

    exists = configF.includes(filePath);
    if (exists) configF.splice(configF.indexOf(filePath), 1);
    configF.push(filePath);

    const data = await fs__namespace.promises.readFile(filePath, { encoding: encoding });
    const dataJ = JSON.parse(data);

    await _loadIncludes(basePath, dataJ, encoding);

    for ([key, value] of Object.entries(dataJ)) {
        if (!_isValid(key)) continue;
        configs[key] = value;
    }
};

const loadEnv = async function(ctx = null) {
    const env = getEnvObject();
    const configs = ctx ? ctx.configs : globals.CONFIGS;
    if (env === undefined || env === null) return;
    Object.entries(env).forEach(function([key, value]) {
        configs[key] = value;
    });
};

const getHomes = async function(
    filePath = HOME_FILE,
    fallback = "~",
    encoding = "utf-8",
    forceDefault = false
) {
    if (globals.HOMES.length > 0) return globals.HOMES;

    const env = getEnvObject();

    globals.HOMES = env.HOMES === undefined ? null : env.HOMES;
    globals.HOMES = globals.HOMES ? globals.HOMES.split(";") : globals.HOMES;
    if (globals.HOMES !== null) return globals.HOMES;

    fallback = expandUser(fallback);
    fallback = path.normalize(fallback);
    globals.HOMES = [fallback];

    filePath = expandUser(filePath);
    filePath = path.normalize(filePath);
    const exists = await pathExists(filePath);
    if (!exists) return globals.HOMES;

    if (!forceDefault) globals.HOMES.splice(0, globals.HOMES.length);

    let data = await fs__namespace.promises.readFile(filePath, { encoding: encoding });
    data = data.trim();

    let paths = data.split(/\r?\n/);
    paths = paths.map(v => v.trim());

    for (let path$1 of paths) {
        path$1 = path$1.trim();
        if (!path$1) continue;
        path$1 = expandUser(path$1);
        path$1 = path.normalize(path$1);
        globals.HOMES.push(path$1);
    }

    return globals.HOMES;
};

const _castR = function(cast) {
    return CASTS[cast] === undefined ? cast : CASTS[cast];
};

const _loadIncludes = async function(basePath, config, encoding = "utf-8") {
    let includes = [];

    for (const alias of IMPORT_NAMES) {
        includes = config[alias] === undefined ? includes : config[alias];
    }

    if (typeof includes === "string") {
        includes = includes.split(";");
    }

    for (const include of includes) {
        await loadFile(include, basePath, encoding);
    }
};

const _isValid = function(key) {
    if (IMPORT_NAMES.includes(key)) return false;
    return true;
};

class MixinBuilder {
    constructor(superclass) {
        this.superclass = superclass;
    }

    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}

const mix = superclass => new MixinBuilder(superclass);

/**
 * Encodes the multiple values as and encoded URI component, the
 * values can be wither defined as an array (order is preserved)
 * or as an object (where sequence order is not preserved).
 *
 * The value of each item can be either a primitive type or a sequence
 * in case it's of sequence the values are going to be encoded as
 * multiple parameters separated by the '&' character.
 *
 * @param {(Array|Object[])} values The values to be encoded as an
 * URI component (like GET params).
 * @returns {String} A string with the query encoded values.
 */
const urlEncode = function(values) {
    // constructs the parts array that is going to
    // store the multiple and values
    const parts = [];

    // in case the provided value is not an array
    // then assumes it's an object and retrieve entries
    if (!Array.isArray(values)) {
        values = Object.entries(values);
    }

    // iterates over the complete set of pairs available
    // from the key value pairs to be able to encode them
    // properly, notice that the values themselves can be
    // sequences allowing multiple repetition of key
    values.forEach(([key, value]) => {
        if (!Array.isArray(value)) {
            value = [value];
        }
        const keyEncoded = encodeURIComponent(key);
        value.forEach(_value => {
            if (_value === undefined || _value === null) {
                return;
            }
            const valueEncoded = encodeURIComponent(_value);
            parts.push(`${keyEncoded}=${valueEncoded}`);
        });
    });

    // joins the complete set of parts with the and
    // separator and then returns the final string value
    return parts.join("&");
};

class YoniusError extends Error {
    constructor(message, code = 500) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
    }

    get isClient() {
        return Math.floor(this.code / 100) === 4;
    }

    get isServer() {
        return Math.floor(this.code / 100) === 5;
    }
}

class OperationalError extends YoniusError {
    constructor(message = "Operational error", code = 500) {
        super(message, code);
    }
}

const AUTH_ERRORS = [401, 403, 440, 499];

class API$1 extends Observable {
    constructor(kwargs = {}) {
        super();
        this.kwargs = kwargs;
    }

    async build(method, url, options = {}) {}

    async authCallback(params, headers) {}

    async get(url, options = {}) {
        const result = await this.methodBasic("GET", url, options);
        return result;
    }

    async post(url, options = {}) {
        const result = await this.methodPayload("POST", url, options);
        return result;
    }

    async put(url, options = {}) {
        const result = await this.methodPayload("PUT", url, options);
        return result;
    }

    async delete(url, options = {}) {
        const result = await this.methodBasic("DELETE", url, options);
        return result;
    }

    async patch(url, options = {}) {
        const result = await this.methodPayload("PATCH", url, options);
        return result;
    }

    async options(url, options = {}) {
        const result = await this.methodBasic("OPTIONS", url, options);
        return result;
    }

    async methodBasic(method, url, options = {}) {
        options.params = options.params !== undefined ? options.params : {};
        options.headers = options.headers !== undefined ? options.headers : {};
        try {
            return await this._methodBasic(method, url, options);
        } catch (err) {
            if (AUTH_ERRORS.includes(err.code)) {
                await this.authCallback(options.params, options.headers);
                return await this._methodBasic(method, url, options);
            } else {
                throw err;
            }
        }
    }

    async methodPayload(method, url, options = {}) {
        options.params = options.params !== undefined ? options.params : {};
        options.headers = options.headers !== undefined ? options.headers : {};
        try {
            return await this._methodPayload(method, url, options);
        } catch (err) {
            if (AUTH_ERRORS.includes(err.code)) {
                await this.authCallback(options.params, options.headers);
                return await this._methodPayload(method, url, options);
            } else {
                throw err;
            }
        }
    }

    async _methodBasic(method, url, options = {}) {
        const params = options.params !== undefined ? options.params : {};
        const headers = options.headers !== undefined ? options.headers : {};
        const kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const handle = options.handle !== undefined ? options.handle : true;
        const getAgent = options.getAgent !== undefined ? options.getAgent : undefined;
        await this.build(method, url, {
            params: params,
            headers: headers,
            kwargs: kwargs
        });
        const query = urlEncode(params || {});
        if (query) url += url.includes("?") ? "&" + query : "?" + query;
        const response = await fetch__default["default"](url, {
            method: method,
            headers: headers || {},
            agent: getAgent || globals.getAgent || undefined
        });
        const result = handle ? await this._handleResponse(response) : response;
        return result;
    }

    async _methodPayload(method, url, options = {}) {
        const params = options.params !== undefined ? options.params : {};
        let headers = options.headers !== undefined ? options.headers : {};
        let data = options.data !== undefined ? options.data : null;
        const dataJ = options.dataJ !== undefined ? options.dataJ : null;
        const dataM = options.dataM !== undefined ? options.dataM : null;
        let mime = options.mime !== undefined ? options.mime : null;
        const kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const handle = options.handle !== undefined ? options.handle : true;
        const getAgent = options.getAgent !== undefined ? options.getAgent : undefined;

        await this.build(method, url, {
            params: params,
            headers: headers,
            data: data,
            dataJ: dataJ,
            dataM: dataM,
            mime: mime,
            kwargs: kwargs
        });

        const query = urlEncode(params || {});

        if (data !== null) {
            if (query) url += url.includes("?") ? "&" + query : "?" + query;
        } else if (dataJ !== null) {
            data = JSON.stringify(dataJ);
            if (query) url += url.includes("?") ? "&" + query : "?" + query;
            mime = mime || "application/json";
        } else if (dataM !== null) {
            if (query) url += url.includes("?") ? "&" + query : "?" + query;
            [mime, data] = this._encodeMultipart(dataM, mime, true);
        } else if (query) {
            data = query;
            mime = mime || "application/x-www-form-urlencoded";
        }

        headers = Object.assign({}, headers);
        if (mime) headers["Content-Type"] = mime;

        const response = await fetch__default["default"](url, {
            method: method,
            headers: headers || {},
            body: data,
            agent: getAgent || global.getAgent || undefined
        });
        const result = handle ? await this._handleResponse(response) : response;
        return result;
    }

    async _handleResponse(response, errorMessage = "Problem in request") {
        let result = null;
        if (
            response.headers.get("content-type") &&
            response.headers.get("content-type").toLowerCase().startsWith("application/json")
        ) {
            result = await response.json();
        } else if (
            response.headers.get("content-type") &&
            response.headers.get("content-type").toLowerCase().startsWith("text/")
        ) {
            result = await response.text();
        } else {
            result = await response.blob();
        }
        verify(response.ok, result.error || errorMessage, response.status || 500);
        return result;
    }

    _encodeMultipart(fields, mime = null, doseq = false) {
        mime = mime || "multipart/form-data";

        const boundary = this._createBoundary(fields, undefined, doseq);

        const encoder = new TextEncoder("utf-8");

        const buffer = [];

        for (let [key, values] of Object.entries(fields)) {
            const isList = doseq && Array.isArray(values);
            values = isList ? values : [values];

            for (let value of values) {
                if (value === null) continue;

                let header;

                if (
                    typeof value === "object" &&
                    !(value instanceof Array) &&
                    value.constructor !== Uint8Array
                ) {
                    const headerL = [];
                    let data = null;
                    for (const [key, item] of Object.entries(value)) {
                        if (key === "data") data = item;
                        else headerL.push(`${key}: ${item}`);
                    }
                    value = data;
                    header = headerL.join("\r\n");
                } else if (value instanceof Array) {
                    let name = null;
                    let contents = null;
                    let contentTypeD = null;
                    if (value.length === 2) [name, contents] = value;
                    else [name, contentTypeD, contents] = value;
                    header = `Content-Disposition: form-data; name="${key}"; filename="${name}"`;
                    if (contentTypeD) header += `\r\nContent-Type: ${contentTypeD}`;
                    value = contents;
                } else {
                    header = `Content-Disposition: form-data; name="${key}"`;
                    value = value.constructor === Uint8Array ? value : encoder.encode(value);
                }

                buffer.push(encoder.encode("--" + boundary + "\r\n"));
                buffer.push(encoder.encode(header + "\r\n"));
                buffer.push(encoder.encode("\r\n"));
                buffer.push(value);
                buffer.push(encoder.encode("\r\n"));
            }
        }

        buffer.push(encoder.encode("--" + boundary + "--\r\n"));
        buffer.push(encoder.encode("\r\n"));
        const body = this._joinBuffer(buffer);
        const contentType = `${mime}; boundary=${boundary}`;

        return [contentType, body];
    }

    _createBoundary(fields, size = 32, doseq = false) {
        return "Vq2xNWWHbmWYF644q9bC5T2ALtj5CynryArNQRXGYsfm37vwFKMNsqPBrpPeprFs";
    }

    _joinBuffer(bufferArray) {
        const bufferSize = bufferArray.map(item => item.byteLength).reduce((a, v) => a + v, 0);
        const buffer = new Uint8Array(bufferSize);
        let offset = 0;
        for (const item of bufferArray) {
            buffer.set(item, offset);
            offset += item.byteLength;
        }
        return buffer;
    }
}

const buildGetAgent = (AgentHttp, AgentHttps, set = true, options = {}) => {
    const httpAgent = new AgentHttp({
        keepAlive: options.keepAlive === undefined ? true : options.keepAlive,
        keepAliveMsecs: options.keepAliveMsecs || 120000,
        timeout: options.timeout || 60000,
        scheduling: options.scheduling || "fifo"
    });
    const httpsAgent = new AgentHttps({
        keepAlive: options.keepAlive === undefined ? true : options.keepAlive,
        keepAliveMsecs: options.keepAliveMsecs || 120000,
        timeout: options.timeout || 60000,
        scheduling: options.scheduling || "fifo"
    });
    const getAgent = parsedURL => (parsedURL.protocol === "http:" ? httpAgent : httpsAgent);
    if (set) globals.getAgent = getAgent;
    return getAgent;
};

/**
 * Tries to patch the global environment with a proper `getAgent`
 * function that can handle HTTP and HTTP connection polling.
 *
 * This can only be performed in a node.js environment (uses `require`).
 *
 * @returns {Function} The `getAgent` function that has just been
 * built and set in the globals.
 */
const patchAgent = () => {
    if (typeof require !== "function") return;
    if (globals.getAgent) return;
    let http, https;
    try {
        http = require("http");
        https = require("https");
    } catch (err) {
        return;
    }
    if (!http || !https) return;
    if (!http.Agent || !https.Agent) return;
    return buildGetAgent(http.Agent, https.Agent, true);
};

// patches the global agent if possible, using the
// global dynamic require statements
patchAgent();

const load = async function() {
    await load$1();
};

/**
 * Option type for access point search.
 */
const ACCESS_POINT_SEARCH = "64";

/**
 * Option type to sort by closest in search.
 */
const CLOSEST_POINT_SEARCH = "01";

const LocatorAPI = superclass =>
    class extends superclass {
        /**
         * Finds the nearest UPS Access Point to a given address.
         *
         * @param {String} addressLine The address from where the distance is measured.
         * @param {String} city The city from where the distance is measured.
         * @param {String} postalCode The postalCode from where the distance is measured.
         * @param {String} countryCode The countryCode from where the distance is measured.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async getNearestAccessPoint(addressLine, city, postalCode, countryCode, options = {}) {
            const url = `${this.baseUrl}locations/${this.version}/search/availabilities/${ACCESS_POINT_SEARCH}`;
            const payload = this._buildNearestAccessPointPayload(
                addressLine,
                city,
                postalCode,
                countryCode,
                options
            );
            const response = await this.post(url, {
                ...options,
                dataJ: payload
            });
            return response;
        }

        _buildNearestAccessPointPayload(
            addressLine,
            city,
            postalCode,
            countryCode,
            { consignee = null, locale = "en_US", metric = true, radius = 150 } = {}
        ) {
            const payload = {
                LocatorRequest: {
                    Request: {
                        RequestAction: "Locator",
                        RequestOption: ACCESS_POINT_SEARCH
                    },
                    OriginAddress: {
                        AddressKeyFormat: {
                            ConsigneeName: consignee,
                            AddressLine: addressLine,
                            PoliticalDivision2: city,
                            PostcodePrimaryLow: postalCode,
                            CountryCode: countryCode
                        }
                    },
                    Translate: {
                        Locale: locale
                    },
                    UnitOfMeasurement: { Code: metric ? "KM" : "MI" },
                    SortCriteria: { SortType: CLOSEST_POINT_SEARCH }
                }
            };
            return payload;
        }
    };

const SMALL_PACKAGE_SHIPMENT_TYPE = "1";
const FREIGHT_SHIPMENT_TYPE = "2";

const AUTH_FORM_DOC_TYPE = "001";
const INVOICE_DOC_TYPE = "002";
const CERTIFICATE_ORIGIN_DOC_TYPE = "003";
const EXPORT_ACCOMPANYING_DOC_TYPE = "004";
const EXPORT_LICENSE_DOC_TYPE = "005";
const IMPORT_PERMIT_DOC_TYPE = "006";
const ONE_TIME_NAFTA_DOC_TYPE = "007";
const OTHER_DOC_TYPE = "008";
const POWER_ATTORNEY_DOC_TYPE = "009";
const PACKING_LIST_DOC_TYPE = "010";
const SED_DOC_TYPE = "011";
const LETTER_INSTRUCTION_DOC_TYPE = "012";
const DECLARATION_DOC_TYPE = "013";

const PaperlessAPI = superclass =>
    class extends superclass {
        /**
         * Uploads a document to the UPS servers.
         * The uploaded document is returned and its ID can be
         * used to associate a shipment with the document.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async createDocument(payload, options = {}) {
            const url = `${this.baseUrl}paperlessdocuments/${this.version}/upload`;
            const response = await this.post(url, {
                ...options,
                dataJ: { UploadRequest: payload }
            });
            return response;
        }

        /**
         * Adds the already uploaded documents in the UPS servers to an
         * existing shipment.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async addDocumentShipment(payload, options = {}) {
            const url = `${this.baseUrl}paperlessdocuments/${this.version}/image`;
            const response = await this.post(url, {
                ...options,
                dataJ: { PushToImageRepositoryRequest: payload }
            });
            return response;
        }
    };

const PickupAPI = superclass =>
    class extends superclass {
        /**
         * Schedules a pickup for a parcel.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async schedulePickup(payload, options = {}) {
            const url = `${this.baseUrl}pickupcreation/${this.version}/pickup`;
            const response = await this.post(url, {
                ...options,
                dataJ: { PickupCreationRequest: payload }
            });
            return response;
        }
    };

/*
 * The code representing an express shipment.
 */
const EXPRESS_SERVICE_CODE = "007";

/*
 * The code representing a standard shipment.
 */
const STANDARD_SERVICE_CODE = "011";

/*
 * The code representing a saver shipment.
 */
const SAVER_SERVICE_CODE = "065";

/*
 * The code representing a shipment transportation charges.
 */
const TRANSPORTATION_CHARGE_TYPE = "01";

/*
 * The code representing a shipment duties and taxes charges.
 */
const DUTIES_CHARGE_TYPE = "02";

/**
 * The code representing a customer box
 * package.
 */
const CUSTOMER_BOX_PACKAGING_TYPE = "02";

/**
 * The code representing a padded box
 * package.
 */
const PAK_BOX_PACKAGING_TYPE = "03";

/**
 * The code representing an express box
 * package.
 */
const EXPRESS_BOX_PACKAGING_TYPE = "21";

/**
 * Represents kilograms.
 */
const KGS_TYPE = "KGS";

/**
 * Represents pounds.
 */
const LBS_TYPE = "LBS";

/**
 * The code for a shipment to hold at an UPS Access Point.
 */
const SHIPMENT_HOLD_ACCESS_POINT = "01";

/**
 * The code for the PRL UPS return service.
 */
const RETURN_PRL = "9";

/**
 * The code to send an in transit email notification.
 */
const NOTIFY_IN_TRANSIT = "5";

/**
 * The code to send a package shipped email notification.
 */
const NOTIFY_SHIP = "6";

/**
 * The code to send exception email notifications.
 */
const NOTIFY_EXCEPTION = "7";

/**
 * The code to send a package delivered email notification.
 */
const NOTIFY_DELIVERY = "8";

/**
 * The code to send a delivery email notification when the package is at the Access Point.
 */
const NOTIFY_ACCESS_POINT_DELIVERY = "012";

/**
 * The code for a purchase order code value to
 * be used in reference number specification.
 */
const PURCHASE_ORDER = "PO";

/**
 * The code for a production code code value to
 * be used in reference number specification.
 */
const PRODUCTION_CODE = "PC";

/**
 * The code for reason for export.
 */
const REASON_FOR_EXPORT = {
    SALE: "SALE",
    GIFT: "GIFT",
    SAMPLE: "SAMPLE",
    RETURN: "RETURN",
    REPAIR: "REPAIR",
    INTERCOMPANY_DATA: "INTERCOMPANYDATA",
    ANY: "Any other reason"
};

/**
 * The code for form types to be used in international shipping.
 */
const INTERNATIONAL_FORM_TYPE = {
    USER_CREATED_FORM: "07",
    FULL_INVOICE: "01"
};

const ShipmentAPI = superclass =>
    class extends superclass {
        /**
         * Creates a shipment and associated UPS waybill.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async createShipment(payload, options = {}) {
            const url = `${this.baseUrl}shipments/${this.version}/ship`;
            const response = await this.post(url, {
                ...options,
                dataJ: { ShipmentRequest: payload }
            });
            return response;
        }

        /**
         * Cancels (voids) an existing shipment and associated UPS waybill.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async cancelShipment(trackingNumber, options = {}) {
            const url = `${this.baseUrl}shipments/${this.version}/void/cancel/${trackingNumber}`;
            const response = await this.delete(url, options);
            return response;
        }

        /**
         * Gets the waybill for an existing shipment.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async getWaybill(trackingNumber, { format = "pdf", ...options } = {}) {
            const url = `${this.baseUrl}labels/${this.version}/recovery`;
            const response = await this.post(url, {
                ...options,
                dataJ: {
                    LabelRecoveryRequest: {
                        TrackingNumber: String(trackingNumber),
                        LabelSpecification: {
                            LabelImageFormat: {
                                Code: format.toUpperCase()
                            }
                        }
                    }
                }
            });
            return response;
        }
    };

/**
 * Shipment was picked up.
 */
const STATUS_PICKUP = "P";

/**
 * Shipment out for delivery.
 */
const STATUS_OUT_FOR_DELIVERY = "O";

/**
 * Shipment in transit.
 */
const STATUS_IN_TRANSIT = "I";

/**
 * Shipment exception.
 */
const STATUS_EXCEPTION = "X";

/**
 * Shipment delivered.
 */
const STATUS_DELIVERED = "D";

/**
 * Shipment returned to shipper.
 */
const STATUS_RETURNED = "RS";

const TrackingAPI = superclass =>
    class extends superclass {
        /**
         * Gets the tracking information for an existing shipment.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async getTrackingDetails(trackingNumber, options = {}) {
            const url = `${this.baseUrl}track/${this.version}/details/${trackingNumber}`;
            const response = await this.get(url, options);
            return response;
        }

        /**
         * Gets the tracking URL given a tracking number.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @returns {String} The tracking URL.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        getTrackingUrl(trackingNumber) {
            return `https://www.ups.com/track?InquiryNumber1=${trackingNumber}`;
        }
    };

/**
 * The base auth URL used for the OAuth token request.
 */
const AUTH_URL = "https://onlinetools.ups.com/";

/**
 * The base URL used for API requests.
 */
const BASE_URL = "https://onlinetools.ups.com/api/";

/**
 * The version of the API to use.
 */
const API_VERSION = "v1";

/**
 * The application grant type to obtain the token.
 */
const GRANT_TYPE = "client_credentials";

class API extends mix(API$1).with(
    LocatorAPI,
    PaperlessAPI,
    PickupAPI,
    ShipmentAPI,
    TrackingAPI
) {
    constructor(kwargs = {}) {
        super(kwargs);

        this.authUrl = conf("UPS_AUTH_URL", AUTH_URL);
        this.baseUrl = conf("UPS_BASE_URL", BASE_URL);
        this.version = conf("UPS_API_VERSION", API_VERSION);
        this.clientId = conf("UPS_CLIENT_ID", null);
        this.clientSecret = conf("UPS_CLIENT_SECRET", null);
        this.grantType = conf("UPS_GRANT_TYPE", GRANT_TYPE);
        this.token = conf("UPS_TOKEN", null);
        this.transactionSrc = conf("UPS_TRANSACTION_SRC", null);

        this.authUrl = kwargs.authUrl === undefined ? this.authUrl : kwargs.authUrl;
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.version = kwargs.version === undefined ? this.version : kwargs.version;
        this.clientId = kwargs.clientId === undefined ? this.clientId : kwargs.clientId;
        this.clientSecret =
            kwargs.clientSecret === undefined ? this.clientSecret : kwargs.clientSecret;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
        this.transactionSrc =
            kwargs.transactionSrc === undefined ? this.transactionSrc : kwargs.transactionSrc;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);

        if (this.token) options.headers.Authorization = this._bearerAuth();

        const transactionSrc = options.headers.transactionSrc || this.transactionSrc;
        if (transactionSrc) options.headers.transactionSrc = transactionSrc;

        // add some fields to the header that UPS requires
        if(!options.headers.transId) options.headers.transId = this.makeid(14);
        if(!options.headers.transactionSrc) options.headers.transactionSrc = 'DEFAULT';
        
    }
    
    makeid(len){
        var result           = '';
        var char       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charLen = char.length;
        for ( var i = 0; i < len; i++ ) {
            result += char.charAt(Math.floor(Math.random() * 
            charLen));
        }
        return result;
    }

    async authCallback(params, headers) {
        // forces the refetch of the authorization
        // token from the auth API
        this.token = null;
        await this.getToken();
    }

    async getToken() {
        if (this.token) return this.token;

        const url = `${this.authUrl}security/${this.version}/oauth/token`;
        const data = `grant_type=${this.grantType}`;
        const options = {
            headers: {
                Authorization: this._basicAuth()
            },
            data: data,
            mime: "application/x-www-form-urlencoded"
        };

        const contents = await this.post(url, options);
        this.token = contents.access_token;

        return this.token;
    }

    async _handleResponse(response, errorMessage = "Problem in request") {
        const result = await this._getResult(response);
        if (!response.ok) {
            let error = null;
            try {
                error = JSON.stringify(result);
            } catch {
                error = errorMessage;
            }
            throw new OperationalError(error, response.status || 500);
        }
        return result;
    }

    /**
     * Obtains the response object from the provided response making sure that the
     * content type is respected when doing so.
     *
     * @param {Response} response The HTTP response resulting from the request
     * made by the API client
     * @returns {Object|String|Blob} The parsed result value for the provided
     * response object taking into account the content type of it.
     */
    async _getResult(response) {
        let result = null;
        if (
            response.headers.get("content-type") &&
            response.headers.get("content-type").toLowerCase().startsWith("application/json")
        ) {
            result = await response.json();
        } else if (
            response.headers.get("content-type") &&
            response.headers.get("content-type").toLowerCase().startsWith("text/")
        ) {
            result = await response.text();
        } else {
            result = await response.blob();
        }
        return result;
    }

    _basicAuth() {
        const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64");
        return `Basic ${auth}`;
    }

    _bearerAuth() {
        return `Bearer ${this.token}`;
    }
}

exports.ACCESS_POINT_SEARCH = ACCESS_POINT_SEARCH;
exports.API = API;
exports.AUTH_FORM_DOC_TYPE = AUTH_FORM_DOC_TYPE;
exports.CERTIFICATE_ORIGIN_DOC_TYPE = CERTIFICATE_ORIGIN_DOC_TYPE;
exports.CLOSEST_POINT_SEARCH = CLOSEST_POINT_SEARCH;
exports.CUSTOMER_BOX_PACKAGING_TYPE = CUSTOMER_BOX_PACKAGING_TYPE;
exports.DECLARATION_DOC_TYPE = DECLARATION_DOC_TYPE;
exports.DUTIES_CHARGE_TYPE = DUTIES_CHARGE_TYPE;
exports.EXPORT_ACCOMPANYING_DOC_TYPE = EXPORT_ACCOMPANYING_DOC_TYPE;
exports.EXPORT_LICENSE_DOC_TYPE = EXPORT_LICENSE_DOC_TYPE;
exports.EXPRESS_BOX_PACKAGING_TYPE = EXPRESS_BOX_PACKAGING_TYPE;
exports.EXPRESS_SERVICE_CODE = EXPRESS_SERVICE_CODE;
exports.FREIGHT_SHIPMENT_TYPE = FREIGHT_SHIPMENT_TYPE;
exports.IMPORT_PERMIT_DOC_TYPE = IMPORT_PERMIT_DOC_TYPE;
exports.INTERNATIONAL_FORM_TYPE = INTERNATIONAL_FORM_TYPE;
exports.INVOICE_DOC_TYPE = INVOICE_DOC_TYPE;
exports.KGS_TYPE = KGS_TYPE;
exports.LBS_TYPE = LBS_TYPE;
exports.LETTER_INSTRUCTION_DOC_TYPE = LETTER_INSTRUCTION_DOC_TYPE;
exports.LocatorAPI = LocatorAPI;
exports.NOTIFY_ACCESS_POINT_DELIVERY = NOTIFY_ACCESS_POINT_DELIVERY;
exports.NOTIFY_DELIVERY = NOTIFY_DELIVERY;
exports.NOTIFY_EXCEPTION = NOTIFY_EXCEPTION;
exports.NOTIFY_IN_TRANSIT = NOTIFY_IN_TRANSIT;
exports.NOTIFY_SHIP = NOTIFY_SHIP;
exports.ONE_TIME_NAFTA_DOC_TYPE = ONE_TIME_NAFTA_DOC_TYPE;
exports.OTHER_DOC_TYPE = OTHER_DOC_TYPE;
exports.PACKING_LIST_DOC_TYPE = PACKING_LIST_DOC_TYPE;
exports.PAK_BOX_PACKAGING_TYPE = PAK_BOX_PACKAGING_TYPE;
exports.POWER_ATTORNEY_DOC_TYPE = POWER_ATTORNEY_DOC_TYPE;
exports.PRODUCTION_CODE = PRODUCTION_CODE;
exports.PURCHASE_ORDER = PURCHASE_ORDER;
exports.PaperlessAPI = PaperlessAPI;
exports.PickupAPI = PickupAPI;
exports.REASON_FOR_EXPORT = REASON_FOR_EXPORT;
exports.RETURN_PRL = RETURN_PRL;
exports.SAVER_SERVICE_CODE = SAVER_SERVICE_CODE;
exports.SED_DOC_TYPE = SED_DOC_TYPE;
exports.SHIPMENT_HOLD_ACCESS_POINT = SHIPMENT_HOLD_ACCESS_POINT;
exports.SMALL_PACKAGE_SHIPMENT_TYPE = SMALL_PACKAGE_SHIPMENT_TYPE;
exports.STANDARD_SERVICE_CODE = STANDARD_SERVICE_CODE;
exports.STATUS_DELIVERED = STATUS_DELIVERED;
exports.STATUS_EXCEPTION = STATUS_EXCEPTION;
exports.STATUS_IN_TRANSIT = STATUS_IN_TRANSIT;
exports.STATUS_OUT_FOR_DELIVERY = STATUS_OUT_FOR_DELIVERY;
exports.STATUS_PICKUP = STATUS_PICKUP;
exports.STATUS_RETURNED = STATUS_RETURNED;
exports.ShipmentAPI = ShipmentAPI;
exports.TRANSPORTATION_CHARGE_TYPE = TRANSPORTATION_CHARGE_TYPE;
exports.TrackingAPI = TrackingAPI;
//# sourceMappingURL=ups-api.cjs.js.map
