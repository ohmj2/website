module.exports = {
  head: [
    ['meta', { name: 'keywords', content: 'musique, harmonie, ajem, ohmj, jacou, montpellier, instrument' }]
  ],
  extend: '@vuepress/theme-default',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "fr-FR", // this will be set as the lang attribute on <html>
      title: "Orchestre d'Harmonie de Montpellier-Jacou",
      description:
        "Site de l'Harmonie de Montpellier-Jacou dans l'hérault (FRANCE)"
    },
    "/en/": {
      lang: "en-US",
      title: "Montpellier-Jacou Harmony Orchestra",
      description:
        "Web Site of the Harmony of Montpellier-Jacou in the hérault (FRANCE)"
    }
  },
  themeConfig: {
    docsDir: 'docs',
    search: false,
    locales: {
      "/": {
        nav: [
          { text: "Présentation", link: "/introduction" },
          { text: "Concerts", link: "/concerts" },
          { text: "Repertoire", link: "/repertoire" },
          { text: "Contacts", link: "/contacts" },
          { text: "Espace Musiciens", link: "http://ohmj2.free.fr/ohmj/" }
        ],
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "Français",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        }
      },
      "/en/": {
        nav: [
          { text: "Introduction", link: "/en/introduction" },
          { text: "Concerts", link: "/en/concerts" },
          { text: "Repertoire", link: "/en/repertoire" },
          { text: "Contacts", link: "/en/contacts" },
          { text: "Musician", link: "http://ohmj2.free.fr/ohmj/" }
        ]
      }
    }
  }
}