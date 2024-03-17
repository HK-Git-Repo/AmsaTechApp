import { AiOutlineStock } from 'react-icons/ai';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiShakingHands } from "react-icons/gi";
import { LuBadgePercent } from "react-icons/lu";
import { MdAlternateEmail, MdOutlineCardGiftcard, MdOutlineMessage } from 'react-icons/md';
import { CiShoppingCart } from 'react-icons/ci';
import { IoStorefrontOutline } from 'react-icons/io5';
import { LiaAndroid } from 'react-icons/lia';


export const ContactCoords = {
    GSM: "0661 77 13 91",
    Fix: "0522 70 15 03",
    email: "commercial@amsatech.ma",
    address: "159 Bd Yacoub El Mansour, Casablanca",
    locationFromGoogleMap: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.2863877529853!2d-7.649523825408446!3d33.57191274294234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2d70caa147b%3A0x222fe4af87462693!2s159%20Bd%20Yacoub%20El%20Mansour%2C%20Casablanca%2020250!5e0!3m2!1sfr!2sma!4v1706618779133!5m2!1sfr!2sma" className='w-full h-[490px] rounded-md' style={{ border: 0 }} allowFullScreen={false} loading="eager" referrerPolicy='no-referrer-when-downgrade'></iframe>
};

export const ContactLinks = {
    phone: 'tel:+212522701503',
    GSM: 'tel:+212661771391',
    whatsapp: "https://wa.me/+212661771391",
    mail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('commercial@amsatech.ma')}`,
    instagram: "https://www.instagram.com/amsa_tech?igsh=dnAyZ2d4ZnE2MDMz",
    facebook: "https://www.facebook.com/AMSATECHMAROC?mibextid=vk8aRt"
};

export const Images = {
    logo: "/assets/Logo/logo.png",
    hero: {
        bg: "/assets/Hero/bg.jpg",
        pos: "/assets/Hero/pos.jpg"
    },
    solution: {
        bg: "/assets/Solutions/bg.jpg",
        retail_lastSection: '/assets/Solutions/RETAIL/advanced_functions.jpg'
    },
    footer: {
        bg: '/assets/Footer/bg.jpg'
    }
};

export const Data = {
    hero: {
        title: "le partenaire de vente idéal pour gérer votre point de vente",
        writerWords: [
            "Nous Offrons Une Solution Adaptée à Votre Métier :"
        ],
        options: [
            "Restaurant & Café",
            "Boulangerie Pâtisserie",
            "Commerce De Détail"
        ]
    },
    about: [
        {
            title: "À la Pointe du Professionalisme",
            image: "/assets/Apropos/icon1.png",
            infos: [
                `En choisissant AMSATECH,
              vous optez pour une équipe à la pointe du professionalisme.
              Nous nous engageons à fournir des services de la plus haute qualité, allant au-delà des attentes du secteur`
            ]
        },
        {
            title: "Solutions Abordables, Résultats Optimaux",
            image: "/assets/Apropos/icon1.png",
            infos: [
                `Votre succès est au cœur de notre engagement,
              nous nous efforçons de vous offrir des solutions innovantes sans compromettre votre budget.
              Chez AMSATECH, nous croyons qu'un budget adapté est la clé pour atteindre vos objectifs`
            ]
        },
        {
            title: "À Votre Écoute, Toujours Disponible",
            image: "/assets/Apropos/icon1.png",
            infos: [
                `Nous sommes bien plus qu'un service, nous sommes à votre écoute.
              Notre équipe dévouée est toujours disponible pour comprendre vos besoins, répondre à vos questions et vous accompagner à chaque étape.
              Votre satisfaction est notre priorité`
            ]
        },
    ],
    homeProducts: [
        { id: 1, name: "EVOQ", description: "l'alliance de la technologie et du design", src: '/assets/ProduitsAccessoires/produits/p1.PNG' },
        { id: 2, name: "DANDY", description: "tout simplement incontournable", src: '/assets/ProduitsAccessoires/produits/p2.PNG' },
        { id: 3, name: "ELINES", description: "infiniment complet", src: '/assets/ProduitsAccessoires/produits/p3.PNG' },
        { id: 4, name: "LES BORNES", description: "toujours plus avec oxhoo", src: '/assets/ProduitsAccessoires/produits/p4.PNG' },
        { id: 5, name: "MONNAYEURS", description: "sécurisez, optimisez et simplifiez-vous la vie", src: '/assets/ProduitsAccessoires/produits/p5.PNG' },
    ],
    homeAccessoirs: [
        "/assets/ProduitsAccessoires/accessoires/a1.png",
        "/assets/ProduitsAccessoires/accessoires/a1.png",
        "/assets/ProduitsAccessoires/accessoires/a1.png",
        "/assets/ProduitsAccessoires/accessoires/a1.png",
        "/assets/ProduitsAccessoires/accessoires/a1.png",
        "/assets/ProduitsAccessoires/accessoires/a1.png",
        "/assets/ProduitsAccessoires/accessoires/a1.png",
    ],
    solutions: [
        {
            title: "PME",
            image: '/assets/Solutions/pme.jpg',
            infos: [
                "Encaissement",
                "Gestion des stocks et des inventaires",
                "Etiquetage",
                "Gestion des promotions et soldes",
                "Suivi des achats et des besoins en approvisionnement",
                "Données comptables",
                "Gestion des campagnes mail et SMS",
                "E-commerce",
                "Multi magasin",
                "Mobilité"
            ],
            details_link: "/solution/pme"
        },
        {
            title: "RETAIL",
            image: '/assets/Solutions/retail.jpg',
            infos: [
                "Gestion d’encaissement",
                "Prise de RDV Client",
                "Possibilité d’envoi de SMS pour confirmation de rdv",
                "Planning collaborateur",
                "Mailing : envoi de campagne de mails",
                "SMS : Envoi de campagne de SMS (immédiat ou différé)",
                "Gestion de stock",
                "Réservation en ligne",
                "Gestion multi boutique",
                "Accès multi planning",
                "Accès fiche client toutes boutiques",
                "Utilisation bon cadeau multi boutique",
                "Centralisation et consolidation des données"
            ],
            details_link: "/solution/retail"
        },
        {
            title: "CHR",
            image: '/assets/Solutions/chr.jpg',
            infos: [
                "Plan de salle / Réservation",
                "Prise de commande Portable (Android, iOS, Fréquence Radio)",
                "Ecran cuisine dynamique",
                "Gestion de stock",
                "Partage de notes",
                "Accédez à vos établissements en temps réel"
            ],
            details_link: "/solution/chr"
        },
    ],
    solutionDetails: {
        CHR: {
            options: [
                "RESTAURANT",
                "PIZZERIA",
                "SALON DE THÉ",
                "CAFÉ",
                "BOULANGERIE",
                "PÂTISSERIE",
            ],
            chr_items: [
                {
                    title: 'encaissement',
                    content: [
                        '• Interface personnalisable et ergonomique',
                        '• Gestion des tables, des serveurs, plan de salle et des menus …',
                        '• Détection automatique des menus',
                        '• Gestion des promotions',
                        '• Clôture de caisse',
                        '• Gestion des commandes',
                        '• Spécifites par métier',
                        '• Traçabilités des opérations(remises, annulations, offerts …)',
                        '• Gestion des écrans cuisine',
                        '• Gestion des écrans publicitaires, afficheurs clients',
                        '• Gestion de la Fidélités client',
                        '• Statistique avance(comparatif N - 1, marges, pertes, …..)'
                    ],
                    img: '/assets/Solutions/CHR/i1.png'
                },
                {
                    title: 'prise de commande',
                    content: [
                        "Avec un système de point de vente unTill, la prise commandes est rapide et facile. L’utilisation est intuitive et les possibilités sont infinies. De plus, unTill est le moyen le plus rapide de transmettre vos commandes.",
                        "Interconnecté des télécommandes iOS, Android ou encore Orderman® (système radio). La force du logiciel repose sur ses fonctionnalités quasi illimitées!",
                    ],
                    img: '/assets/Solutions/CHR/i2.png'
                },
                {
                    title: 'écran cuisine',
                    content: [
                        "Un écran de production a coupé le souffle.",
                        "UnTill® Kitchen remplace vos commandes de production traditionnelles, en fournissant une compréhension rapide et claire des commandes par table: séparées par course, complètes ou composées. UnTill® Kitchen Management rend cela possible. Parce que le système fait des combinaisons intelligentes de commandes, triés par table ou par course, trié par ordre du plus ancien ou le plus récent, se rappelle ce qui arrive et quand il sera servi.",
                        "Et cela veut dire:",
                        "Le repos et l’attention dans la cuisine",
                        "et donc l’expérience optimale pour vos clients",
                    ],
                    img: '/assets/Solutions/CHR/i3.png'
                },
                {
                    title: 'gestion back-office',
                    content: [
                        "Vous souhaitez plus de contrôle sur vos stocks ?",
                        "Les stocks sont une partie importante du succès de votre entreprise. Cela nécessite un inventaire régulier en cuisine. Si le stock est trop élevé, il s'agit d'un investissement inutile de votre fonds de roulement. Si le stock est trop faible, vous risquez de manquer un chiffre d'affaires important.",
                        "Avec unTill® Stock, votre stock est transparent et entièrement sous contrôle.",
                    ],
                    img: '/assets/Solutions/CHR/i4.png'
                },
                {
                    title: 'connectez-vous, directemment.',
                    content: [
                        "Où que vous soyez, toujours une vision claire de votre chiffre d’affaires actuel et des KPI les plus importants? L’application mobile unTill® Eye rend cela possible.",
                        "Pour les propriétaires d’entreprise et les gestionnaires qui utilisent un système de point de vente unTill®,cette application est un complément idéal.",
                    ],
                    img: '/assets/Solutions/CHR/i5.png'
                },
            ]
        },
        PME: {
            hero: {
                title: "PME",
                description: <span>EBP toujours à vos côtés
                    Vous offrir un accompagnement de qualité et adapté à vos besoins est notre ambition.<br /><br />
                    Appuyez-vous sur notre expérience et laissez-vous guider à chaque étape de votre parcours: de la mise en place de votre logiciel de gestion à sa parfaite maîtrise, en passant par la résolution de vos demandes !
                </span>,
                bg: "/assets/Solutions/PME/hero.jpg"
            },
            firstSection: {
                image: "/assets/Solutions/PME/section1.jpg",
                text: `Nous savons comme il peut être difficile de maîtriser tous les aspects d’une entreprise.
                        C’est pourquoi chez EBP Maroc nous avons édité des logiciel de devis/facturation et de gestion commerciale pour les tpe et pme marocaines.
                        \nCes outils de facturations et de gestion commerciale vous permettront de gestionner vos stocks, analyser vos chiffres clé, créer des devis,
                        facturer.. De plus, nos logiciels s’adaptent à tous types d’entreprises et nos modules vous permettront de de personnaliser vos logiciels
                        selon vos attentes.`,
            },
            lastSection: {
                image: "/assets/Solutions/PME/section3.jpg",
                text: `Nos logiciels de gestion vous permettent d’éditer rapidement et facilement vos documents de vente et d’achat. Les solutions vous permettent aussi d’automatiser vos tâches quotidiennes. Ainsi, vous gagnez un temps précieux et limitez les erreurs de saisies qui peuvent être pénalisées par les réglementations en vigueur.
                        ${"\n"}${"\n"}
                        Démontrez votre professionnalisme à vos clients et démarquez vous de la concurrence grâce à l’édition des devis et factures : personnalisez les aux couleurs et à l’image de votre entreprise (logo, couleurs, etc.).
                        \n\n
                        La tenue de votre trésorerie n’aura jamais été aussi bien optimisée. Grâce à notre logiciel, analysez et suivez vos résultats à l’aide d’indicateurs clés pertinents. Vous agirez ainsi de manière agile et serez à même de prendre les meilleurs décisions pour votre entreprise.
                        \n\n
                        Maîtrisez facilement la gestion de vos stocks et optimisez vos coûts. Améliorez vos délais de paiement en mettant en place des prélèvements et factures électroniques automatiques.
                        \n\n
                        N’attendez plus pour digitaliser votre entreprise !`,
            },
            pmeTarifs: [
                {
                    title: 'Devis / Facturation',
                    content: [
                        {
                            title: '',
                            subtitle: 'Tarif sur Devis',
                            content: [
                                "Devis et facturation",
                                "Tableau de bord",
                                "Statistiques",
                                "Suivi d'activité",
                                "Régelements",
                            ]
                        }
                    ]
                },
                {
                    title: 'Ventes / Achats / Stocks',
                    content: [
                        {
                            title: 'logiciel EBP gestion Commerciale ACTIV Edition Maroc',
                            subtitle: 'Tarif sur Devis',
                            content: [
                                "Gestion des ventes (devis, commandes,factures)",
                                "Relances clients",
                                "Achats et stocks (commandes fournisseurs et réapprovisionnement)",
                                "Tableau de bord",
                                "Statistiques détaillées"
                            ]
                        },
                        {
                            title: 'logiciel EBP gestion Commerciale PRO Edition Maroc',
                            subtitle: 'Tarif sur Devis',
                            content: [
                                "Gestion des ventes (devis, commandes,factures)",
                                "Relances clients",
                                "Achats et stocks (commandes fournisseurs et réapprovisionnement)",
                                "Tableau de bord",
                                "Statistiques détaillées",
                                'Facturation périodique',
                                'Planification des ressources',
                            ]
                        },
                    ]
                },
                {
                    title: 'Gestion commerciale avancée',
                    content: [
                        {
                            title: 'logiciel EBP gestion Commerciale ELITE Edition Maroc',
                            subtitle: 'Tarif sur Devis',
                            content: [
                                "Ventes, achats & stocks (devis, commandes, factures clients et fournisseurs)",
                                "Tableau de bord",
                                "Statistiques détaillées",
                                "Facturation récurrente",
                                "Planification des ressources",
                                "Gestion des impayés",
                                "Personnalisation du logiciel aux besoins spécifiques"
                            ]
                        }
                    ]
                },
            ]
        },
        RETAIL: {
            description: "Choisissez votre logiciel de Facturation et Gestion Commerciale",
            options: [
                "PRÊT A PORTER",
                "CENTRE DE BEAUTÉ",
                "MUSÉE",
                "DÉCORATION",
                "SUPÉRETTE",
                "CHOCOLATERIE",
                "CHAUSSURES",
                "BIJOUTERIE",
            ],
            software: {
                softwareName: "LinéoSoft",
                softwareDescription: [
                    "Logiciel de caisse et de gestion pour les commerces de détail et les commerces spécialisés",
                    <span><span className='font-semibold text-blue-400'>LinéoSoft</span> est un logiciel d’encaissement spécialement conçu pour la gestion au quotidien d’un commerce de détail.</span>,
                    <span>Le logiciel de caisse <span className='font-semibold text-blue-400'>LinéoSoft</span> s’adresse à tous types de commerces et magasins spécialisés.</span>,
                    "Adapté à la plupart des commerces de détail, LinéoSoft est un logiciel simple à prendre en main, fiable et ergonomique.",
                    "C'est l'outil idéal pour la gestion de votre encaissement, le suivi de vos clients, l'étiquetage, la gestion des stocks..."
                ],
                softwareImage: "/assets/Solutions/RETAIL/lineosoft.png"
            },
            avantages: [
                {
                    title: 'Gestion des clients particuliers et professionnels',
                    icon: <GiShakingHands size={30} />,
                    content: "De la vente au comptant à la facturation fin de mois, le logiciel Linéo. s'adapte au profil de vos clients en gérant notamment des tarifs négociés ou des remises ciblées."
                },
                {
                    title: 'Évènementiel',
                    icon: <LuBadgePercent size={30} />,
                    content: "Adressez à vos clients un catalogue et faites les bénéficier d’un bon d’achat ou d’une remise. Gérez des offres telles que 3 articles achetés le 4ème offert etc..."
                },
                {
                    title: 'Gestion de la fidélité',
                    icon: <MdOutlineCardGiftcard size={30} />,
                    content: "Outre la traditionnelle carte récompensant vos clients les plus fidèles, Linéo gère également les cartes cadeaux et les opérations commerciales."
                },
                {
                    title: 'Communication avec vos clients',
                    icon: <MdOutlineMessage size={30} />,
                    content: "Créez des opérations commerciales et diffusez les offres par mail ou par SMS pour inciter vos clients à revenir en magasin."
                },
                {
                    title: 'Gestion des stocks et des achats',
                    icon: <AiOutlineStock size={30} />,
                    content: "Vous achetez à l’unité, au carton, à la palette et vous voulez inclure dans le prix de revient vos coûts de transport. Linéo Soft gèrera avec rigueur vos marges, stocks, réservations client tout en vous assistant dans la préparation de vos commandes fournisseurs et dans le suivi des règlements."
                },
                {
                    title: 'Segmentation de votre clientèle pour une communication pertinente',
                    icon: <HiOutlineUserGroup size={30} />,
                    content: "LinéoSoft analyse le comportement d’achat et la fréquence de passage pour segmenter votre clientèle, analyser les produits qui sont en recul ou en progression pour adapter votre communication par mail ou SMS. "
                },
            ],
            advancedFunctions: [
                {
                    title: 'SMS/E-mailing',
                    icon: <MdAlternateEmail size={30} />,
                    content: "Communiquez avec vos clients : envoyez des campagnes e-mail et SMS !"
                },
                {
                    title: 'E-commerce',
                    icon: <CiShoppingCart size={30} />,
                    content: "Vendez en ligne : connectez nos solutions à des solutions e-commerce !"
                },
                {
                    title: 'Multimagasin',
                    icon: <IoStorefrontOutline size={30} />,
                    content: "Partagez vos données entre les différents sites de vente (article, stock, client, fidélité…)"
                },
                {
                    title: 'Mobilité',
                    icon: <LiaAndroid size={30} />,
                    content: "Réalisez vos inventaires, commandes... sur des terminaux android."
                }
            ]
        }
    },
    references: [
        {
            pole: "Pôle CHR",
            images: [
                '/assets/Références/CHR/i1.png',
                '/assets/Références/CHR/i2.png',
                '/assets/Références/CHR/i3.png',
                '/assets/Références/CHR/i4.png',
                '/assets/Références/CHR/i5.png',
                '/assets/Références/CHR/i6.png',
                '/assets/Références/CHR/i7.png',
                '/assets/Références/CHR/i8.png',
                '/assets/Références/CHR/i9.png',
                '/assets/Références/CHR/i10.png',
                '/assets/Références/CHR/i11.png',
                '/assets/Références/CHR/i12.png',
                '/assets/Références/CHR/i13.png',
                '/assets/Références/CHR/i14.png',
                '/assets/Références/CHR/i15.png',
            ]
        },
        {
            pole: "Pôle Retail",
            images: [
                '/assets/Références/Retail/i1.png',
                '/assets/Références/Retail/i2.png',
                '/assets/Références/Retail/i3.png',
                '/assets/Références/Retail/i4.png',
                '/assets/Références/Retail/i5.png',
                '/assets/Références/Retail/i6.png',
                '/assets/Références/Retail/i7.png',
                '/assets/Références/Retail/i8.png',
                '/assets/Références/Retail/i9.png',
                '/assets/Références/Retail/i10.png',
                '/assets/Références/Retail/i11.png',
            ]
        },
    ]
};