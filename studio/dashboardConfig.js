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
                  buildHookId: '5ea1a7fd06538de1478a291d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j86nze4k',
                  apiId: '7b2ad09f-e7f1-41b0-a153-16583f88c9b4'
                },
                {
                  buildHookId: '5ea1a7fdb58094c9c9dea6ab',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kmoobahy',
                  apiId: 'd3a13162-f9e3-4f60-b728-59858907a968'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/netmet1201/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kmoobahy.netlify.app', category: 'apps'}
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
