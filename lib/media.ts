/**
 * Template photography.
 *
 * Images are served from Unsplash so the demo works out of the box. To use real
 * assets, drop the files into /public and change `src` to e.g. "/images/doctor.jpg";
 * every consumer uses next/image, so nothing else needs to change.
 */

export type Media = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
};

const UNSPLASH = "https://images.unsplash.com/photo-";

function unsplash(id: string, width: number, height: number, crop = "faces,center") {
  return `${UNSPLASH}${id}?auto=format&fit=crop&crop=${crop}&w=${width}&h=${height}&q=80`;
}

export const media = {
  doctorPortrait: {
    src: unsplash("1612531385446-f7e6d131e1d0", 1040, 1300, "faces"),
    alt: "Dr. Aarav Mehta, consultant pediatrician, in a white coat with a stethoscope",
    width: 1040,
    height: 1300,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAkLCw0RDRIUFBIYGhgaGCQhHh4hJDYnKScpJzZRMzszMzszUUdWR0JHVkeAZVlZZYCUfHZ8lLOgoLPh1eH///8BCQsLDRENEhQUEhgaGBoYJCEeHiEkNicpJyknNlEzOzMzOzNRR1ZHQkdWR4BlWVllgJR8dnyUs6Cgs+HV4f/////AABEIAA0ACgMBIgACEQEDEQH/xABZAAEAAAAAAAAAAAAAAAAAAAAGEAACAQQDAQAAAAAAAAAAAAABAgMABBESBQZBUgEBAQAAAAAAAAAAAAAAAAAAAQMRAAIDAAAAAAAAAAAAAAAAAAABAxES/9oADAMBAAIRAxEAPwBb2G6ePluPG7atsNR4fqm21DYkju4C0iguHk1f0FTSuO5JRSVycDNUcdBo/9k=",
  },
  doctorAbout: {
    src: unsplash("1612531386530-97286d97c2d2", 1000, 1200, "faces"),
    alt: "Dr. Aarav Mehta standing in his consulting room at Little Bloom Children's Clinic",
    width: 1000,
    height: 1200,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAkLCw0RDRIUFBIYGhgaGCQhHh4hJDYnKScpJzZRMzszMzszUUdWR0JHVkeAZVlZZYCUfHZ8lLOgoLPh1eH///8BCQsLDRENEhQUEhgaGBoYJCEeHiEkNicpJyknNlEzOzMzOzNRR1ZHQkdWR4BlWVllgJR8dnyUs6Cgs+HV4f/////AABEIAAwACgMBIgACEQEDEQH/xABaAAEBAQAAAAAAAAAAAAAAAAAFAwQQAAICAgIDAAAAAAAAAAAAAAECAxEAMQQFISJhAQEBAAAAAAAAAAAAAAAAAAADBBEAAwEAAAAAAAAAAAAAAAAAAAESE//aAAwDAQACEQMRAD8AX7pURuOKb2cURj4iioazHNIxmRzsBgPgvLKtqPJ1lGaDpn//2Q==",
  },
  philosophy: {
    src: unsplash("1676313030076-4ac0b37050fd", 1240, 940, "center"),
    alt: "A pediatrician listening to a young child's chest with a stethoscope during a check-up",
    width: 1240,
    height: 940,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAkLCw0RDRIUFBIYGhgaGCQhHh4hJDYnKScpJzZRMzszMzszUUdWR0JHVkeAZVlZZYCUfHZ8lLOgoLPh1eH///8BCQsLDRENEhQUEhgaGBoYJCEeHiEkNicpJyknNlEzOzMzOzNRR1ZHQkdWR4BlWVllgJR8dnyUs6Cgs+HV4f/////AABEIAAoADgMBIgACEQEDEQH/xABeAAEBAAAAAAAAAAAAAAAAAAAFBhABAAEEAgEFAAAAAAAAAAAAAQIAAwQRBRIiMTIzQXEBAQAAAAAAAAAAAAAAAAAAAAMRAAEFAQAAAAAAAAAAAAAAAAEAAhEhIgP/2gAMAwEAAhEDEQA/AG7Gbdv94uOME2yTS/m6VtcDj3IE5e51uHoFMX/nxz68qlmS8nliqHWg6HZm0rBkRS//2Q==",
  },

  /* ---------- Areas of expertise ----------
     One photograph per expertise area. Each is consumed through
     data/expertise.ts so a card, a detail page and its metadata can never
     drift apart. */
  expertiseGeneralPaediatrics: {
    src: unsplash("1758691463331-2ac00e6f676f", 1400, 1000),
    alt: "A pediatrician talking with a young boy and his mother during a consultation in a bright clinic room",
    width: 1400,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAYHBwkLCQwNDQwQERAREBgWFBQWGCMZGxkbGSM1ISchISchNS85LysvOS9UQjs7QlRhUk5SYXZpaXaUjZTBwf8BBgcHCQsJDA0NDBAREBEQGBYUFBYYIxkbGRsZIzUhJyEhJyE1LzkvKy85L1RCOztCVGFSTlJhdmlpdpSNlMHB///AABEIAAgADAMBIgACEQEDEQH/xABcAAEBAQAAAAAAAAAAAAAAAAAABAYQAAICAgEFAAAAAAAAAAAAAAECAAMEERIFBiFBUQEBAQAAAAAAAAAAAAAAAAAAAwQRAAIDAAAAAAAAAAAAAAAAAAABAgMR/9oADAMBAAIRAxEAPwC6rtbHoTasrg1+N8hxP0n3uZq7pGJeQTdlVFRoqjFViJPZJ4haYLWz/9k=",
  },
  expertiseNeonatology: {
    src: unsplash("1560306580-9e204fe45f3e", 1400, 1000, "center"),
    alt: "A newborn baby resting in a hospital incubator while receiving specialist neonatal care",
    width: 1400,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAYHBwkLCQwNDQwQERAREBgWFBQWGCMZGxkbGSM1ISchISchNS85LysvOS9UQjs7QlRhUk5SYXZpaXaUjZTBwf8BBgcHCQsJDA0NDBAREBEQGBYUFBYYIxkbGRsZIzUhJyEhJyE1LzkvKy85L1RCOztCVGFSTlJhdmlpdpSNlMHB///AABEIAAgADAMBIgACEQEDEQH/xABYAAEBAQAAAAAAAAAAAAAAAAAAAwcQAAIDAAMBAAAAAAAAAAAAAAECAAMRBRJRIQEBAQAAAAAAAAAAAAAAAAAAAgQRAAMBAAAAAAAAAAAAAAAAAAACQXH/2gAMAwEAAhEDEQA/ANRTiKkxQ7KVO4Pg3PZEX8XQOj1Bz6MMRApU0w//2Q==",
  },
  expertiseAcuteIllnesses: {
    src: unsplash("1758691462164-100b5e356169", 1400, 1000),
    alt: "A doctor examining a young boy's chest with a stethoscope while his mother stays beside him",
    width: 1400,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAYHBwkLCQwNDQwQERAREBgWFBQWGCMZGxkbGSM1ISchISchNS85LysvOS9UQjs7QlRhUk5SYXZpaXaUjZTBwf8BBgcHCQsJDA0NDBAREBEQGBYUFBYYIxkbGRsZIzUhJyEhJyE1LzkvKy85L1RCOztCVGFSTlJhdmlpdpSNlMHB///AABEIAAgADAMBIgACEQEDEQH/xABaAAEBAQAAAAAAAAAAAAAAAAAABAYQAQACAgMBAAAAAAAAAAAAAAECAwARBAUhgQEBAQAAAAAAAAAAAAAAAAAAAAERAAIDAQAAAAAAAAAAAAAAAAABAgMhEf/aAAwDAQACEQMRAD8Aj4fQcXhyro9ulOqSLDRpTYubjrOqK6ZBWRGakUPD7vGMkNbFmcP/2Q==",
  },
  expertiseGrowthDevelopment: {
    src: unsplash("1632052998134-ee83afa9cced", 1400, 1000),
    alt: "A pediatrician checking over an infant during a well-child visit while the mother and an older sibling look on",
    width: 1400,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAYHBwkLCQwNDQwQERAREBgWFBQWGCMZGxkbGSM1ISchISchNS85LysvOS9UQjs7QlRhUk5SYXZpaXaUjZTBwf8BBgcHCQsJDA0NDBAREBEQGBYUFBYYIxkbGRsZIzUhJyEhJyE1LzkvKy85L1RCOztCVGFSTlJhdmlpdpSNlMHB///AABEIAAgADAMBIgACEQEDEQH/xABdAAEBAQAAAAAAAAAAAAAAAAAABQYQAAEEAgIDAAAAAAAAAAAAAAEAAgMRBEEFEhQhMQEBAAAAAAAAAAAAAAAAAAAAAhEAAgIDAAAAAAAAAAAAAAAAAQIAEiExYf/aAAwDAQACEQMRAD8ApDPx89zZfIIebjf6+dbaW9VquMhxYIntBjNvJ1Y1RraImALHGo2Y0Xs//9k=",
  },
  expertiseAllergiesRespiratory: {
    src: unsplash("1676313027775-a5a3dca6f98b", 1400, 1000),
    alt: "A doctor listening to a young girl's breathing with a stethoscope during a respiratory assessment",
    width: 1400,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAYHBwkLCQwNDQwQERAREBgWFBQWGCMZGxkbGSM1ISchISchNS85LysvOS9UQjs7QlRhUk5SYXZpaXaUjZTBwf8BBgcHCQsJDA0NDBAREBEQGBYUFBYYIxkbGRsZIzUhJyEhJyE1LzkvKy85L1RCOztCVGFSTlJhdmlpdpSNlMHB///AABEIAAgADAMBIgACEQEDEQH/xABcAAEBAQAAAAAAAAAAAAAAAAAAAwYQAAICAgMBAAAAAAAAAAAAAAECAAMEEQUGEjEBAQEAAAAAAAAAAAAAAAAAAAIDEQEAAQUAAAAAAAAAAAAAAAABAAIRElGB/9oADAMBAAIRAxEAPwDcv0PH8nIS9na3QCt8TUrd0HhLSDbiCxgNejuIksQS2o1Wns//2Q==",
  },
  expertiseAdolescentHealth: {
    src: unsplash("1758273240331-745ccab011a2", 1400, 1000),
    alt: "A clinician in conversation with an adolescent girl during a calm, private consultation",
    width: 1400,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAYHBwkLCQwNDQwQERAREBgWFBQWGCMZGxkbGSM1ISchISchNS85LysvOS9UQjs7QlRhUk5SYXZpaXaUjZTBwf8BBgcHCQsJDA0NDBAREBEQGBYUFBYYIxkbGRsZIzUhJyEhJyE1LzkvKy85L1RCOztCVGFSTlJhdmlpdpSNlMHB///AABEIAAgADAMBIgACEQEDEQH/xABYAAEBAAAAAAAAAAAAAAAAAAAABhAAAQQCAwEAAAAAAAAAAAAAAgABAwQRIQUGEhMBAQAAAAAAAAAAAAAAAAAAAAMRAQEBAQAAAAAAAAAAAAAAAAEAAtH/2gAMAwEAAhEDEQA/ALuxzgw2SY3Nohgy5O2tbyoXkO+1KcrRVwO0HnP09526InyDD2//2Q==",
  },
} satisfies Record<string, Media>;
