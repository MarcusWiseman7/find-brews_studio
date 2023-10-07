export default {
    name: 'blogPage',
    title: 'Blog page',
    type: 'document',
    fields: [
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
