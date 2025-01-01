"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flyone = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../config/constants");
class Flyone {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.orgId = config.orgId;
        this.axiosInstance = axios_1.default.create({
            baseURL: constants_1.BASE_URL,
            headers: {
                flyone_api_key: `SavanaPoint ${this.apiKey}`,
                flyone_org_id: this.orgId,
            },
        });
    }
    handleError(error) {
        if (error.response) {
            const errorData = error.response.data;
            console.error("API Response Error:", errorData);
            throw new Error(`API Error: ${errorData.message || "Unknown error"}`);
        }
        else if (error.request) {
            console.error("No Response from API:", error.request);
            throw new Error("No response received from API.");
        }
        else {
            console.error("Error during request setup:", error.message);
            throw new Error(`Request setup error: ${error.message}`);
        }
    }
    createShortLink(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/shortens/${this.orgId}`, payload);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    updateShortLink(linkId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put(`/shortens/${linkId}/${this.orgId}`, payload);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    deleteShortLink(linkId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/shortens/${linkId}/${this.orgId}`);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    getAllLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/shortens/all`);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    getLinksByOrganization() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/shortens/${this.orgId}/all`);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    getLinkById(linkId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/shortens/${linkId}`);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    getClicksOverTime(linkId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/shortens/clicks-over-time/${linkId}`);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    removeDevice(linkId, deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/shortens/${linkId}/${this.orgId}/device/${deviceId}`);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    removeCountry(linkId, countryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/shortens/${linkId}/${this.orgId}/country/${countryId}`);
                return response.data;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
}
exports.Flyone = Flyone;
