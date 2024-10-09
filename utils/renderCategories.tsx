export const categories = () => {
    let cat: { path: string; category: string }[] = [
        {
            path: "categories/general-knowledge",
            category: "General Knowledge",
        },
        {
            path: "categories/math",
            category: "Maths",
        },
        {
            path: "categories/guess-the-flags",
            category: "Guess the flags",
        },
        {
            path: "categories/guess-the-language",
            category: "Guess the language",
        },
        {
            path: "categories/weird-facts",
            category: "Weird Facts",
        },
    ];

    return cat;
};

export const renderCategories = (index: number) => {
    const cat = categories();
    // Use a simple switch to return the category at the given index
    switch (index) {
        case 1:
            return cat[0].category;
        case 2:
            return cat[1].category;
        case 3:
            return cat[2].category;
        case 4:
            return cat[3].category;
        case 5:
            return cat[4].category;
    }
};

export const LinkCategories = (index: number) => {
    const cat = categories();
    // Use a simple switch to return the category at the given index
    switch (index) {
        case 1:
            return cat[0].path;
        case 2:
            return cat[1].path;
        case 3:
            return cat[2].path;
        case 4:
            return cat[3].path;
        case 5:
            return cat[4].path;
    }
};
