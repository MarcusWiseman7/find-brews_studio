export default {
    name: 'tag',
    title: 'Blog tags',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'localeString',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'localeText',
        },
    ],
    preview: {
        select: {
            title: 'title.en',
        },
    },
};
