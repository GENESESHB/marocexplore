'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/Header';
import { toursActivitiesLibFr as toursActivitiesLib, getFilteredToursFr as getFilteredTours } from '@/app/lib/toursActivitiesLibFr';
import styles from './FilterPage.module.css';

function FilterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredTours, setFilteredTours] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [filters, setFilters] = useState({
    destination: '',
    duration: '',
    activity: '',
    q: ''
  });

  // Get unique values and counts from toursActivitiesLib
  const getFilterOptions = () => {
    const destinations = {};
    const durations = {};
    const activities = {};

    toursActivitiesLib.forEach(tour => {
      destinations[tour.location] = (destinations[tour.location] || 0) + 1;
      const durationNum = tour.durationDays.toString();
      durations[durationNum] = (durations[durationNum] || 0) + 1;
      activities[tour.activity] = (activities[tour.activity] || 0) + 1;
    });

    return {
      destinations: Object.entries(destinations).map(([name, count]) => ({
        id: name.toLowerCase(),
        name,
        count
      })).sort((a, b) => b.count - a.count),
      durations: Object.entries(durations).map(([value, count]) => ({
        value,
        label: value === '1' ? '1 Day' : `${value} Days`,
        count
      })).sort((a, b) => parseInt(a.value) - parseInt(b.value)),
      activities: Object.entries(activities).map(([id, count]) => ({
        id,
        label: id.charAt(0).toUpperCase() + id.slice(1),
        count
      })).sort((a, b) => b.count - a.count)
    };
  };

  const filterOptions = getFilterOptions();

  useEffect(() => {
    const newFilters = {
      destination: searchParams.get('destination') || '',
      duration: searchParams.get('duration') || '',
      activity: searchParams.get('activity') || '',
      q: searchParams.get('q') || ''
    };

    setFilters(newFilters);
    setFilteredTours(getFilteredTours(newFilters));
  }, [searchParams]);

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value === filters[key] ? '' : value };
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    router.push(`/filter?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/filter');
  };

  const getHeroImage = () => {
    if (filters.destination) {
      const tour = toursActivitiesLib.find(t =>
        t.location.toLowerCase() === filters.destination.toLowerCase()
      );
      return tour?.image || '/images/maroc_explore-img/merzouga/maroc-explore-merzouga-trip-camel-ride.avif';
    }
    return '/images/maroc_explore-img/merzouga/maroc-explore-merzouga-trip-camel-ride.avif';
  };

  const getDestinationName = (id) => filterOptions.destinations.find(d => d.id === id)?.name || id;
  const getActivityLabel = (id) => filterOptions.activities.find(a => a.id === id)?.label || id;
  const getDuréeLabel = (val) => filterOptions.durations.find(d => d.value === val)?.label || val;

  // Check if any filter is active
  const hasActiveFilters = filters.destination || filters.duration || filters.activity || filters.q;

  return (
    <div suppressHydrationWarning className={styles.page}>
      <Header />

      {/* FULL WIDTH HERO */}
      <div className={styles.hero}>
        <img src={getHeroImage()} alt="Hero" className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          {/* Title: "Discover Morocco" by default, destination name when filtered */}
          <h1>
            {hasActiveFilters && filters.destination
              ? getDestinationName(filters.destination)
              : 'Discover Morocco'}
          </h1>

          {/* Subtitle: Total count by default, filtered count when filtered */}
          <p>
            {hasActiveFilters
              ? `${filteredTours.length} amazing tour${filteredTours.length !== 1 ? 's' : ''} found`
              : `${toursActivitiesLib.length} amazing tour${toursActivitiesLib.length !== 1 ? 's' : ''} found`}
          </p>

          {/* Active Filters Tags - only show when filters are active */}
          {hasActiveFilters && (
            <div className={styles.tags}>
              {filters.destination && (
                <span className={styles.tag} onClick={() => updateFilter('destination', '')}>
                  {getDestinationName(filters.destination)}
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              )}
              {filters.duration && (
                <span className={styles.tag} onClick={() => updateFilter('duration', '')}>
                  {getDuréeLabel(filters.duration)}
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              )}
              {filters.activity && (
                <span className={styles.tag} onClick={() => updateFilter('activity', '')}>
                  {getActivityLabel(filters.activity)}
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              )}
              {filters.q && (
                <span className={styles.tag} onClick={() => updateFilter('q', '')}>
                  "{filters.q}"
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              )}
              <button onClick={clearFilters} className={styles.clearAll}>Clear all</button>
            </div>
          )}

          {/* Back to Home - NOW AT BOTTOM */}
          <Link href="/fr" className={styles.backLinkBottom}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* CONTENT AREA: Sidebar + Tours */}
      <div className={styles.contentArea}>
        {/* Mobile Filter Toggle */}
        <button
          className={styles.mobileFilterBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>

        {/* SIDEBAR */}
        <aside className={`${styles.sidebar} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.sidebarHeader}>
            <h2>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter Tours
            </h2>
            {hasActiveFilters && (
              <button onClick={clearFilters} className={styles.resetBtn}>
                Reset
              </button>
            )}
          </div>

          {/* Search */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </label>
            <div className={styles.searchInput}>
              <input
                type="text"
                placeholder="Search tours..."
                value={filters.q}
                onChange={(e) => updateFilter('q', e.target.value)}
              />
            </div>
          </div>

          {/* Destinations */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Destinations
            </label>
            <div className={styles.filterList}>
              {filterOptions.destinations.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => updateFilter('destination', dest.id)}
                  className={`${styles.filterItem} ${filters.destination === dest.id ? styles.active : ''}`}
                >
                  <span className={styles.check}>
                    {filters.destination === dest.id && (
                      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={styles.name}>{dest.name}</span>
                  <span className={styles.count}>{dest.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Durée */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Durée
            </label>
            <div className={styles.filterList}>
              {filterOptions.durations.map((dur) => (
                <button
                  key={dur.value}
                  onClick={() => updateFilter('duration', dur.value)}
                  className={`${styles.filterItem} ${filters.duration === dur.value ? styles.active : ''}`}
                >
                  <span className={styles.check}>
                    {filters.duration === dur.value && (
                      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={styles.name}>{dur.label}</span>
                  <span className={styles.count}>{dur.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Activity Type */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Activity Type
            </label>
            <div className={styles.filterList}>
              {filterOptions.activities.map((act) => (
                <button
                  key={act.id}
                  onClick={() => updateFilter('activity', act.id)}
                  className={`${styles.filterItem} ${filters.activity === act.id ? styles.active : ''}`}
                >
                  <span className={styles.check}>
                    {filters.activity === act.id && (
                      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={styles.name}>{act.label}</span>
                  <span className={styles.count}>{act.count}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* TOURS GRID */}
        <main className={styles.main}>
          {filteredTours.length > 0 ? (
            <div className={styles.toursGrid}>
              {filteredTours.map((tour) => (
                <div key={tour.id} className={styles.tourCard}>
                  <div className={styles.cardImage}>
                    <img src={tour.image} alt={tour.title} />
                    <div className={styles.cardOverlay}>
                      <Link href={`/fr/circuits/${tour.slug}`} className={styles.viewBtn}>Voir les Détails</Link>
                    </div>
                    <span className={styles.durationTag}>{tour.duration}</span>
                    <span className={styles.priceTag}>€{tour.price}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTop}>
                      <span className={styles.location}>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {tour.location}
                      </span>
                      <span className={styles.activity}>
                        {getActivityLabel(tour.activity)}
                      </span>
                    </div>
                    <h3>{tour.title}</h3>
                    <p>{tour.description}</p>
                    <div className={styles.cardBottom}>
                      <div className={styles.rating}>
                        <span>★</span>
                        <strong>{tour.rating}</strong>
                        <small>({tour.reviews})</small>
                      </div>
                      <Link href={`/fr/circuits/${tour.slug}`} className={styles.bookBtn}>Réserver</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>
                <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>No tours found</h3>
              <p>Try adjusting your filters to see more results</p>
              <button onClick={clearFilters} className={styles.exploreBtn}>Clear Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function FilterPage() {
  return (
    <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
      <FilterContent />
    </Suspense>
  );
}