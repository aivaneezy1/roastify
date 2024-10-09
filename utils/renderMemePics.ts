export const pictures = () => {
  let pics: { path: string }[] = [
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
    {
      path: "/memes/dumb.jpg",
    },
  ];

  return pics;
};

export const renderMemePics = (index: number) => {
  const pics = pictures();
  switch (index) {
    case 1:
      return pics[0].path;
    case 2:
      return pics[1].path;
    case 3:
      return pics[2].path;
    case 4:
      return pics[3].path;
    case 5:
      return pics[6].path;
    case 6:
      return pics[5].path;
    case 7:
      return pics[8].path;
    case 8:
      return pics[9].path;
    case 9:
      return pics[10].path;
    case 10:
      return pics[11].path;
  }
};
