export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'localeString',
            description: 'Title for the page, use {variable_name} syntax for variables',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'localeString',
            description: 'Description for the page, use {variable_name} syntax for variables',
        },
    ],
};
