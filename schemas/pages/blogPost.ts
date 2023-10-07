export default {
    name: 'blogPostPage',
    title: 'Blog post page',
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
