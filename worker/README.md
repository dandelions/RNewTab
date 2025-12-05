# Cloudflare Worker Deployment

## Setup

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Create KV Namespace:**
   ```bash
   wrangler kv:namespace create "SYNC_KV"
   ```
   
   Copy the namespace ID and update `wrangler.toml`:
   ```toml
   kv_namespaces = [
     { binding = "SYNC_KV", id = "your_actual_kv_namespace_id" }
   ]
   ```

4. **Deploy Worker:**
   ```bash
   cd worker
   wrangler deploy
   ```

5. **Get Worker URL:**
   After deployment, you'll get a URL like:
   ```
   https://newtab-sync-worker.your-subdomain.workers.dev
   ```

6. **Update Frontend:**
   Copy this URL and update `src/services/syncService.js`:
   ```javascript
   const WORKER_URL = 'https://newtab-sync-worker.your-subdomain.workers.dev';
   ```

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/sync/pull` - Pull sync data (requires auth)
- `POST /api/sync/push` - Push sync data (requires auth)

## Testing

Test with curl:

```bash
# Register
curl -X POST https://your-worker.workers.dev/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Login
curl -X POST https://your-worker.workers.dev/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Pull (use token from login response)
curl -X GET https://your-worker.workers.dev/api/sync/pull \
  -H "Authorization: Bearer YOUR_TOKEN"

# Push
curl -X POST https://your-worker.workers.dev/api/sync/push \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"shortcuts":[],"gridConfig":{},"bgConfig":{},"bgUrl":""}'
```
