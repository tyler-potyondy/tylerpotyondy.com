// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "I generally try to share here my slides from public talks I&#39;ve given.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "news-our-paper-omniglot-won-an-osdi-best-paper-award",
          title: 'Our paper Omniglot won an OSDI best paper award!',
          description: "",
          section: "News",},{id: "news-i-am-presenting-our-paper-rage-against-the-state-machine-at-asplos",
          title: 'I am presenting our paper Rage against the State Machine at ASPLOS.',
          description: "",
          section: "News",},{id: "talks-thread-networking-and-tock",
          title: 'Thread Networking and Tock',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/tockworld6/";
            },},{id: "talks-openthread-in-tock",
          title: 'OpenThread in Tock',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/tockworld7/";
            },},{id: "talks-tabula-rasa-starting-safe-stays-safe",
          title: 'Tabula Rasa: Starting Safe Stays Safe',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/spices2024/";
            },},{id: "talks-type-enforced-peripheral-management",
          title: 'Type Enforced Peripheral Management',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/ucsd-cns-review2025/";
            },},{id: "talks-improving-driver-safety-with-typestates",
          title: 'Improving Driver Safety with TypeStates',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/tockworld8/";
            },},{id: "talks-rage-against-the-state-machine",
          title: 'Rage Against the State Machine',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/asplos2026/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%70%6F%74%79%6F%6E%64%79@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tyler-potyondy", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6jwTiSwAAAAJ", "_blank");
        },
      },];
