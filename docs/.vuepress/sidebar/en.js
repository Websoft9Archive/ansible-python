module.exports = [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/',
          '/stack-deployment',
          '/stack-installation',
          '/stack-components',
          '/stack-accounts',
          ['https://support.websoft9.com/docs/faq/tech-instance.html','Cloud Server'],
        ]
      },
      {
        title: 'Best Practices',
        collapsable: false,
        children: [
          '/solution-addapps',
          '/framework-django',
          '/solution-arch',
          '/solution-https',
          '/solution-backup',
          '/solution-upgrade',
          '/solution-more',
        ]
      },
      
      {
        title: 'Administrator',
        collapsable: false,
        children: [
          '/admin-services',
          '/admin-mysql',
          '/admin-mongodb',
          ['https://support.websoft9.com/docs/uwsgi','uWSGI'],
          ['https://support.websoft9.com/docs/linux/lang-nginx.html','Nginx'],
          ['https://support.websoft9.com/docs/linux/admin-practices.html','Linux'],
        ]
      },
      
      {
        title: 'Other',
        collapsable: false,
        children: [
          '/else-faq',
          '/else-troubleshooting',
        ]
      },
      
    ]
