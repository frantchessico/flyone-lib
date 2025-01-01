import axios, { AxiosInstance, AxiosError } from "axios";
import { BASE_URL } from "../config/constants";
import { CreateShortLinkPayload, UpdateShortLinkPayload } from "../interfaces/Payloads";
import { FlyoneConfig } from "../interfaces/ClientConfig";

class Flyone {
  private apiKey: string;
  private orgId: string;
  private axiosInstance: AxiosInstance;

  constructor(config: FlyoneConfig) {
    this.apiKey = config.apiKey;
    this.orgId = config.orgId;

    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        flyone_api_key: `SavanaPoint ${this.apiKey}`,
        flyone_org_id: this.orgId,
      },
    });
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      const errorData = error.response.data as { message?: string };
      console.error("API Response Error:", errorData);
      throw new Error(`API Error: ${errorData.message || "Unknown error"}`);
    } else if (error.request) {
      console.error("No Response from API:", error.request);
      throw new Error("No response received from API.");
    } else {
      console.error("Error during request setup:", error.message);
      throw new Error(`Request setup error: ${error.message}`);
    }
  }

  async createShortLink(payload: CreateShortLinkPayload) {
    try {
      const response = await this.axiosInstance.post(`/shortens/${this.orgId}`, payload);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async updateShortLink(linkId: string, payload: UpdateShortLinkPayload) {
    try {
      const response = await this.axiosInstance.put(`/shortens/${linkId}/${this.orgId}`, payload);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async deleteShortLink(linkId: string) {
    try {
      const response = await this.axiosInstance.delete(`/shortens/${linkId}/${this.orgId}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async getAllLinks() {
    try {
      const response = await this.axiosInstance.get(`/shortens/all`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async getLinksByOrganization() {
    try {
      const response = await this.axiosInstance.get(`/shortens/${this.orgId}/all`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async getLinkById(linkId: string) {
    try {
      const response = await this.axiosInstance.get(`/shortens/${linkId}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async getClicksOverTime(linkId: string) {
    try {
      const response = await this.axiosInstance.get(`/shortens/clicks-over-time/${linkId}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async removeDevice(linkId: string, deviceId: string) {
    try {
      const response = await this.axiosInstance.delete(`/shortens/${linkId}/${this.orgId}/device/${deviceId}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async removeCountry(linkId: string, countryId: string) {
    try {
      const response = await this.axiosInstance.delete(`/shortens/${linkId}/${this.orgId}/country/${countryId}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }
}

export { Flyone };
