import {Post} from './postTypes';

// Mock => dados simulados
// Tipando com os tipos declarados em post types para garantir a srguranca
export const postListMock: Post[] = [
  {
    id: 'post_1',
    text: 'This is my first post!',
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/VyfuWYa.jpg',
    reactionCount: 10,
    commentCount: 5,
    favoriteCount: 2,
  },
  {
    id: 'post_2',
    text: 'Check out this cool photo!',
    author: {
      profileURL: 'https://i.imgur.com/BrJUnRl.jpg',
      name: 'Jane Smith',
      userName: 'janesmith',
    },
    imageURL: 'https://i.imgur.com/KkcrB5y.jpg',
    reactionCount: 15,
    commentCount: 8,
    favoriteCount: 3,
  },
  {
    id: 'post_3',
    text: "Just finished reading this book and it's amazing!",
    author: {
      profileURL: 'https://i.imgur.com/BxgHDci.jpg',
      name: 'Mark Johnson',
      userName: 'markjohnson',
    },
    imageURL: 'https://i.imgur.com/NdrA2BY.jpg',
    reactionCount: 20,
    commentCount: 12,
    favoriteCount: 5,
  },
  {
    id: 'post_4',
    text: "I can't believe it's already May!",
    author: {
      profileURL: 'https://i.imgur.com/FmSbPv3.jpg',
      name: 'Amy Lee',
      userName: 'amylee',
    },
    imageURL: 'https://i.imgur.com/vkscdqk.jpg',
    reactionCount: 5,
    commentCount: 3,
    favoriteCount: 1,
  },
  {
    id: 'post_5',
    text: 'Coding day!',
    author: {
      profileURL: 'https://i.imgur.com/DF4Jfxq.jpg',
      name: 'Santiago Emilio',
      userName: 'sanemilio',
    },
    imageURL: 'https://i.imgur.com/rsOe2hC.jpg',
    reactionCount: 0,
    commentCount: 0,
    favoriteCount: 0,
  },
  {
    id: 'post_6',
    text: "What's your favorite color?",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/zx94i19.jpg',
    reactionCount: 2,
    commentCount: 1,
    favoriteCount: 0,
  },
  {
    id: 'post_7',
    text: "I'm so excited for the weekend!",
    author: {
      profileURL: 'https://i.imgur.com/BrJUnRl.jpg',
      name: 'Jane Smith',
      userName: 'janesmith',
    },
    imageURL: 'https://i.imgur.com/LWopzZH.jpg',
    reactionCount: 8,
    commentCount: 4,
    favoriteCount: 1,
  },
  {
    id: 'post_8',
    text: 'Just got back from vacation and it was amazing!',
    author: {
      profileURL: 'https://i.imgur.com/BxgHDci.jpg',
      name: 'Mark Johnson',
      userName: 'markjohnson',
    },
    imageURL: 'https://i.imgur.com/WZZLeHg.jpg',
    reactionCount: 25,
    commentCount: 10,
    favoriteCount: 4,
  },
  {
    id: 'post_9',
    text: "I'm loving this new restaurant!",
    imageURL: 'https://i.imgur.com/FmSbPv3.jpg',
    author: {
      profileURL: 'https://i.imgur.com/OGQRFok.jpg',
      name: 'Amy Lee',
      userName: 'amylee',
    },
    reactionCount: 35,
    commentCount: 0,
    favoriteCount: 0,
  },
];
