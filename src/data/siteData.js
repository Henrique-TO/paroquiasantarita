
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
  gallery: (gallery.images || []).map(item => item.image)
};
