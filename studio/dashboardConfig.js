export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d79ce2e6b0f28f0e2434b63',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9uu7jtb7',
                  apiId: '10ca5bf4-8649-4b7b-99ad-af7f189267d4'
                },
                {
                  buildHookId: '5d79ce2e6b0f2864fa434b32',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-32iafeho',
                  apiId: 'd6693e0d-5b4b-4213-8873-5318411e28ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mincreng/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-32iafeho.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
