export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const key = request.headers.get('X-Sync-Key');

        if (!key) {
            return new Response('Unauthorized', { status: 401 });
        }

        // CORS headers
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Sync-Key',
        };

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        const kvKey = `user:${key}`;

        if (request.method === 'GET') {
            const data = await env.USERS_KV.get(kvKey);
            return new Response(data || '{}', {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        if (request.method === 'POST') {
            const data = await request.json();
            await env.USERS_KV.put(kvKey, JSON.stringify(data));
            return new Response('Saved', { headers: corsHeaders });
        }

        return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }
};
