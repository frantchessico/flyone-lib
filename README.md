# Flyone Library

Flyone is a TypeScript-based library for interacting with the Flyone API, providing seamless integration and functionality for link management.

## Features

- Create links
- Update existing links
- Delete links
- Fetch all links or specific links by ID
- Track clicks over time
- Manage device-specific and country-specific targeting

## Installation

Install the library via npm or yarn:

```bash
npm install flyone
```

or

```bash
yarn add flyone
```

## Usage

### Importing the Library

```typescript
import { Flyone } from "flyone";
```

### Initializing the Flyone Instance

```typescript
const flyone = new Flyone({
  apiKey: "SavanaPoint Your-API-Key-Here",
  orgId: "Your-Organization-Id-Here",
});
```

### Examples

#### Create a Short Link

```typescript
const newLink = await flyone.createShortLink({
  originalUrl: "https://example.com",
  title: "My Example Link",
});
console.log("Created Link:", newLink);
```

#### Fetch All Links

```typescript
const links = await flyone.getAllLinks();
console.log("All Links:", links);
```

#### Get a Link by ID

```typescript
const link = await flyone.getLinkById("link-id-here");
console.log("Link Details:", link);
```

#### Update a Short Link

```typescript
const updatedLink = await flyone.updateShortLink("link-id-here", {
  title: "Updated Title",
});
console.log("Updated Link:", updatedLink);
```

#### Delete a Short Link

```typescript
await flyone.deleteShortLink("link-id-here");
console.log("Link deleted successfully.");
```

#### Track Clicks Over Time

```typescript
const clicks = await flyone.getClicksOverTime("link-id-here");
console.log("Clicks Over Time:", clicks);
```

#### Remove a Device Target

```typescript
await flyone.removeDevice("link-id-here", "device-id-here");
console.log("Device removed successfully.");
```

#### Remove a Country Target

```typescript
await flyone.removeCountry("link-id-here", "country-id-here");
console.log("Country removed successfully.");
```

## Error Handling

Errors are handled using a centralized mechanism. In case of an error, the library will throw an exception with a descriptive message. Below are the possible error messages and their corresponding HTTP status codes:

| Status Code | Message                               | Description                                      |
|-------------|---------------------------------------|--------------------------------------------------|
| 400         | Invalid request parameters           | The request payload is invalid.                 |
| 401         | Unauthorized                         | The API key or organization ID is missing/invalid.|
| 403         | Forbidden                            | You do not have permission to perform this action.|
| 404         | Resource not found                   | The requested resource does not exist.          |
| 500         | Internal server error                | An unexpected error occurred on the server.     |
| 503         | Service unavailable                  | The service is temporarily unavailable.         |

### Example Error Handling

```typescript
try {
  await flyone.createShortLink({
    originalUrl: "https://example.com",
    title: "My Example Link",
  });
} catch (error) {
  console.error("Error creating link:", error.message);
}
```

## Configuration Options

### FlyoneConfig

| Property | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| `apiKey` | string | Your API key for authentication. |
| `orgId`  | string | The ID of your organization.     |

## Development

### Running Tests

Tests are written using Jest. To run the tests, use:

```bash
npm test
```

or

```bash
yarn test
```

### Building the Library

To build the library for production:

```bash
npm run build
```

or

```bash
yarn build
```

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes with clear commit messages.
4. Submit a pull request.

## License

This library is licensed under the MIT License. See the LICENSE file for details.

