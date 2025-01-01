"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Flyone_1 = require("../src/client/Flyone");
describe('FlyoneClient', () => {
    it('should initialize correctly', () => {
        const client = new Flyone_1.Flyone({
            apiKey: 'test-key',
            orgId: 'test-org',
        });
        expect(client).toBeDefined();
    });
});
