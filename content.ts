// TODO: Content to be sourced from Shopify in future

export const content = {
    meta: {
        title: 'Swift Earplugs',
        description: 'Swift Earplugs bring you closer to the music you love.',
    },
    header: {
        button: 'View Cart',
        buttonDisabled: 'Empty Cart',
        cart: {
            heading: 'Your Cart',
            priceLabel: 'Total Price',
            checkout: 'Checkout',
            checkoutDisabled: 'Empty Cart',
        },
    },
    hero: {
        title: 'Meet the last earplugs you will ever need.',
        intro: 'Protect your ears in style — Swift Earplugs deliver crystal-clear sound, blocking noise while keeping you comfortable and stylish at every event.',
        product: {
            price: {
                prefix: 'Only',
                discountPrefix: 'Was',
            },
            button: 'Add to Cart',
            buttonDisabled: 'Out of Stock',
        },
        testimonial: {
            image: '/quote-image-1.png',
            quote: 'I wear these at every gig now – they cut the harsh noise while keeping the music super clear!',
            name: 'Amber M.',
        },
    },
    hearingDamage: {
        heading: 'You shouldn&apos;t lose your hearing',
        content:
            'Concerts get as loud as <strong>110 decibels</strong>, which can lead to permanent hearing damage in <strong>as little as 2 minutes</strong>.',
        button: {
            text: 'Learn more at healthed.govt.nz',
            link: 'https://healthed.govt.nz/products/noise-around-the-home',
        },
    },
    carousel: {
        heading: 'Ear protection, perfected.',
        items: [
            {
                image: '/carousel-1',
                heading: 'Up to 17dB noise reduction.',
                content:
                    'Enjoy the music you love at a volume that loves you back. Swift Earplugs allow you to hear every beat and lyric clearly without damaging your hearing.',
            },
            {
                image: '/carousel-2',
                heading: 'Long-lasting protection.',
                content:
                    'Crafted from durable materials, Swift Earplugs protect your hearing during countless nights out – because the best nights should never end in ringing ears.',
            },
            {
                image: '/carousel-3',
                heading: 'Compact and portable.',
                content:
                    'Each pair of Swift Earplugs comes with a sleek, portable carrying case, making it easy to take them wherever the music takes you.',
            },
            {
                image: '/carousel-4',
                heading: 'Perfect on any night out.',
                content:
                    'Whether you’re at a concert, a festival, or a club, Swift Earplugs are your best companion, ensuring that you are enjoying the music while protecting your hearing.',
            },
        ],
    },
    testimonial: {
        image: '/quote-image-2.png',
        quote: 'I love how these earplugs look and the fact that I can clip them to my keychain. They’re always with me, so when I’m off to a gig or a show, I just chuck them in and save my ears from the pain.',
        name: 'Jessica S.',
    },
    layered: {
        heading: {
            text: 'Steal the show',
            emojis: '💃✨',
        },
        items: [
            {
                float1: {
                    src: '/purple-1.png',
                    width: 122,
                    height: 122,
                },
                float2: {
                    src: '/pinks-1-case.png',
                    width: 562,
                    height: 615,
                },
                heading: 'A secure fit that moves with you.',
                content:
                    'Jump, dance, and feel free. Our earplugs are crafted to fit securely, ensuring they stay in place as you move with the music.',
            },
            {
                float1: {
                    src: '/black-2.png',
                    width: 101,
                    height: 100,
                },
                float2: {
                    src: '/purple-pink-1.png',
                    width: 214,
                    height: 227,
                },
                heading: 'Pops of colour to suit your style.',
                content:
                    'Select from Rose Gold, Lilac Purple, or Matte Black to accessorise your outfit. Swift Earplugs aren’t just functional—they’re fashionable.',
            },
            {
                float1: {
                    src: '/pink-1-case.png',
                    width: 562,
                    height: 572,
                },
                float2: {
                    src: '/black-1.png',
                    width: 100,
                    height: 100,
                },
                float3: {
                    src: '/purple-1.png',
                    width: 122,
                    height: 122,
                },
                heading: 'Re-usable and eco-friendly.',
                content:
                    'Easy to clean and designed for repeated use. Party with peace of mind, knowing your earplugs are environmentally friendly and built to last through countless nights out.',
            },
        ],
    },
    comparison: {
        heading: 'Why choose<br />Swift&nbsp;Earplugs?',
        table: {
            swift: 'Swift Earplugs',
            competitors: 'Competitors',
            features: [
                'Up to 17dB noise reduction',
                'Secure and comfortable fit',
                'Free shipping',
                '30-day returns',
                'Re-usable + eco-friendly',
                'Durable design & materials',
                'Easy to clean',
                '100% Kiwi owned',
            ],
        },
    },
    promo: {
        enabled: true, // Controls whether banner displays
        icon: 'percent', // valid: 'percent', 'b2g1f', 'sale'. Default: star
        text: 'Don&apos;t miss, 10% off with code {{ code }} — for a short time only!',
        code: 'PARTY10',
    },
    delivery: 'Free delivery on all orders',
};
