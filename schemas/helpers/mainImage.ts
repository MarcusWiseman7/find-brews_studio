export default {
    name: 'mainImage',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'alt',
            title: 'Alternative text',
            type: 'string',
            description:
                'Required, important for SEO and accessibility, very short description of what is in the image',
            options: {
                isHighlighted: true,
            },
        },
        {
            name: 'caption',
            title: 'Caption',
            description: 'Not required, but nice to have',
            type: 'string',
            options: {
                isHighlighted: true,
            },
        },
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption',
        },
    },
};
