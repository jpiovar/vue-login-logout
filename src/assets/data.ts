export const userProfiles = [{
  id: 'j1',
  name: 'janko',
  email: 'janko@ok.ok',
  password: 'janko',
}, {
  id: 'h1',
  name: 'hrasko',
  email: 'hrasko@ok.ok',
  password: 'hrasko',
}];

export const quoraContent = [{
  id: 'q1',
  author: {
    id: 'j1',
    name: 'janko',
    email: 'janko@ok.ok',
  },
  text: 'sense of life',
  answers: [
    {
      id: 'a1',
      author: {
        id: 'j1',
        name: 'janko',
        email: 'janko@ok.ok',
      },
      text: 'nobody knows sense of life a',
    },
    {
      id: 'a2',
      author: {
        id: 'j1',
        name: 'janko',
        email: 'janko@ok.ok',
      },
      text: 'nobody knows sense of life j',
    },
    {
      id: 'a3',
      author: {
        id: 'h1',
        name: 'hrasko',
        email: 'hrasko@ok.ok',
      },
      text: 'nobody knows sense of life h',
    },
  ],
},
{
  id: 'q2',
  author: {
    id: 'h1',
    name: 'hrasko',
    email: 'hrasko@ok.ok',
  },
  text: 'sense of life and nonsense of all',
  answers: [
    {
      id: 'a1',
      author: {
        id: 'j1',
        name: 'janko',
        email: 'janko@ok.ok',
      },
      text: 'nobody knows sense of life a',
    },
    {
      id: 'a2',
      author: {
        id: 'h1',
        name: 'hrasko',
        email: 'hrasko@ok.ok',
      },
      text: 'nobody knows sense of life j',
    },
    {
      id: 'a3',
      author: {
        id: 'j1',
        name: 'janko',
        email: 'janko@ok.ok',
      },
      text: 'nobody knows sense of life h',
    },
  ],
}];
