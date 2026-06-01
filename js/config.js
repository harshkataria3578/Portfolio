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
      {
        slug: "vfx-animation",
        /** Dedicated page (no query string). Keep in sync with data-detail-slug on that HTML file. */
        detailPage: "vfx-animation.html",
        listTitle: "Melee Combat: VFX & Animation — Substance Designer, Niagara & Maya",
        listSubtitle: "Real-time effects from texture to motion",
        /** Thumbnail URL for portfolio card. Add when ready. */
        thumbnail: "assets/melee-combat-vfx-poster.png",
        entry: {
          badge: "Melee combat showcase",
          title: "Melee Combat: VFX & Animation",
          author: "Harsh Kataria",
          authorUrl: "",
          context: "Showcase · Substance Designer, Niagara & Maya",
          contextUrl: "",
          date: "2026",
          categories: [
            "Real-time VFX",
            "Niagara",
            "Substance Designer",
            "Maya",
          ],
          excerpt:
            "A real-time VFX piece built across the full effects pipeline: textures authored in Substance Designer, the effects assembled and simulated with Niagara in Unreal Engine, and the supporting motion animated in Maya. The breakdown below walks through each effect.",
        },
        hero: {
          title: "VFX showreel",
          provider: "youtube",
          id: "EAfYrcvPUNY",
        },
        sections: [
          {
            slug: "vfx-overview",
            heading: "Planning",
            ornament: "",
            paragraphs: [
              "For this project I created a melee-combat-focused set of VFX and animations. I owned the whole effects pipeline end to end — authoring my own textures in Substance Designer, building the effects in Niagara, and animating the supporting motion in Maya.",
              "I planned the moveset and the effects each move would need: Idle (no VFX); Charge Up (energy gathering particles, energy burst particles, and a ring cloud burst); Punch Combo (hit impact and punch trail); and Kick (gather energy as the kick starts, plus a ground slam and AoE burst effect).",
            ],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "punch-combo-vfx",
            heading: "Punch Combo VFX",
            ornament: "",
            paragraphs: [
              "I first created the textures in Substance Designer for the punch trail, flash, impact ring, and a noise texture.",
              "In Niagara I built a trail material where I can control the fade and emissive effect, and a separate flash material. I went for a purple-and-black finish on the VFX to match the character concept — it blends in well with the character.",
              "I call the VFX through anim notifies: the trail VFX is attached to the finger bone, and for the flash effect I turned on local space in the properties so it doesn't follow the trail and only appears once. For the impact effect, I spawn it at a specific location using notifies.",
            ],
            mediaGrid: [
              {
                title: "Animation & final in-engine result",
                items: [
                  {
                    src: "img/vfx/punch_combo_anim.gif",
                    alt: "Punch combo animation in Maya",
                    caption: "Punch combo (Maya animation)",
                  },
                  {
                    src: "img/vfx/punch_combo_final.gif",
                    alt: "Punch combo with trail and flash VFX in Unreal",
                    caption: "In-engine with trail + flash VFX",
                  },
                ],
              },
              {
                title: "Substance Designer textures",
                items: [
                  {
                    src: "img/vfx/punch_tex_trail.png",
                    alt: "Punch trail texture graph in Substance Designer",
                    caption: "Trail",
                  },
                  {
                    src: "img/vfx/punch_tex_flash.png",
                    alt: "Flash texture graph in Substance Designer",
                    caption: "Flash",
                  },
                  {
                    src: "img/vfx/punch_tex_ring.png",
                    alt: "Impact ring texture graph in Substance Designer",
                    caption: "Impact ring",
                  },
                  {
                    src: "img/vfx/punch_tex_noise.png",
                    alt: "Noise texture graph in Substance Designer",
                    caption: "Noise",
                  },
                ],
              },
              {
                title: "Niagara materials",
                items: [
                  {
                    src: "img/vfx/punch_mat_trail.png",
                    alt: "Trail material graph in Unreal",
                    caption: "Trail material",
                  },
                  {
                    src: "img/vfx/punch_mat_flash.png",
                    alt: "Flash material graph in Unreal",
                    caption: "Flash material",
                  },
                  {
                    src: "img/vfx/punch_mat_ring.png",
                    alt: "Impact ring material graph in Unreal",
                    caption: "Impact ring material",
                  },
                ],
              },
              {
                title: "Niagara systems",
                items: [
                  {
                    src: "img/vfx/punch_ns_trail.png",
                    alt: "Punch trail Niagara system",
                    caption: "NS_PunchTrail",
                  },
                  {
                    src: "img/vfx/punch_ns_impact.png",
                    alt: "Impact Niagara system",
                    caption: "NS_Impact",
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
            slug: "chargeup-vfx",
            heading: "Charge-up VFX",
            ornament: "",
            paragraphs: [
              "I first created a wave ring effect in Substance Designer.",
              "Then I made a material in Unreal with the same cut-out effect as my impact ring.",
              "After creating the material I built the Niagara systems: energy gathering particles and the energy burst using basic sprites, and the ring burst using the wave ring material I created.",
            ],
            mediaGrid: [
              {
                title: "Animation & final in-engine result",
                items: [
                  {
                    src: "img/vfx/charge_anim.gif",
                    alt: "Charge-up animation in Maya",
                    caption: "Charge-up (Maya animation)",
                  },
                  {
                    src: "img/vfx/charge_final.gif",
                    alt: "Charge-up with full VFX in Unreal",
                    caption: "In-engine with full VFX",
                  },
                ],
              },
              {
                title: "Substance Designer & material",
                items: [
                  {
                    src: "img/vfx/charge_tex_ring.png",
                    alt: "Wave ring texture graph in Substance Designer",
                    caption: "Wave ring (Substance)",
                  },
                  {
                    src: "img/vfx/charge_mat_ring.png",
                    alt: "Ring material with cut-out effect in Unreal",
                    caption: "Ring material (cut-out)",
                  },
                ],
              },
              {
                title: "Niagara systems",
                items: [
                  {
                    src: "img/vfx/charge_ns_gather.png",
                    alt: "NS_GatherEnergy Niagara system",
                    caption: "NS_GatherEnergy",
                  },
                  {
                    src: "img/vfx/charge_ns_burst.png",
                    alt: "NS_EnergyBurst Niagara system",
                    caption: "NS_EnergyBurst",
                  },
                  {
                    src: "img/vfx/charge_ns_ringburst.png",
                    alt: "NS_RingBurst Niagara system",
                    caption: "NS_RingBurst",
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
            slug: "groundslam-vfx",
            heading: "Ground Slam VFX",
            ornament: "",
            paragraphs: [
              "I made a burn mask ground effect in Substance Designer.",
              "Then I created a material in Unreal that has a fade effect.",
              "After that I made the ground fade effect using the systems I'd made before, plus a separate flash effect for the legs using the flash material I made previously. I also made a trail effect for the legs the same way I did for the arms in the punch combo.",
            ],
            mediaGrid: [
              {
                title: "Animation & final in-engine result",
                items: [
                  {
                    src: "img/vfx/slam_anim.gif",
                    alt: "Ground slam animation in Maya",
                    caption: "Ground slam (Maya animation)",
                  },
                  {
                    src: "img/vfx/slam_final.gif",
                    alt: "Ground slam with full VFX in Unreal",
                    caption: "In-engine with full VFX",
                  },
                ],
              },
              {
                title: "Substance Designer & material",
                items: [
                  {
                    src: "img/vfx/slam_tex_burnmask.png",
                    alt: "Burn mask texture graph in Substance Designer",
                    caption: "Burn mask (Substance)",
                  },
                  {
                    src: "img/vfx/slam_mat_burnmask.png",
                    alt: "Ground burn material with fade effect in Unreal",
                    caption: "Ground burn material (fade)",
                  },
                ],
              },
              {
                title: "Niagara systems",
                items: [
                  {
                    src: "img/vfx/slam_ns_groundslam.png",
                    alt: "NS_GroundSlam Niagara system",
                    caption: "NS_GroundSlam",
                  },
                  {
                    src: "img/vfx/slam_ns_flash.png",
                    alt: "NS_Flash Niagara system for the legs",
                    caption: "NS_Flash (legs)",
                  },
                  {
                    src: "img/vfx/slam_ns_energybuildup.png",
                    alt: "NS_EnergyBuildup Niagara system for the leg trail",
                    caption: "NS_EnergyBuildup (leg trail)",
                  },
                ],
              },
            ],
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
              name: "Paragon: Gideon (Epic Games)",
              detail: "character — rigged base mesh used under the Paragon license. All VFX, materials, and animation in this project are my own work.",
              url: "",
            },
          ],
        },
        tags: [
          "Real-time VFX",
          "Niagara",
          "Unreal Engine 5",
          "Substance Designer",
          "Maya",
        ],
      },
    ],
  },
  gamesHub: {
    hubTitle: "Games",
    hubIntro: "Projects I contributed animation to — click through for details.",
    items: [
      {
        slug: "dungeon-clash",
        slugAliases: ["sample-team-project"],
        detailPage: "dungeon-clash.html",
        listTitle: "Dungeon Clash",
        listSubtitle: "Animation Lead · Unreal Engine 5 · 2026",
        coverImage: "assets/dungeon-clash-cover.png",
        entry: {
          badge: "Team project",
          title: "Dungeon Clash",
          author: "Harsh Kataria",
          authorUrl: "",
          context: "Platform fighter · Nine Lives Studio",
          contextUrl: "https://whaled-beach.itch.io/dungeon-clash",
          date: "2026",
          categories: [
            "Animation Lead",
            "Rigging",
            "Combat",
            "Unreal Engine 5",
          ],
          excerpt:
            "Dungeon Clash is a 1v1 platform fighter built in Unreal Engine 5 by Nine Lives Studio at the University of Staffordshire. I was the animation lead — I rigged the playable character, handled the Unreal animation implementation, and animated most of the combat moveset.",
        },
        hero: {
          title: "Gameplay trailer",
          provider: "youtube",
          id: "DeBEx_d31W0",
        },
        sections: [
          {
            slug: "overview",
            heading: "Overview",
            ornament: "",
            paragraphs: [
              "Dungeon Clash is a local 1v1 platform fighter — knock your opponent off the stage until they run out of lives, across handcrafted stages full of hazards. It was made by Nine Lives Studio, a team of programmers, designers, artists, and animators at the University of Staffordshire.",
              "I led a team of three animators. We originally planned three playable characters but scoped down to one so the animations could be more polished, settling on a barbarian who dual-wields a large axe. I rigged the playable character, handled the Unreal animation implementation, and animated most of the combat moveset.",
              "As the lead, I built the technical foundation for the character's movement. Leading three animators meant balancing production speed with each person's strengths. I built an Excel tracking sheet that categorised animations by area (locomotion vs. combat) and importance, and assigned work by skill and preference. We worked with the design team on the move list so every attack had a clear start-up, active, and recovery phase.",
            ],
            referenceLinks: [
              {
                url: "https://whaled-beach.itch.io/dungeon-clash",
                label: "Play Dungeon Clash on itch.io",
                note: "(2-player, controllers required)",
              },
            ],
            referenceLinksHeading: "Play the game",
            mediaGrid: [],
            embed: null,
            afterEmbedParagraphs: [],
            bts: null,
            tech: [],
          },
          {
            slug: "rigging",
            heading: "Rigging",
            ornament: "",
            paragraphs: [
              "I rigged the character myself using Advanced Skeleton for the bones and control curves. For skinning I used NG Skin Tools instead of the default Advanced Skeleton skinning, which caused issues in Unreal.",
              "I built a separate skeleton and control curve for the axe and attached it to the main rig, so the axe could be animated in Maya and behave the same in engine. With this setup I could swap the axe from one hand to the other just by keying the weight on the axe control.",
              "Before starting the animations I tested the rig with root motion in engine to make sure everything exported and played back cleanly, then handed the updated rig off to the other animators.",
              "Later I got the game-ready version of the model and reskinned it in Maya by copying the weights from the old mesh onto the game-ready one, then updated it in engine.",
              "The Advanced Skeleton rig gave me IK/FK switching and squash-and-stretch for the exaggerated hit-stop and anticipation a fighter needs; NG Skin Tools handled the bulky silhouette so the mesh held up around the shoulders and hips during extreme poses; and a root-motion workflow kept the weight and travel distance of moves like the neutral combo and dash attack accurate in engine, avoiding foot sliding.",
            ],
            mediaGrid: [
              {
                title: "Rig breakdown",
                items: [
                  {
                    src: "img/dungeon-clash/main-rig.mp4",
                    video: true,
                    caption: "Main character rig (Advanced Skeleton + NG Skin Tools)",
                  },
                  {
                    src: "img/dungeon-clash/axe-rig.mp4",
                    video: true,
                    caption: "Axe rig — swappable between hands by keying the control weight",
                  },
                ],
              },
              {
                title: "Root motion test in engine",
                items: [
                  {
                    src: "img/dungeon-clash/root-motion-test.gif",
                    alt: "Root motion test of the rig in Unreal Engine",
                    caption: "Testing root motion in engine before animating",
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
            slug: "combat-animations",
            heading: "Combat animations",
            ornament: "",
            paragraphs: [
              "I animated the neutral combo chain — NC1 (pommel smack), NC2 (kick), and NC3 (axe hit). The biggest challenge was making the axe swings feel natural with a dual-wielded weapon, so I recorded myself as reference to capture the weight and timing, leaning on anticipation, follow-through, and squash-and-stretch to sell the size of the character.",
              "I also animated the ground attacks — side attack, up attack, and down attack — then the air attacks: neutral air, forward air, up air, and down air, plus the down special. We worked with the design team on the moveset. From this point on I used Super Smash Bros. Ultimate frame data as reference for the attack shapes and timing.",
            ],
            referenceLinks: [
              {
                url: "https://ultimateframedata.com/smash",
                label: "Ultimate Frame Data",
                note: "(attack reference)",
              },
            ],
            referenceLinksHeading: "Reference",
            mediaGrid: [
              {
                title: "Neutral combos",
                items: [
                  { src: "img/dungeon-clash/combat/nc1_l.mp4", video: true, autoplay: true, caption: "NC1 — left" },
                  { src: "img/dungeon-clash/combat/nc1_r.mp4", video: true, autoplay: true, caption: "NC1 — right" },
                  { src: "img/dungeon-clash/combat/nc2_l.mp4", video: true, autoplay: true, caption: "NC2 — left" },
                  { src: "img/dungeon-clash/combat/nc2_r.mp4", video: true, autoplay: true, caption: "NC2 — right" },
                  { src: "img/dungeon-clash/combat/nc3_l.mp4", video: true, autoplay: true, caption: "NC3 — left" },
                  { src: "img/dungeon-clash/combat/nc3_r.mp4", video: true, autoplay: true, caption: "NC3 — right" },
                ],
              },
              {
                title: "Ground attacks",
                items: [
                  { src: "img/dungeon-clash/combat/sa_l.mp4", video: true, autoplay: true, caption: "Side attack — left" },
                  { src: "img/dungeon-clash/combat/sa_r.mp4", video: true, autoplay: true, caption: "Side attack — right" },
                  { src: "img/dungeon-clash/combat/ua_l.mp4", video: true, autoplay: true, caption: "Up attack — left" },
                  { src: "img/dungeon-clash/combat/ua_r.mp4", video: true, autoplay: true, caption: "Up attack — right" },
                  { src: "img/dungeon-clash/combat/da_l.mp4", video: true, autoplay: true, caption: "Down attack — left" },
                  { src: "img/dungeon-clash/combat/da_r.mp4", video: true, autoplay: true, caption: "Down attack — right" },
                ],
              },
              {
                title: "Air attacks",
                items: [
                  { src: "img/dungeon-clash/combat/n_air_l.mp4", video: true, autoplay: true, caption: "Neutral air — left" },
                  { src: "img/dungeon-clash/combat/n_air_r.mp4", video: true, autoplay: true, caption: "Neutral air — right" },
                  { src: "img/dungeon-clash/combat/forward_air_l.mp4", video: true, autoplay: true, caption: "Forward air — left" },
                  { src: "img/dungeon-clash/combat/forward_air_r.mp4", video: true, autoplay: true, caption: "Forward air — right" },
                  { src: "img/dungeon-clash/combat/up_air_l.mp4", video: true, autoplay: true, caption: "Up air — left" },
                  { src: "img/dungeon-clash/combat/up_air_r.mp4", video: true, autoplay: true, caption: "Up air — right" },
                  { src: "img/dungeon-clash/combat/down_air_l.mp4", video: true, autoplay: true, caption: "Down air — left" },
                  { src: "img/dungeon-clash/combat/down_air_r.mp4", video: true, autoplay: true, caption: "Down air — right" },
                ],
              },
              {
                title: "Down special",
                items: [
                  { src: "img/dungeon-clash/combat/ds_l.mp4", video: true, autoplay: true, caption: "Down special — left" },
                  { src: "img/dungeon-clash/combat/ds_r.mp4", video: true, autoplay: true, caption: "Down special — right" },
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
            heading: "Unreal implementation",
            ornament: "",
            paragraphs: [
              "Once the locomotion and jump animations were done I set up the animation blueprint in engine, building the event graph and making sure everything blended and played smoothly. I created a blend space for locomotion from idle to run.",
              "For the double jump I reused the existing double-jump input system the tech team had built. I then set up four states in the animation blueprint — Jump, Double Jump, and two Fall states — so the double jump landed cleanly without the wrong jump animation playing on the way down.",
              "For the launch hit reacts I used the boolean the tech team created so that a launched character falls back to the fall state instead of replaying the jump.",
            ],
            referenceLinks: [
              {
                url: "https://www.youtube.com/watch?v=mzsYQL8gkvs",
                label: "Wall cling reference",
                note: "",
              },
            ],
            referenceLinksHeading: "Reference",
            referenceLinksPosition: "end",
            mediaGrid: [
              {
                title: "Animation blueprint — state machine & transitions",
                items: [
                  {
                    src: "img/dungeon-clash/anim-bp-state-machine.png",
                    alt: "Animation blueprint state machine — Jump, FallLoop, DoubleJump, Fall, Locomotion",
                    caption: "State machine — Jump, FallLoop, DoubleJump, Fall, Locomotion",
                  },
                  {
                    src: "img/dungeon-clash/anim-bp-jump-to-doublejump.png",
                    alt: "Transition condition: Jump Current Count greater than 1",
                    caption: "Jump → Double Jump (Jump Count > 1)",
                  },
                  {
                    src: "img/dungeon-clash/anim-bp-jump-to-fall.png",
                    alt: "Transition condition: IsFalling AND time remaining less than 0.6 OR IsKnockedBack",
                    caption: "Jump / Double Jump → Fall (incl. launch hit-react boolean)",
                  },
                ],
              },
            ],
            embed: null,
            afterEmbedParagraphs: [
              "Last I animated a wall cling and wired it into the state machine. I reused the wall-detection system the tech team had built and called the booleans I needed, so the cling state only plays when the character is actually touching a wall, not just jumping. It took a couple of passes: at first it only triggered after a normal jump, so I rerouted the double-jump fall state through wall cling; then I added a condition so that moving off the wall without jumping correctly returns to the fall state.",
            ],
            afterEmbedMediaGrid: [
              {
                title: "Wall cling — animation",
                items: [
                  {
                    src: "img/dungeon-clash/combat/wc_l.mp4",
                    video: true,
                    autoplay: true,
                    caption: "Wall cling — left",
                  },
                  {
                    src: "img/dungeon-clash/combat/wc_r.mp4",
                    video: true,
                    autoplay: true,
                    caption: "Wall cling — right",
                  },
                ],
              },
              {
                title: "Wall cling — state machine & transitions",
                items: [
                  {
                    src: "img/dungeon-clash/anim-bp-state-machine-final.png",
                    alt: "Final animation blueprint state machine including the WallCling state",
                    caption: "Final state machine with Wall Cling integrated",
                  },
                  {
                    src: "img/dungeon-clash/wallcling-enter.png",
                    alt: "Transition condition into Wall Cling: Trace Hit Wall AND Can Jump",
                    caption: "Into Wall Cling (Trace Hit Wall AND Can Jump)",
                  },
                  {
                    src: "img/dungeon-clash/wallcling-exit.png",
                    alt: "Transition condition out of Wall Cling: NOT Trace Hit Wall AND IsFalling",
                    caption: "Out of Wall Cling (no longer touching wall AND falling)",
                  },
                ],
              },
            ],
            bts: null,
            tech: [],
          },
        ],
        finalThoughts: null,
        thanks: {
          heading: "Credits",
          ornament: "",
          items: [
            {
              name: "Nine Lives Studio — University of Staffordshire",
              detail: "the team behind Dungeon Clash.",
              url: "https://whaled-beach.itch.io/dungeon-clash",
            },
            {
              name: "Project Lead & Producer",
              detail: "Stuart Watkinson.",
              url: "",
            },
            {
              name: "Game Programmers",
              detail:
                "Vedang Kadam (Lead), Stuart Watkinson, Chloe Boyd, Sebastian Kwan Platts, Ryan Cook, Kia Weng.",
              url: "",
            },
            {
              name: "Game Designers",
              detail:
                "Matthew Reuss (Lead), Elliot Lancaster, Ethan Mejia, Alice Fulham, Jamie Truman, Lewis Adams, Jack Nashir, Avinash Kadali.",
              url: "",
            },
            {
              name: "Concept Art Team",
              detail: "Isabelle Lear (Lead), Evie Hotter, Omar Noor.",
              url: "",
            },
            {
              name: "Animation Team",
              detail: "Harsh Kataria (Lead), Alex Carolan, Rose Money.",
              url: "",
            },
            {
              name: "Game Art",
              detail:
                "Ryan Pilkington (Lead), Jordan Lofthouse, Matthew Mayes-Welsman, Mason Stutsbury.",
              url: "",
            },
            {
              name: "Sound",
              detail: "Stuart Watkinson, Luis \"Mario\" Murcia, Omar Noor.",
              url: "",
            },
          ],
        },
        tags: [
          "Animation Lead",
          "Unreal Engine 5",
          "Rigging",
          "Maya",
          "Platform fighter",
          "Combat",
        ],
      },
    ],
  },
  about: {
    pageTitle: "About",
    metaDescription:
      "About me — 3D gameplay animator working across Maya and Unreal Engine.",
    portraitImage: "",
    portraitAlt: "",
    heading: "About me",
    lead: "I’m a 3D gameplay animator specializing in creating hand-keyed, expressive character animations and integrating them seamlessly into real-time engines.",
    paragraphs: [
      "I love bridging the gap between artistic performance and technical implementation, ensuring that every movement is both visually polished and highly responsive to player input.",
    ],
    coreSkills: [
      "Hand-Keyed Animation",
      "Character Rigging",
      "Gameplay Mechanics",
      "State Machine Architecture",
      "Combat Design",
      "Animation Blueprint Scripting",
    ],
    tools: [
      {
        name: "Maya",
        icon: "https://cdn.simpleicons.org/autodeskmaya/e2e2e5",
      },
      {
        name: "Unreal Engine",
        icon: "https://cdn.simpleicons.org/unrealengine/e2e2e5",
      },
      {
        name: "Motion Builder",
        icon: "https://cdn.simpleicons.org/autodesk/e2e2e5",
      },
    ],
    education: [
      {
        title: "BSc (Hons) Computer Games Design with Animation",
        institution: "Staffordshire University",
      },
    ],
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
