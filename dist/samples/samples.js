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
Object.defineProperty(exports, "__esModule", { value: true });
const Flyone_1 = require("../client/Flyone");
function sampleUsage() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new Flyone_1.Flyone({
            apiKey: "629a1b88-1ecc-4217-bdfb-cc7502e447b6",
            orgId: "6759ae75cad71424442ff708",
        });
        try {
            console.log("=== Creating a new short link ===");
            const newLink = yield client.createShortLink({
                originalUrl: "https://example.com",
                title: "Example Link",
            });
            console.log("Created Link:", newLink);
            // console.log("=== Fetching all links ===");
            // const links = await client.getAllLinks();
            // console.log("All Links:", links);
            // console.log("=== Fetching a specific link ===");
            // const link = await client.getLinkById(newLink.id);
            // console.log("Link Details:", link);
            // console.log("=== Updating the link ===");
            // const updatedLink = await client.updateShortLink(newLink.id, {
            //   title: "Updated Example Link",
            // });
            // console.log("Updated Link:", updatedLink);
            // console.log("=== Deleting the link ===");
            // await client.deleteShortLink(newLink.id);
            // console.log("Link deleted successfully.");
        }
        catch (error) {
            console.error("Error during sample usage:", error);
        }
    });
}
// Run the sample when this file is executed
sampleUsage();
