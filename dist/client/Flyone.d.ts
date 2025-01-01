import { CreateShortLinkPayload, UpdateShortLinkPayload } from "../interfaces/Payloads";
import { FlyoneConfig } from "../interfaces/ClientConfig";
declare class Flyone {
    private apiKey;
    private orgId;
    private axiosInstance;
    constructor(config: FlyoneConfig);
    private handleError;
    createShortLink(payload: CreateShortLinkPayload): Promise<any>;
    updateShortLink(linkId: string, payload: UpdateShortLinkPayload): Promise<any>;
    deleteShortLink(linkId: string): Promise<any>;
    getAllLinks(): Promise<any>;
    getLinksByOrganization(): Promise<any>;
    getLinkById(linkId: string): Promise<any>;
    getClicksOverTime(linkId: string): Promise<any>;
    removeDevice(linkId: string, deviceId: string): Promise<any>;
    removeCountry(linkId: string, countryId: string): Promise<any>;
}
export { Flyone };
//# sourceMappingURL=Flyone.d.ts.map