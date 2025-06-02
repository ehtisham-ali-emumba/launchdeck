export const getRandomImageUrl = (index = Math.random()): string => {
  return `https://picsum.photos/220/160?random=${index}`;
};

export const getRandomAvatarUrl = (index = Math.random()): string => {
  return `https://randomuser.me/api/portraits/men/${index}.jpg`;
};
