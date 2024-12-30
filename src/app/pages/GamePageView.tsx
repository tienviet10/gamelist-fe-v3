// TODO: Header should be in charge of the padding at the top of the page

import { Button } from '@lib/Button/Button';
import { Card, CardContent } from '@lib/Card/Card';

import { Heart, Star } from 'lucide-react';

const data = {
  title: 'DAN DA DAN',
  description: `This is a story about Momo, a high school girl who comes from a family of spirit mediums, and her classmate Okarun, an occult fanatic. After Momo rescues Okarun from being bullied, they begin talking. However, an argument ensues between them since Momo believes in ghosts but denies aliens exist, and Okarun believes in aliens but denies ghosts exist.

To prove to each other what they believe in is real, Momo goes to an abandoned hospital where a UFO has been spotted and Okarun goes to a tunnel rumored to be haunted. To their surprise, they each encounter overwhelming paranormal activities that transcend comprehension. Amid these predicaments, Momo awakens her hidden power and Okarun gains the power of a curse to overcome these new dangers! Their fateful love begins as well!?

The story of the occult battle and adolescence starts!`,
  image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
  banner: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/171018-SpwPNAduszXl.jpg',
  genres: ['Action', 'Adventure', 'RPG', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Psychological'],
  releaseDate: '2023-01-01',
  rating: 4.5,
  price: 10,
  tags: ['Action', 'Adventure', 'RPG'],
  platforms: ['PC', 'PS4', 'PS5', 'Switch', 'Xbox', 'Xbox Series X/S'],
  status: 'In Development',
  season: 'Fall 2024',
  averageScore: 85,
  meanScore: 86,
  popularity: 10,
  favorites: 9551,
  studio: 'Sony Interactive Entertainment',
  publishers: ['Sony Interactive Entertainment'],
  externalLinks: [
    {
      name: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Dan_Dan_Dan',
    },
    {
      name: 'IMDb',
      url: 'https://www.imdb.com/title/tt10653610/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/DanDanDan',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/DanDanDan',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dandandan/',
    },
  ],
  relations: [
    {
      title: 'Dandandan',
      type: 'Adaptation',
      url: 'https://dandandan.fandom.com/wiki/Dan_Dan_Dan',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
    },
    {
      title: 'Dandandan',
      type: 'Adaptation',
      url: 'https://dandandan.fandom.com/wiki/Dan_Dan_Dan',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
    },
    {
      title: 'Dandandan',
      type: 'Adaptation',
      url: 'https://dandandan.fandom.com/wiki/Dan_Dan_Dan',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
    },
  ],
  characters: [
    {
      id: 1,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Momo is a high school girl who comes from a family of spirit mediums. She is a skilled fighter and a powerful wielder of spirits.',
      role: 'Main',
      voiceActors: [
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Miyuki Sawashiro',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1100-1x1-2x2.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Okarun',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Okarun is an occult fanatic who is obsessed with the idea of ghosts. He believes that ghosts are real and that they exist in the world. He is also a skilled fighter and a powerful wielder of spirits.',
      role: 'Main',
      voiceActors: [
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Miyuki Sawashiro',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1100-1x1-2x2.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'Okarun',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Okarun is an occult fanatic who is obsessed with the idea of ghosts. He believes that ghosts are real and that they exist in the world. He is also a skilled fighter and a powerful wielder of spirits.',
      role: 'Main',
      voiceActors: [
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Miyuki Sawashiro',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1100-1x1-2x2.jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Momo is a high school girl who comes from a family of spirit mediums. She is a skilled fighter and a powerful wielder of spirits.',
      role: 'Main',
      voiceActors: [
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Miyuki Sawashiro',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1100-1x1-2x2.jpg',
        },
      ],
    },
    {
      id: 5,
      name: 'Okarun',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Okarun is an occult fanatic who is obsessed with the idea of ghosts. He believes that ghosts are real and that they exist in the world. He is also a skilled fighter and a powerful wielder of spirits.',
      role: 'Main',
      voiceActors: [
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Miyuki Sawashiro',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1100-1x1-2x2.jpg',
        },
      ],
    },
    {
      id: 6,
      name: 'Okarun',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Okarun is an occult fanatic who is obsessed with the idea of ghosts. He believes that ghosts are real and that they exist in the world. He is also a skilled fighter and a powerful wielder of spirits.',
      role: 'Main',
      voiceActors: [
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Yui Ogura',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1000-1x1-2x2.jpg',
        },
        {
          name: 'Miyuki Sawashiro',
          language: 'Japanese',
          image: 'https://s4.anilist.co/file/anilistcdn/media/actor/avatar/small/bx1100-1x1-2x2.jpg',
        },
      ],
    },
  ],
  staff: [
    {
      id: 1,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Momo is a high school girl who comes from a family of spirit mediums. She is a skilled fighter and a powerful wielder of spirits.',
      role: 'Original Creator',
    },
    {
      id: 2,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Momo is a high school girl who comes from a family of spirit mediums. She is a skilled fighter and a powerful wielder of spirits.',
      role: 'Director',
    },
    {
      id: 3,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      description:
        'Momo is a high school girl who comes from a family of spirit mediums. She is a skilled fighter and a powerful wielder of spirits.',
      role: 'Assistant Director',
    },
  ],
  trailerURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  following: [
    {
      id: 1,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      status: 'Playing',
    },
  ],
  recommendations: [
    {
      id: 1,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      status: 'Playing',
    },
    {
      id: 2,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      status: 'Playing',
    },
    {
      id: 3,
      name: 'Momo',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      status: 'Watching',
    },
  ],
  threads: [
    {
      id: 1,
      title: '[Spoilers] DAN DA DAN - Episode 12 Discussion (Lets Go to the Cursed House)',
      user: 'apotoxinsherry',
      userImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      views: 2691,
      comments: 77,
      date: '2023-01-01',
      tags: ['Release Discussion'],
    },
    {
      id: 2,
      title: 'Dandadan TV Anime Season 2 ; Broadcast scheduled for july 2025.',
      user: 'Aukeeeh',
      userImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      views: 1665,
      comments: 41,
      date: '2023-01-01',
      tags: ['nEWS'],
    },
  ],
  reviews: [
    {
      id: 1,
      title: 'Dan Dan Dan is a great anime!',
      user: 'apotoxinsherry',
      userImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-2ldCj6QywuOa.jpg',
      date: '2023-01-01',
      rating: 4.5,
      review: 'The Greatest Romance Shounen To Date',
    },
  ],
};

export function GamePageView() {
  return (
    <div className="mt-16 w-full">
      {/* Banner Section */}
      <div className="relative h-[400px]">
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/171018-SpwPNAduszXl.jpg"
          alt="Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      {/* Header Content */}
      <div className="container relative mx-auto flex max-w-7xl gap-x-10 px-4 py-8">
        <div className="static flex w-full flex-col gap-y-4">
          <img src={data.image} alt="Banner" className="h-full w-full" />
          <div className="flex w-full justify-center gap-x-4">
            <Button className="w-full">Playing</Button>
            <Button variant="destructive" size="icon" className="min-w-9">
              <Heart size={18} />
            </Button>
          </div>
        </div>

        <div>
          <p className="pb-6 text-sm">DAN DA DAN</p>
          <p>{data.description}</p>
        </div>
      </div>

      <div className="h-dvh bg-slate-100">
        <div className="container mx-auto flex max-w-7xl flex-col gap-y-4 px-4 py-8">
          <div className="max-w-72">
            <div className="flex items-center justify-center gap-x-3 rounded-md bg-white p-3">
              <Star color="orange" fill="orange" size={17} />
              <p>#50 Highest Rated All Time</p>
            </div>
          </div>

          <div className="max-w-72">
            <div className="flex items-center justify-center gap-x-3 rounded-md bg-white p-3">
              <Heart color="red" fill="red" size={17} />
              <p>#50 Highest Rated All Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePageView;
