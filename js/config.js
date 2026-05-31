/**
 * Site config — hubs, detail items, and shared links.
 * YouTube ID: from watch?v=___  ·  Vimeo: numeric ID from vimeo.com/___
 */
window.PORTFOLIO_CONFIG = {
  site: {
    name: "Harsh Kataria",
    role: "Game animator",
    titleSuffix: "Animator",
    defaultDescription:
      "Student combat animation portfolio — Maya and Unreal Engine 5.",
    cvUrl: "",
    footerLine: "Feel free to reach out if you enjoyed my portfolio!",
  },
  portfolioHub: {
    reel: {
      title: "Showreel",
      provider: "youtube",
      id: "hNaZGth9hnc",
    },
    hubTitle: "Portfolio",
    worksHeading: "Portfolio pieces",
    hubIntro:
      "Selected animation work — click a piece for breakdowns and embedded clips.",
    items: [
      {
        slug: "hybrid-action-combat-system",
        slugAliases: ["combat-game-animation"],
        /** Dedicated page (no query string). Keep in sync with data-detail-slug on that HTML file. */
        detailPage: "hybrid-action-combat-system.html",
        listTitle: "Hybrid Action Combat System — Maya & UE5",
        listSubtitle: "Souls-like weight meets hack-and-slash flow",
        /** Thumbnail URL for portfolio card (wide image over taupe plate). Add when ready. */
        thumbnail: "assets/hybrid-action-combat-poster.png",
        entry: {
          badge: "Artefact report",
          title: "Hybrid Action Combat System",
          author: "Harsh Kataria",
          authorUrl: "",
          context: "Showcase · Maya & Unreal Engine 5",
          contextUrl: "",
          date: "2026",
          categories: [
            "Hybrid combat",
            "Unreal Engine 5",
            "Behaviour trees",
            "Maya",
          ],
          excerpt:
            "A student combat artefact that merges the deliberate weight of Souls-like encounters with the responsive, combo-friendly feel of hack-and-slash action. Built in UE5 with Animation Blueprints, montages, AI behaviour trees, and a full Maya-to-engine animation pipeline — gameplay and motion are shown in the video below.",
        },
        hero: {
          title: "Gameplay showcase — hybrid combat prototype",
          provider: "youtube",
          id: "9lrAbXO09fw",
        },
        sections: [
          {
            slug: "project-goal",
            heading: "Project goal & research gap",
            ornament: "",
            paragraphs: [
              "The aim was to design and implement a combat system that merges the deliberate weight of Souls-like games with the high-octane fluidity of hack-and-slash titles: tactical commitment and stamina-aware actions on one side, and expressive responsiveness and state flow on the other.",
              "FromSoftware-style references foreground stamina-gated actions, high lethality, and grounded stance for readability. Hack-and-slash references foreground fluid state movement, combo chains, and strong audiovisual feedback. The objective was to synthesise those opposing philosophies into one coherent hybrid loop that addresses the gap between slow, punishing combat and fast, cancel-heavy combat.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "design-references",
            heading: "Design references — weight, flow & spectacle",
            ornament: "",
            paragraphs: [
              "Three titles anchored the hybrid brief. Elden Ring (FromSoftware) was the primary reference for weight: stamina management, high lethality, and deliberate timing — respecting startup and recovery commitment so attacks feel grounded, and anchoring the character to the environment so encounters read as tactical rather than arcade-only.",
              "Devil May Cry 5 (Capcom) informed the hack-and-slash side: animation-aware canceling, extended combos, and spectacle through clear feedback. Input buffering and smoother state transitions were priorities so the hybrid still feels responsive when the player chains actions.",
              "Black Myth: Wukong tied the two together as a contemporary hybrid: grounded movement paired with fast attack cadence and explicit resource rules (stamina and similar systems). It supported the target feel that scale, speed, and weight can coexist in one production-style action framework.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [
              {
                title: "Elden Ring — weight & precision",
                caption:
                  "Stamina management, lethality, startup/recovery frames, and grounded stance — carried forward into the hybrid spec.",
                image: "img/hybrid-report/image2.jpeg",
                imageAlt: "Elden Ring reference notes and still",
              },
              {
                title: "Devil May Cry 5 — flow & spectacle",
                caption:
                  "Canceling, combo flow, input buffering, and VFX-forward feedback informed the responsiveness pillar.",
                image: "img/hybrid-report/image3.png",
                imageAlt: "Devil May Cry 5 reference notes",
              },
              {
                title: "Black Myth: Wukong — hybrid case study",
                caption:
                  "Grounded locomotion vs fast cadence and explicit resources — the primary “target feel” reference for this artefact.",
                image: "img/hybrid-report/image4.jpeg",
                imageAlt: "Black Myth Wukong hybrid reference",
              },
            ],
          },
          {
            slug: "pipeline",
            heading: "Technical pipeline — Animation & rigging",
            ornament: "",
            paragraphs: [
              "Workflow: Maya → FBX → Unreal Engine 5.",
              "I used two characters — one player and one enemy — from Epic's Paragon content (released free for Unreal Engine). They came already rigged, so I just used Maya to define the bones and make the animation controls.",
              "I used references from games like Elden Ring, Sekiro, and Where Winds Meet for creating my combat animations.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "motion-references",
            heading: "Player Animations",
            ornament: "",
            paragraphs: [
              "I used the references linked below (greatsword swings, finisher beats, and attack timing from YouTube collections) to animate the player in Maya. The GIFs further down are all animations I made in Maya.",
              "The full moveset covers locomotion (idle, walk, run, walk stop, run stop), light and heavy attack chains, the charged attack, dodge, directional hit reactions, death, and the finisher. Click any clip to view it fullscreen.",
            ],
            referenceLinks: [
              {
                label: "Greatsword swing references",
                url: "https://www.youtube.com/watch?v=V6O_sMDWxDQ",
              },
              {
                label: "Finisher / execution references",
                url: "https://www.youtube.com/watch?v=wodFkPrFUag",
              },
              {
                label: "Attack timing references",
                url: "https://www.youtube.com/watch?v=R_oxj_oayYE",
              },
            ],
            mediaGrid: [
              {
                title: "Locomotion cycles",
                intro: "Locomotion.",
                items: [
                  {
                    src: "img/hybrid-report/image5.gif",
                    alt: "Idle locomotion",
                    caption: "Idle",
                  },
                  {
                    src: "img/hybrid-report/walk.gif",
                    alt: "Walk",
                    caption: "Walk",
                  },
                  {
                    src: "img/hybrid-report/run.gif",
                    alt: "Run",
                    caption: "Run",
                  },
                  {
                    src: "img/hybrid-report/image8.gif",
                    alt: "Walk stop",
                    caption: "Walk stop",
                  },
                  {
                    src: "img/hybrid-report/image9.gif",
                    alt: "Run stop",
                    caption: "Run stop",
                  },
                ],
              },
              {
                title: "Light attack chain",
                intro: "Four-step light combo.",
                items: [
                  {
                    src: "img/hybrid-report/la1.gif",
                    alt: "Light attack 1",
                    caption: "LA1",
                  },
                  {
                    src: "img/hybrid-report/la2.gif",
                    alt: "Light attack 2",
                    caption: "LA2",
                  },
                  {
                    src: "img/hybrid-report/la3.gif",
                    alt: "Light attack 3",
                    caption: "LA3",
                  },
                  {
                    src: "img/hybrid-report/la4.gif",
                    alt: "Light attack 4",
                    caption: "LA4",
                  },
                ],
              },
              {
                title: "Heavy attack chain",
                intro: "Three-step heavy combo.",
                items: [
                  {
                    src: "img/hybrid-report/ha1.gif",
                    alt: "Heavy attack 1",
                    caption: "HA1",
                  },
                  {
                    src: "img/hybrid-report/ha2.gif",
                    alt: "Heavy attack 2",
                    caption: "HA2",
                  },
                  {
                    src: "img/hybrid-report/ha3.gif",
                    alt: "Heavy attack 3",
                    caption: "HA3",
                  },
                ],
              },
              {
                title: "Charged attack",
                intro: "Charge start and charged attack.",
                items: [
                  {
                    src: "img/hybrid-report/ca.gif",
                    alt: "Charge start",
                    caption: "CS",
                  },
                  {
                    src: "img/hybrid-report/cs.gif",
                    alt: "Charged attack",
                    caption: "CA",
                  },
                ],
              },
              {
                title: "Dodge",
                intro: "Evasive dodge.",
                items: [
                  {
                    src: "img/hybrid-report/dodge.gif",
                    alt: "Dodge",
                    caption: "Dodge",
                  },
                ],
              },
              {
                title: "Hit reacts & death",
                intro: "Directional hit reactions and the death animation.",
                items: [
                  {
                    src: "img/hybrid-report/hit_react_left.gif",
                    alt: "Hit react left",
                    caption: "Hit react (left)",
                  },
                  {
                    src: "img/hybrid-report/hit_react_right.gif",
                    alt: "Hit react right",
                    caption: "Hit react (right)",
                  },
                  {
                    src: "img/hybrid-report/death.gif",
                    alt: "Death",
                    caption: "Death",
                  },
                ],
              },
              {
                title: "Finisher",
                intro: "Special finisher / execution.",
                items: [
                  {
                    src: "img/hybrid-report/finisher.gif",
                    alt: "Finisher",
                    caption: "Finisher",
                  },
                ],
              },
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "enemy-animations",
            heading: "Enemy Animations",
            ornament: "",
            paragraphs: [
              "The enemy's moveset was animated in Maya. Click any clip to view it fullscreen.",
            ],
            mediaGrid: [
              {
                title: "Locomotion cycles",
                intro: "Locomotion.",
                items: [
                  {
                    src: "img/hybrid-report/enemy_idle.gif",
                    alt: "Enemy idle",
                    caption: "Idle",
                  },
                  {
                    src: "img/hybrid-report/enemy_chase.gif",
                    alt: "Enemy chase",
                    caption: "Chase",
                  },
                  {
                    src: "img/hybrid-report/enemy_strafe.gif",
                    alt: "Enemy strafe",
                    caption: "Strafe",
                  },
                ],
              },
              {
                title: "Attack variants",
                intro: "Two attack variants.",
                items: [
                  {
                    src: "img/hybrid-report/enemy_attack1.gif",
                    alt: "Enemy attack 1",
                    caption: "Attack 1",
                  },
                  {
                    src: "img/hybrid-report/enemy_attack2.gif",
                    alt: "Enemy attack 2",
                    caption: "Attack 2",
                  },
                ],
              },
              {
                title: "Hit reacts & death",
                intro: "Directional hit reactions and the death animation.",
                items: [
                  {
                    src: "img/hybrid-report/enemy_hrl.gif",
                    alt: "Enemy hit react left",
                    caption: "Hit react (left)",
                  },
                  {
                    src: "img/hybrid-report/enemy_hrr.gif",
                    alt: "Enemy hit react right",
                    caption: "Hit react (right)",
                  },
                  {
                    src: "img/hybrid-report/enemy_hrk.gif",
                    alt: "Enemy hit react knockback",
                    caption: "Hit react (knockback)",
                  },
                  {
                    src: "img/hybrid-report/enemy_death.gif",
                    alt: "Enemy death",
                    caption: "Death",
                  },
                ],
              },
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "unreal-implementation",
            heading: "Unreal Implementation — Combat System",
            ornament: "",
            paragraphs: [
              "I watched a structured UE5 third-person combat tutorial series to help me build the combat system in Unreal Engine. The playlist covered targeting, soft-lock, AI opponents, finisher logic, hit reactions, and the rest of the gameplay systems wiring — I used it as reference and then implemented and adapted those systems for this project.",
              "On top of what the playlist covered, I designed and added the parts that weren't in it: the player Animation Blueprint state machine, a stamina system that gates actions, and the charged attack mechanic (upper-body slot so the lower body keeps moving while the charge winds).",
            ],
            referenceLinksPosition: "after",
            referenceLinks: [
              {
                label: "Combat system tutorial series (YouTube playlist)",
                url: "https://www.youtube.com/watch?v=srpHq7n9iQI&list=PL7fuubrGZdmzA_64A5n_qddbgT71w9MV-",
              },
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "player-implementation",
            heading: "Player Implementation — State Machines & Logic",
            ornament: "",
            paragraphs: [
              "Engine & architecture: Unreal Engine 5 (UE5).",
              "I built the player Animation Blueprint state machine myself to manage locomotion: idle, walk, run, walk stop, run stop, jump, and fall transitions all wired up in the AnimBP graph shown below.",
              "Everything else plays through montages: attacks, hit reacts, dodge, finisher, and death. The gameplay functions are created in the Character Blueprint and triggered from the montages through anim notifies.",
            ],
            mediaGrid: {
              title: "Player AnimBP state machine (my work)",
              items: [
                {
                  src: "img/hybrid-report/image33.png",
                  alt: "Player AnimBP locomotion state machine",
                  caption: "Locomotion state machine (AnimBP)",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "player-systems",
            heading: "Player systems & logic",
            ornament: "",
            paragraphs: [
              "Light and heavy attacks use anim notifies to advance or reset combos and to steer rotation during anticipation. Dodge is gated so it only fires after an attack finishes, preserving commitment while still offering escape windows; dodge includes invincibility frames.",
              "Charged attacks use an upper-body animation slot so the lower body can keep moving while the charge winds. A stamina stat gates actions that need it, so players have to manage their stamina like in Souls-like games.",
            ],
            referenceLinksPosition: "after",
            referenceLinksHeading: "Mechanic showcase videos while in development",
            referenceLinks: [
              {
                label: "Light attack & dodge mechanic",
                url: "https://youtu.be/BK8TcOFWYV8",
              },
              {
                label: "Heavy attack mechanic",
                url: "https://youtu.be/1f9_9WSieZc",
              },
              {
                label: "Charged attack & stamina",
                url: "https://youtu.be/1k0Jh_Y3tBU",
              },
            ],
            mediaGrid: {
              title: "Blueprint & logic (report stills)",
              items: [
                {
                  src: "img/hybrid-report/image34.png",
                  alt: "Light attack and combo notifies",
                  caption: "Light / combo notifies",
                },
                {
                  src: "img/hybrid-report/image35.png",
                  alt: "Heavy attack setup",
                  caption: "Heavy",
                },
                {
                  src: "img/hybrid-report/image36.png",
                  alt: "Dodge gating and rotation",
                  caption: "Dodge / rotation",
                },
                {
                  src: "img/hybrid-report/image37.png",
                  alt: "Charge start anticipation",
                  caption: "Charge start",
                },
                {
                  src: "img/hybrid-report/image38.png",
                  alt: "Charged attack release",
                  caption: "Charged attack",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "enemy-systems",
            heading: "Enemy systems & logic",
            ornament: "",
            paragraphs: [
              "Animation Blueprints (AnimBP) manage the enemy's locomotion and death. Everything else plays through montages — attacks, hit reactions, and execution. The gameplay functions are created in the Base EnemyBP and triggered from the montages through anim notifies.",
              "Hit react & death — I added different hit reactions for different attacks, and the enemy rotates toward the player on hit. I also added a health system for the enemy, and the UI only appears when the player is in range.",
              "Targeting & soft lock — I added a targeting system, and if the player is out of range it stops targeting and the camera unlocks. I also added a soft lock so the player rotates toward whichever enemy they're looking at.",
              "Finisher / execution — the finisher only plays when the enemy's health is low, the player is in range, and the enemy turns toward the player. I added a finisher camera to make it feel more intense, and this state has invincibility frames so the moment resolves cleanly.",
              "Enemy AI & spawner — I set up the enemy AI using a behaviour tree and an AI controller, then created a spawner where I can control how many enemies spawn. The AI logic: the enemy goes toward the player, strafes in a random spot around the player, attacks, then moves to another random spot to strafe and wait. I added an overlay material that flashes when the enemy attacks so the player has time to react.",
            ],
            referenceLinksPosition: "after",
            referenceLinksHeading: "Mechanic showcase videos while in development",
            referenceLinks: [
              {
                label: "Enemy damage mechanic",
                url: "https://youtu.be/zejEFXykQBk",
              },
              {
                label: "Targeting and soft lock system",
                url: "https://youtu.be/UPpRlvW1h5A",
              },
              {
                label: "Finisher / execution mechanic",
                url: "https://youtu.be/zK4F95EKb9k",
              },
              {
                label: "Enemy AI system",
                url: "https://youtu.be/UgGz2QPRgHA",
              },
            ],
            mediaGrid: {
              title: "Enemy implementation (report stills)",
              items: [
                {
                  src: "img/hybrid-report/image39.png",
                  alt: "Enemy BP",
                  caption: "Enemy BP",
                },
                {
                  src: "img/hybrid-report/image40.png",
                  alt: "Hit react",
                  caption: "Hit react",
                },
                {
                  src: "img/hybrid-report/image41.png",
                  alt: "Finisher",
                  caption: "Finisher",
                },
                {
                  src: "img/hybrid-report/image42.png",
                  alt: "Execution",
                  caption: "Execution",
                },
                {
                  src: "img/hybrid-report/image43.png",
                  alt: "Behaviour tree overview",
                  caption: "AI / BT",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "scene-systems",
            heading: "VFX, Environment & Respawn System",
            ornament: "",
            paragraphs: [
              "I've added environment, VFX, lighting and a respawn system. I've downloaded some assets and made this scene a cohesive ancient arena environment built to amplify the player–enemy fantasy and overall game feel. Every environmental choice and VFX, from layout to material detail, is intentionally aligned to match the tone of the characters and enemies, to make it feel like a natural extension of their world rather than just a backdrop for gameplay.",
            ],
            referenceLinksPosition: "after",
            referenceLinksHeading: "Mechanic showcase videos while in development",
            referenceLinks: [
              {
                label: "VFX, environment & respawn",
                url: "https://youtu.be/uqMdYPPcY0k",
              },
            ],
            mediaGrid: {
              title: "",
              items: [
                {
                  src: "img/hybrid-report/image44.png",
                  alt: "Arena layout",
                },
                {
                  src: "img/hybrid-report/image45.png",
                  alt: "Materials and dressing",
                },
                {
                  src: "img/hybrid-report/image46.png",
                  alt: "Lighting",
                },
                {
                  src: "img/hybrid-report/image47.png",
                  alt: "VFX elements",
                },
                {
                  src: "img/hybrid-report/image48.png",
                  alt: "Respawn flow",
                },
              ],
            },
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
        ],
        thanks: {
          heading: "Credits",
          ornament: "",
          items: [
            {
              name: "Paragon: Kwang (Epic Games)",
              detail: "player character — rigged base mesh used under the Paragon license.",
              url: "",
            },
            {
              name: "Paragon: Minions (Epic Games)",
              detail: "enemy character — rigged base mesh used under the Paragon license.",
              url: "",
            },
            {
              name: "Ancient Temple Ruins — Modular Environment (Rasmus Bagner)",
              detail: "arena environment pack used to dress the combat scene.",
              url: "",
            },
          ],
        },
        tags: [
          "Hybrid combat",
          "Unreal Engine 5",
          "Behaviour trees",
          "Maya",
          "Animation Blueprints",
          "Souls-like",
          "Hack-and-slash",
        ],
      },
    ],
  },
  gamesHub: {
    hubTitle: "Games",
    hubIntro: "Projects I contributed animation to — click through for details.",
    items: [
      {
        slug: "sample-team-project",
        listTitle: "Sample Team Project",
        listSubtitle: "Animator · Unreal Engine 5 · 2025",
        coverImage: "",
        entry: {
          badge: "Team project",
          title: "Sample Team Project",
          author: "Harsh Kataria",
          authorUrl: "",
          context: "Third-person action prototype",
          contextUrl: "",
          date: "2025",
          categories: ["Gameplay", "Combat"],
          excerpt:
            "Placeholder game page — replace with your shipped or school project: elevator pitch, your animation scope, and a trailer or gameplay capture.",
        },
        hero: {
          title: "Gameplay trailer",
          provider: "youtube",
          id: "dQw4w9WgXcQ",
        },
        sections: [
          {
            slug: "overview",
            heading: "Overview",
            ornament: "",
            paragraphs: [
              "Describe the game in one paragraph: genre, team size, engine, and milestone (jam, semester game, indie release).",
              "Clarify your role: which characters, which sets of moves, and how you collaborated with design and programming.",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "animation-scope",
            heading: "Animation scope",
            ornament: "",
            paragraphs: [
              "List what you owned: e.g. player light attacks, staggers, boss wind-ups. Mention constraints (rig, timeline, multiplayer).",
            ],
            embed: {
              provider: "youtube",
              id: "dQw4w9WgXcQ",
              caption: "Replace with your in-game capture or montage.",
            },
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
        ],
        finalThoughts: {
          heading: "Takeaways",
          ornament: "",
          paragraphs: [
            "What you learned shipping animations in this project — iteration with code, read tests, or scope tradeoffs.",
          ],
        },
        thanks: null,
        tags: ["Unreal Engine 5", "Team", "Gameplay"],
      },
    ],
  },
  about: {
    pageTitle: "About",
    metaDescription:
      "About me — animation background, tools, and how to get in touch.",
    portraitImage: "",
    portraitAlt: "",
    heading: "About me",
    lead: "I’m a student animator focused on combat and gameplay motion in real-time engines.",
    paragraphs: [
      "Edit this page with your story: training, favorite references, and what you want to work on next.",
      "Keep it concise — recruiters skim. Pair with your reel on the Portfolio page.",
    ],
    skills: ["Autodesk Maya", "Unreal Engine 5", "Gameplay animation"],
  },
  links: {
    linkedin: "https://www.linkedin.com/in/harsh-kataria-032501144",
    email: "mailto:harshkataria3578@gmail.com",
  },
  fx: {
    lottieUrl: "",
    particleCount: 72,
  },
};
