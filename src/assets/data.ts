const janko = {
  id: 'j1',
  name: 'janko',
  email: 'janko@ok.ok',
};

const hrasko = {
  id: 'h1',
  name: 'hrasko',
  email: 'hrasko@ok.ok',
};

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
  id: '1549306955000',
  author: janko,
  text: 'sense of life',
  answers: [
    {
      id: '1549306984000',
      author: janko,
      text: 'nobody knows sense of life a',
    },
    {
      id: '1549307024000',
      author: hrasko,
      text: 'nobody knows sense of life h',
    },
  ],
},
{
  id: '1549307029000',
  author: {
    id: 'h1',
    name: 'hrasko',
    email: 'hrasko@ok.ok',
  },
  text: 'sense of life and nonsense of all',
  answers: [
    {
      id: '1549307059000',
      author: hrasko,
      text: 'nobody knows sense of life jj',
    },
    {
      id: '1549307077000',
      author: janko,
      text: 'nobody knows sense of life hh',
    },
  ],
}];
