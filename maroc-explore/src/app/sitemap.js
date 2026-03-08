import { toursActivitiesLib } from './lib/toursActivitiesLib';

export default function sitemap() {
    const baseUrl = 'https://marocexplore.com'; // Replace with actual production URL

    // Base routes
    const routes = [
        '',
        '/tours',
        '/destinations',
        '/experiences',
        '/culture',
        '/about',
        '/contact',
        '/filter',
        '/blogs'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Tour & Blog pages
    const dynamicRoutes = toursActivitiesLib.flatMap((tour) => [
        {
            url: `${baseUrl}/tours/${tour.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blogs/${tour.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ]);

    return [...routes, ...dynamicRoutes];
}
