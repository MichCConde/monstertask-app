import { initializeApp } from 'firebase-admin/app';
import { setGlobalOptions } from 'firebase-functions/v2';
import { onRequest } from 'firebase-functions/v2/https';

// Initialize Admin SDK once for all functions
initializeApp();

// Region closest to Philippines for low latency
setGlobalOptions({
  region: 'asia-southeast1',
  maxInstances: 10,
});

// Simple healthcheck — proves the pipeline works end-to-end
export const healthcheck = onRequest((_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'monstertask-functions',
  });
});

// Real functions get exported here as you build them:
// export { onUserCreate } from './auth/onUserCreate';
// export { mintLiveKitToken } from './integrations/livekit/mintToken';