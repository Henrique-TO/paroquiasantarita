
import info from '../content/info.json';
import about from '../content/about.json';
import contact from '../content/contact.json';
import massTimes from '../content/massTimes.json';
import ministries from '../content/ministries.json';
import tithing from '../content/tithing.json';

import gallery from '../content/gallery.json';

// Helper to load collection data
function loadCollection(glob) {
  return Object.entries(glob).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.json', '');
    return {
      slug,
      ...module.default
    };
  });
}

const clergyData = import.meta.glob('../content/clergy/*.json', { eager: true });
const eventsData = import.meta.glob('../content/events/*.json', { eager: true });

const staticGalleryGlob = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
  as: 'url'
});

const staticImages = Object.values(staticGalleryGlob).map(url => {
  return url.replace('/public', '');
});

// Helper to safely get image URL whether it's a string or object
const getCmsImage = (item) => {
  if (typeof item === 'string') return item;
  if (item && item.image) return item.image;
  return null;
};

const cmsImages = (gallery.images || []).map(getCmsImage).filter(Boolean);

export const siteData = {
  ...info,
  about,
  contact,
  massTimes: massTimes.times,
  ministries: ministries.items,
  tithing,
  // Sort events by date descending
  events: loadCollection(eventsData).sort((a, b) => new Date(b.date) - new Date(a.date)),
  clergy: loadCollection(clergyData),
  // Merge: CMS images first (so user can put new ones on top), then static
  gallery: [...cmsImages, ...staticImages]
};
