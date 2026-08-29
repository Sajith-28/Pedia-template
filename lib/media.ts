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
} satisfies Record<string, Media>;
