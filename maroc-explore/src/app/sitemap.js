import { toursActivitiesLib } from './lib/toursActivitiesLib';
import { toursActivitiesLibFr } from './lib/toursActivitiesLibFr';

export default function sitemap() {
    const baseUrl = 'https://marocexplore.com'; // Replace with actual production URL

    // Base English routes
    const enRoutes = [
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

    // Base French routes
    const frRoutes = [
        '/fr',
        '/fr/circuits',
        '/fr/destinations',
        '/fr/experiences',
        '/fr/culture',
        '/fr/a-propos',
        '/fr/contact',
        '/fr/recherche',
        '/fr/blog'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: route === '/fr' ? 1 : 0.8,
    }));

    // Dynamic English Tour & Blog pages
    const enDynamicRoutes = toursActivitiesLib.flatMap((tour) => [
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

    // Dynamic French Tour & Blog pages
    const frDynamicRoutes = toursActivitiesLibFr.flatMap((tour) => [
        {
            url: `${baseUrl}/fr/circuits/${tour.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/fr/blog/${tour.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ]);

    return [...enRoutes, ...frRoutes, ...enDynamicRoutes, ...frDynamicRoutes];
}
