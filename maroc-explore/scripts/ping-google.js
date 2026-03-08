const https = require('https');

// The official Maroc Explore sitemap URL
const sitemapUrl = 'https://marocexplore.com/sitemap.xml';

// Google Indexing API Ping Endpoint
const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

console.log(`[SEO Autopilot] Pinging Google to index: ${sitemapUrl}...`);

https.get(pingUrl, (res) => {
    if (res.statusCode === 200) {
        console.log('[SEO Autopilot] Successfully submitted sitemap to Google!');
    } else {
        console.warn(`[SEO Autopilot] Received status code ${res.statusCode} from Google.`);
    }
}).on('error', (err) => {
    console.error('[SEO Autopilot] Failed to ping Google:', err.message);
});
