export default {
    name: 'author',
    title: 'Blog authors',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'localeBlockContent',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};
