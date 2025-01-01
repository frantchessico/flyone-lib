export interface CreateShortLinkPayload {
    originalUrl: string;
    countriesTarget?: string[];
    expiresAt?: string;
    deviceType?: string[];
    title?: string;
    segmentId?: string;
    brandingLogo?: string;
}
export interface UpdateShortLinkPayload {
    customKey?: string;
    originalUrl?: string;
    countriesTarget?: {
        country: string;
        url: string;
        _id?: string;
    }[];
    deviceType?: {
        device: string;
        url: string;
        _id?: string;
    }[];
    [key: string]: any;
}
