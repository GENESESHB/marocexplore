
const tour = {
    title: 'Marrakech Medina Tour',
    fullDescription: 'Discover the "Red City" with our expert local guides...',
    image: '/images/maroc_explore-img/marrakech/marrakech-tours-trips-jamaaelfna.avif',
    price: 89,
    slug: 'marrakech-medina-tour',
    rating: 4.8,
    reviews: 256
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tour.title,
    description: tour.fullDescription || tour.description,
    image: `https://marocexplore.com${tour.image}`,
    brand: {
        '@type': 'Brand',
        name: 'Maroc Explore'
    },
    offers: {
        '@type': 'Offer',
        price: tour.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `https://marocexplore.com/tours/${tour.slug}`
    },
    aggregateRating: tour.reviews ? {
        '@type': 'AggregateRating',
        ratingValue: tour.rating,
        reviewCount: tour.reviews,
    } : undefined,
};

console.log(JSON.stringify(jsonLd, null, 2));
