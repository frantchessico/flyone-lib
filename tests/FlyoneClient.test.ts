import { Flyone } from '../src/client/Flyone';

describe('FlyoneClient', () => {
  it('should initialize correctly', () => {
    const client = new Flyone({
      apiKey: 'test-key',
      orgId: 'test-org',
    });

    expect(client).toBeDefined();
  });
});
