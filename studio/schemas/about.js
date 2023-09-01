export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
      title: 'title',
    },
    prepare(selection) {
      const {image, title} = selection

      return {
        media: image,
        title: title,
      }
    },
  },
}
