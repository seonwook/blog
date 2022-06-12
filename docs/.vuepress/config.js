module.exports = {
    base: '/blog/',
    head: [
      [
        "script",
        {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-0V709KXC8F",
        },
      ],
      ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0V709KXC8F');"]],
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/images/icons/152x.png' }],
      ['link', { rel: 'mask-icon', href: '/logo.png', color: '#ffffff' }],
      [
        'meta',
        {
          name: 'msapplication-TileImage',
          content: '/images/icons/144x.png',
        },
      ],
      ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ],
    locales: {
      '/': {
        lang: 'ko',
        title: 'Cracking Vue.js',
        description: 'JavaScript, Vue.js, Nuxt.js',
      },
    },
    themeConfig: {
      repo: 'seonwook/blog',
      repoLabel: '↗️ 깃헙',
      docsRepo: 'seonwook/blog',
      docsDir: 'docs',
      editLinks: true,
      smoothScroll: true,
      locales: {
        '/': {
          selectText: '언어',
          label: '한국어',
          ariaLabel: '언어',
          editLinkText: '깃헙에서 문서 수정하기',
          lastUpdated: '최종 변경일',
        //   serviceWorker: {
        //     updatePopup: {
        //       message: '새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요 😄',
        //       buttonText: '새로고침',
        //     },
        //   },
          nav: [
            {
              text: 'Home',
              link: '/textbook',
            },
            {
              text: '프로필',
              link: '/textbook',
            },
          ],
          sidebar: [
            '/textbook',
            {
              title: 'JavaScript Fundamentals',
              collapsable: true,
              children: [
                '/js/variable',
                '/js/string',
              ],
            },
            {
              title: 'ES6+',
              collapsable: true,
              children: [
                '/es6+/const-let',
                '/es6+/fat-arrow',
              ],
            },
          ],
        },
      },
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@img': './images',
        },
      },
    },
    plugins: [
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: true,
        },
      ],
    //   [
    //     '@vuepress/google-analytics',
    //     {
    //       ga: '319134276',
    //     },
    //   ],
      ['@vuepress/last-updated', true],
      ['reading-progress', true],
      [
        'vuepress-plugin-code-copy',
        {
          color: '#3eaf7c',
          backgroundColor: '#3eaf7c',
        },
      ],
      [require('./plugins/custom-back-to-top/')],
    ],
  };