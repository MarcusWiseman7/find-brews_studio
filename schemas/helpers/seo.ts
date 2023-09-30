export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title for the page, use {variable_name} syntax for variables',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description for the page, use {variable_name} syntax for variables',
        },
    ],
};
