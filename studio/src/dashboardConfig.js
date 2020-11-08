export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa863e5ab388914672e8eef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ttwev8iv',
                  apiId: 'def93a11-ec00-4be0-a085-520fd0577599'
                },
                {
                  buildHookId: '5fa863e55ea3508bcd105aac',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j2nzu612',
                  apiId: '991683aa-b920-4467-9a94-fe6dcfaeed3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/makusdouglas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j2nzu612.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
