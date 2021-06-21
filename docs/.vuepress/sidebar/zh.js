module.exports = [
  {
    title: '开始',
    collapsable: false,
    children: [
      '/zh/',
      '/zh/stack-deployment',
      '/zh/stack-installation',
      '/zh/stack-components',
      '/zh/stack-accounts',
      ['https://support.websoft9.com/docs/faq/zh/tech-instance.html','云服务器'],
    ]
  },

  {
    title: '最佳实践',
    collapsable: false,
    children: [
      '/zh/solution-addapps',
      '/zh/framework-django',
      '/zh/solution-arch',
      '/zh/solution-https',
      '/zh/solution-backup',
      '/zh/solution-upgrade',
      '/zh/solution-more',
    ]
  },
  
  {
    title: '配置参考',
    collapsable: false,
    children: [
      '/zh/admin-services',
      '/zh/admin-mysql',
      '/zh/admin-mongodb',
      ['https://support.websoft9.com/docs/uwsgi/zh','uWSGI'],
      ['https://support.websoft9.com/docs/linux/zh/nginx-erlang.html','Nginx'],
      ['https://support.websoft9.com/docs/linux/zh/admin-practices.html','Linux'],
    ]
  },
  
  {
    title: '其他',
    collapsable: false,
    children: [
      '/zh/else-faq',
      '/zh/else-troubleshooting',
      '/zh/else-glossary',
      '/zh/else-reference',
    ]
  },
  
  ]