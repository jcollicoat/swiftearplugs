import { Metadata } from 'next';
import { Card } from '@components/Card/Card';
import { Hero } from '@components/Hero/Hero';
import { IconContent } from '@components/IconContent/IconContent';
import { ImageContent } from '@components/ImageContent/ImageContent';
import { ProductTile } from '@components/ProductTile/ProductTile';
import { StickyScroller } from '@components/StickyScroller/StickyScroller';
import imageOne from '@images/austin-distel-p9aNTv6wl5I-unsplash.jpg';
import imageTwo from '@images/pexels-maumascaro-1154189.jpg';
import imageThree from '@images/pexels-wendywei-1916817.jpg';
import imageFour from '@images/sulthan-auliya-oQrJ82Iekqk-unsplash.jpg';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
    description: 'Swift Earplugs bring you closer to the music you love.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <StickyScroller stickyComponent={ProductTile}>
                <ImageContent
                    heading="Designed for comfort and style"
                    image={imageOne.src}
                    position="25% 80%"
                >
                    <IconContent
                        icon="Earplug"
                        heading="A secure fit that moves with you"
                        content="Jump, dance, and feel free. Our earplugs are
                                crafted to fit securely, ensuring they stay in
                                place as you move with the music."
                    />
                    <IconContent
                        icon="Colors"
                        heading="A pop of colour to suit your style"
                        content="Select from Rose Gold, Lilac Purple, or Matte
                                Black to accessorise your outfit. Swift Earplugs
                                aren’t just functional—they’re fashionable."
                    />
                    <IconContent
                        icon="Recycle"
                        heading="Re-usable and eco-friendly"
                        content="Easy to clean and designed for repeated use.
                                Party with peace of mind, knowing your earplugs
                                are environmentally friendly and built to last
                                through countless nights out."
                    />
                </ImageContent>
                <ImageContent
                    heading="Perfect on any night out"
                    image={imageTwo.src}
                    position="25% 100%"
                >
                    <IconContent
                        icon="Guitar"
                        heading="For any occasion"
                        content="Whether you’re at a concert, a festival, or a
                                club, Swift Earplugs are your best companion,
                                ensuring that you are enjoying the music while
                                protecting your hearing."
                    />
                    <IconContent
                        icon="Pod"
                        heading="Compact and portable"
                        content="Each pair of Swift Earplugs comes with a sleek,
                                portable carrying case, making it easy to take
                                them wherever the music takes you."
                    />
                </ImageContent>
            </StickyScroller>
            <div className={styles.content}>
                <Card image={imageThree.src} position="auto 50%">
                    <h2>Our guarantee</h2>
                    <ul>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            >
                                <path d="M3.75 19c0 0.5304 0.21071 1.0391 0.58579 1.4142 0.37507 0.3751 0.88378 0.5858 1.41421 0.5858s1.03914 -0.2107 1.41421 -0.5858C7.53929 20.0391 7.75 19.5304 7.75 19c0 -0.5304 -0.21071 -1.0391 -0.58579 -1.4142C6.78914 17.2107 6.28043 17 5.75 17s-1.03914 0.2107 -1.41421 0.5858C3.96071 17.9609 3.75 18.4696 3.75 19Z"></path>
                                <path d="M16.5 19c0 0.5304 0.2107 1.0391 0.5858 1.4142S17.9696 21 18.5 21c0.5304 0 1.0391 -0.2107 1.4142 -0.5858S20.5 19.5304 20.5 19c0 -0.5304 -0.2107 -1.0391 -0.5858 -1.4142S19.0304 17 18.5 17c-0.5304 0 -1.0391 0.2107 -1.4142 0.5858S16.5 18.4696 16.5 19Z"></path>
                                <path d="M7.75 19h8.75"></path>
                                <path d="M20.5 19h1.75c0.2652 0 0.5195 -0.1054 0.7071 -0.2929 0.1875 -0.1875 0.2929 -0.4419 0.2929 -0.7071V4c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C22.7695 3.10536 22.5152 3 22.25 3H3.74998c-0.26522 0 -0.51957 0.10536 -0.70711 0.29289 -0.18754 0.18754 -0.29289 0.44189 -0.29289 0.70711v7.837l-1.65 1.363c-0.109458 0.0939 -0.197318 0.2103 -0.257558 0.3413 -0.060239 0.131 -0.091434 0.2735 -0.091445 0.4177V18c0 0.2652 0.105356 0.5196 0.292893 0.7071 0.18754 0.1875 0.44189 0.2929 0.70711 0.2929h2"></path>
                                <path d="M5.75 14V8H7.5"></path>
                                <path d="M7.5 11H5.75"></path>
                                <path d="M16.813 8h-1.75v6h1.75"></path>
                                <path d="M16.813 11h-1.75"></path>
                                <path d="M21 8h-1.75v6H21"></path>
                                <path d="M21 11h-1.75"></path>
                                <path d="M10.125 14V8h1.25c0.3315 0 0.6495 0.1317 0.8839 0.36612 0.2344 0.23442 0.3661 0.55236 0.3661 0.88388 0 0.33152 -0.1317 0.64946 -0.3661 0.8839 -0.2344 0.2344 -0.5524 0.3661 -0.8839 0.3661h-1.25"></path>
                                <path d="M10.125 10.5h0.5c0.5304 0 1.0391 0.2107 1.4142 0.5858s0.5858 0.8838 0.5858 1.4142V14"></path>
                            </svg>
                            <div>
                                <h3>Free shipping</h3>
                                <p>
                                    Get your Swift Earplugs delivered directly
                                    to your door at no extra cost, anywhere in
                                    New Zealand.
                                </p>
                            </div>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            >
                                <path d="m6.87898 19.188 -5.379 -5.378c-0.13939 -0.1393 -0.24996 -0.3047 -0.3254 -0.4867 -0.07545 -0.1821 -0.11428 -0.3772 -0.11428 -0.5743 0 -0.197 0.03883 -0.3922 0.11428 -0.5742 0.07544 -0.1821 0.18601 -0.3475 0.3254 -0.4868L12 1.18802c0.1393 -0.13926 0.3048 -0.249713 0.4868 -0.325038 0.1821 -0.075324 0.3772 -0.114048 0.5742 -0.113958h5.378c0.3978 0 0.7793 0.158035 1.0606 0.439336 0.2813 0.28131 0.4394 0.66284 0.4394 1.06066v5.379c-0.0001 0.39755 -0.158 0.7788 -0.439 1.06"></path>
                                <path d="M16.189 4.87402c-0.2071 0 -0.375 -0.16789 -0.375 -0.375 0 -0.2071 0.1679 -0.375 0.375 -0.375"></path>
                                <path d="M16.189 4.87402c0.2071 0 0.375 -0.16789 0.375 -0.375 0 -0.2071 -0.1679 -0.375 -0.375 -0.375"></path>
                                <path d="M14.689 18.749h-3.75v3.75"></path>
                                <path d="M22.3569 19.482c-0.3971 1.1608 -1.1663 2.158 -2.1881 2.8369 -1.0218 0.679 -2.2392 1.0018 -3.4632 0.9182 -1.2239 -0.0835 -2.3861 -0.5687 -3.3062 -1.3802 -0.9201 -0.8115 -1.5467 -1.9039 -1.7825 -3.1079"></path>
                                <path d="M19.189 15.749h3.75v-3.75"></path>
                                <path d="M11.522 15.015c0.3979 -1.1601 1.1674 -2.1565 2.1891 -2.8348 1.0218 -0.6783 2.2388 -1.0007 3.4624 -0.917 1.2235 0.0836 2.3854 0.5685 3.3053 1.3795 0.92 0.811 1.5468 1.9029 1.7832 3.1063"></path>
                            </svg>
                            <div>
                                <h3>Hassle-free returns</h3>
                                <p>
                                    We’re confident you’ll love your Swift
                                    Earplugs, but if they don’t meet your
                                    expectations, return them within 30 days for
                                    a hassle-free refund.
                                </p>
                            </div>
                        </li>
                    </ul>
                </Card>
                <Card image={imageFour.src} position="auto 50%">
                    <h2>Support a local NZ business</h2>
                    <ul>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            >
                                <path d="M1.72803 9.571c0 0.6487 0.2577 1.2709 0.71641 1.7296 0.45872 0.4587 1.08087 0.7164 1.72959 0.7164s1.27087 -0.2577 1.72958 -0.7164c0.45871 -0.4587 0.71642 -1.0809 0.71642 -1.7296 0 -0.64872 -0.25771 -1.27087 -0.71642 -1.72958C5.4449 7.3827 4.82275 7.125 4.17403 7.125s-1.27087 0.2577 -1.72959 0.71642c-0.45871 0.45871 -0.71641 1.08086 -0.71641 1.72958Z"></path>
                                <path d="M17.38 9.571c0 0.32121 0.0633 0.6393 0.1862 0.936 0.1229 0.2968 0.3031 0.5665 0.5302 0.7936 0.2272 0.2271 0.4968 0.4073 0.7936 0.5302 0.2967 0.1229 0.6148 0.1862 0.936 0.1862 0.3212 0 0.6393 -0.0633 0.936 -0.1862 0.2968 -0.1229 0.5665 -0.3031 0.7936 -0.5302 0.2271 -0.2271 0.4073 -0.4968 0.5302 -0.7936 0.1229 -0.2967 0.1862 -0.61479 0.1862 -0.936 0 -0.32121 -0.0633 -0.63928 -0.1862 -0.93604 -0.1229 -0.29677 -0.3031 -0.56641 -0.5302 -0.79354 -0.2271 -0.22714 -0.4968 -0.40731 -0.7936 -0.53023 -0.2967 -0.12292 -0.6148 -0.18619 -0.936 -0.18619 -0.3212 0 -0.6393 0.06327 -0.936 0.18619 -0.2968 0.12292 -0.5664 0.30309 -0.7936 0.53023 -0.2271 0.22713 -0.4073 0.49677 -0.5302 0.79354 -0.1229 0.29676 -0.1862 0.61483 -0.1862 0.93604Z"></path>
                                <path d="M16.4 23.1251v-6.734c-1.2287 -0.1132 -2.3977 -0.5822 -3.364 -1.3494 -0.9664 -0.7673 -1.6881 -1.7995 -2.077 -2.9706l-0.842 -2.52496c-0.0675 -0.20254 -0.0901 -0.41738 -0.0661 -0.62953 0.024 -0.21216 0.094 -0.41652 0.2052 -0.59884 0.1111 -0.18232 0.2606 -0.33821 0.4381 -0.4568 0.1776 -0.11859 0.3789 -0.19702 0.5898 -0.22983 0.3548 -0.04386 0.7138 0.0385 1.014 0.23266s0.5225 0.48774 0.628 0.82934l0.818 2.45296c0.2272 0.6813 0.6631 1.2738 1.2459 1.6934 0.5828 0.4197 1.283 0.6452 2.0011 0.6446h4.3c0.2571 -0.0002 0.5116 0.0502 0.7492 0.1484 0.2375 0.0981 0.4534 0.2422 0.6352 0.4238 0.1819 0.1817 0.3261 0.3974 0.4245 0.6348 0.0985 0.2375 0.1491 0.492 0.1491 0.749v7.689"></path>
                                <path d="m10.453 10.5479 -0.2 0.594c-0.2274 0.6826 -0.66404 1.2763 -1.24798 1.6967 -0.58394 0.4204 -1.28548 0.6462 -2.00502 0.6453H2.705c-0.5179 0.0002 -1.01455 0.2059 -1.38104 0.5718 -0.366493 0.3659 -0.572901 0.8623 -0.57396 1.3802v7.689"></path>
                                <path d="M7.59998 23.125v-6.734c0.85722 -0.0793 1.68935 -0.3322 2.44572 -0.7432 0.7565 -0.4111 1.4214 -0.9717 1.9543 -1.6478"></path>
                                <path d="M11.5 0.875v2"></path>
                                <path d="M15.414 2.96094 14 4.37494"></path>
                                <path d="M7.586 2.96094 9 4.37494"></path>
                            </svg>
                            <div>
                                <h3>100% Kiwi owned</h3>
                                <p>
                                    When you choose Swift Earplugs, you’re not
                                    just buying earplugs; you’re investing in
                                    New Zealand’s creative economy and helping
                                    us bring that success globally.
                                </p>
                            </div>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            >
                                <path d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z"></path>
                                <path d="m10.474 8.57989 -3.054 -6.846"></path>
                                <path d="m1.701 7.49292 6.868 3.00498"></path>
                                <path d="m22.298 16.507 -6.867 -3.006"></path>
                                <path d="m13.526 15.4199 3.054 6.846"></path>
                                <path d="M8.25 12c0 0.9946 0.39509 1.9484 1.09835 2.6517C10.0516 15.3549 11.0054 15.75 12 15.75c0.9946 0 1.9484 -0.3951 2.6517 -1.0983 0.7032 -0.7033 1.0983 -1.6571 1.0983 -2.6517 0 -0.9946 -0.3951 -1.9484 -1.0983 -2.65165C13.9484 8.64509 12.9946 8.25 12 8.25c-0.9946 0 -1.9484 0.39509 -2.65165 1.09835C8.64509 10.0516 8.25 11.0054 8.25 12Z"></path>
                            </svg>
                            <div>
                                <h3>Dance with us</h3>
                                <p>
                                    Join us in a celebration of sound and
                                    safety. Dance with Swift Earplugs, where
                                    every beat is clear, and every night out is
                                    safe. Follow our journey, connect with our
                                    community, and see how together, we make
                                    every gig or concert unforgettable.
                                </p>
                            </div>
                        </li>
                    </ul>
                </Card>
            </div>
            <div className={styles.section}>
                <h2>Why choose Swift Earplugs?</h2>
                <ul>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        >
                            <path d="M3.75 19c0 0.5304 0.21071 1.0391 0.58579 1.4142 0.37507 0.3751 0.88378 0.5858 1.41421 0.5858s1.03914 -0.2107 1.41421 -0.5858C7.53929 20.0391 7.75 19.5304 7.75 19c0 -0.5304 -0.21071 -1.0391 -0.58579 -1.4142C6.78914 17.2107 6.28043 17 5.75 17s-1.03914 0.2107 -1.41421 0.5858C3.96071 17.9609 3.75 18.4696 3.75 19Z"></path>
                            <path d="M16.5 19c0 0.5304 0.2107 1.0391 0.5858 1.4142S17.9696 21 18.5 21c0.5304 0 1.0391 -0.2107 1.4142 -0.5858S20.5 19.5304 20.5 19c0 -0.5304 -0.2107 -1.0391 -0.5858 -1.4142S19.0304 17 18.5 17c-0.5304 0 -1.0391 0.2107 -1.4142 0.5858S16.5 18.4696 16.5 19Z"></path>
                            <path d="M7.75 19h8.75"></path>
                            <path d="M20.5 19h1.75c0.2652 0 0.5195 -0.1054 0.7071 -0.2929 0.1875 -0.1875 0.2929 -0.4419 0.2929 -0.7071V4c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C22.7695 3.10536 22.5152 3 22.25 3H3.74998c-0.26522 0 -0.51957 0.10536 -0.70711 0.29289 -0.18754 0.18754 -0.29289 0.44189 -0.29289 0.70711v7.837l-1.65 1.363c-0.109458 0.0939 -0.197318 0.2103 -0.257558 0.3413 -0.060239 0.131 -0.091434 0.2735 -0.091445 0.4177V18c0 0.2652 0.105356 0.5196 0.292893 0.7071 0.18754 0.1875 0.44189 0.2929 0.70711 0.2929h2"></path>
                            <path d="M5.75 14V8H7.5"></path>
                            <path d="M7.5 11H5.75"></path>
                            <path d="M16.813 8h-1.75v6h1.75"></path>
                            <path d="M16.813 11h-1.75"></path>
                            <path d="M21 8h-1.75v6H21"></path>
                            <path d="M21 11h-1.75"></path>
                            <path d="M10.125 14V8h1.25c0.3315 0 0.6495 0.1317 0.8839 0.36612 0.2344 0.23442 0.3661 0.55236 0.3661 0.88388 0 0.33152 -0.1317 0.64946 -0.3661 0.8839 -0.2344 0.2344 -0.5524 0.3661 -0.8839 0.3661h-1.25"></path>
                            <path d="M10.125 10.5h0.5c0.5304 0 1.0391 0.2107 1.4142 0.5858s0.5858 0.8838 0.5858 1.4142V14"></path>
                        </svg>
                        <div>
                            <h3>Free shipping</h3>
                            <p>
                                Get your Swift Earplugs delivered directly to
                                your door at no extra cost, anywhere in New
                                Zealand.
                            </p>
                        </div>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        >
                            <path d="m6.87898 19.188 -5.379 -5.378c-0.13939 -0.1393 -0.24996 -0.3047 -0.3254 -0.4867 -0.07545 -0.1821 -0.11428 -0.3772 -0.11428 -0.5743 0 -0.197 0.03883 -0.3922 0.11428 -0.5742 0.07544 -0.1821 0.18601 -0.3475 0.3254 -0.4868L12 1.18802c0.1393 -0.13926 0.3048 -0.249713 0.4868 -0.325038 0.1821 -0.075324 0.3772 -0.114048 0.5742 -0.113958h5.378c0.3978 0 0.7793 0.158035 1.0606 0.439336 0.2813 0.28131 0.4394 0.66284 0.4394 1.06066v5.379c-0.0001 0.39755 -0.158 0.7788 -0.439 1.06"></path>
                            <path d="M16.189 4.87402c-0.2071 0 -0.375 -0.16789 -0.375 -0.375 0 -0.2071 0.1679 -0.375 0.375 -0.375"></path>
                            <path d="M16.189 4.87402c0.2071 0 0.375 -0.16789 0.375 -0.375 0 -0.2071 -0.1679 -0.375 -0.375 -0.375"></path>
                            <path d="M14.689 18.749h-3.75v3.75"></path>
                            <path d="M22.3569 19.482c-0.3971 1.1608 -1.1663 2.158 -2.1881 2.8369 -1.0218 0.679 -2.2392 1.0018 -3.4632 0.9182 -1.2239 -0.0835 -2.3861 -0.5687 -3.3062 -1.3802 -0.9201 -0.8115 -1.5467 -1.9039 -1.7825 -3.1079"></path>
                            <path d="M19.189 15.749h3.75v-3.75"></path>
                            <path d="M11.522 15.015c0.3979 -1.1601 1.1674 -2.1565 2.1891 -2.8348 1.0218 -0.6783 2.2388 -1.0007 3.4624 -0.917 1.2235 0.0836 2.3854 0.5685 3.3053 1.3795 0.92 0.811 1.5468 1.9029 1.7832 3.1063"></path>
                        </svg>
                        <div>
                            <h3>Hassle-free returns</h3>
                            <p>
                                We’re confident you’ll love your Swift Earplugs,
                                but if they don’t meet your expectations, return
                                them within 30 days for a hassle-free refund.
                            </p>
                        </div>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        >
                            <path d="M1.72803 9.571c0 0.6487 0.2577 1.2709 0.71641 1.7296 0.45872 0.4587 1.08087 0.7164 1.72959 0.7164s1.27087 -0.2577 1.72958 -0.7164c0.45871 -0.4587 0.71642 -1.0809 0.71642 -1.7296 0 -0.64872 -0.25771 -1.27087 -0.71642 -1.72958C5.4449 7.3827 4.82275 7.125 4.17403 7.125s-1.27087 0.2577 -1.72959 0.71642c-0.45871 0.45871 -0.71641 1.08086 -0.71641 1.72958Z"></path>
                            <path d="M17.38 9.571c0 0.32121 0.0633 0.6393 0.1862 0.936 0.1229 0.2968 0.3031 0.5665 0.5302 0.7936 0.2272 0.2271 0.4968 0.4073 0.7936 0.5302 0.2967 0.1229 0.6148 0.1862 0.936 0.1862 0.3212 0 0.6393 -0.0633 0.936 -0.1862 0.2968 -0.1229 0.5665 -0.3031 0.7936 -0.5302 0.2271 -0.2271 0.4073 -0.4968 0.5302 -0.7936 0.1229 -0.2967 0.1862 -0.61479 0.1862 -0.936 0 -0.32121 -0.0633 -0.63928 -0.1862 -0.93604 -0.1229 -0.29677 -0.3031 -0.56641 -0.5302 -0.79354 -0.2271 -0.22714 -0.4968 -0.40731 -0.7936 -0.53023 -0.2967 -0.12292 -0.6148 -0.18619 -0.936 -0.18619 -0.3212 0 -0.6393 0.06327 -0.936 0.18619 -0.2968 0.12292 -0.5664 0.30309 -0.7936 0.53023 -0.2271 0.22713 -0.4073 0.49677 -0.5302 0.79354 -0.1229 0.29676 -0.1862 0.61483 -0.1862 0.93604Z"></path>
                            <path d="M16.4 23.1251v-6.734c-1.2287 -0.1132 -2.3977 -0.5822 -3.364 -1.3494 -0.9664 -0.7673 -1.6881 -1.7995 -2.077 -2.9706l-0.842 -2.52496c-0.0675 -0.20254 -0.0901 -0.41738 -0.0661 -0.62953 0.024 -0.21216 0.094 -0.41652 0.2052 -0.59884 0.1111 -0.18232 0.2606 -0.33821 0.4381 -0.4568 0.1776 -0.11859 0.3789 -0.19702 0.5898 -0.22983 0.3548 -0.04386 0.7138 0.0385 1.014 0.23266s0.5225 0.48774 0.628 0.82934l0.818 2.45296c0.2272 0.6813 0.6631 1.2738 1.2459 1.6934 0.5828 0.4197 1.283 0.6452 2.0011 0.6446h4.3c0.2571 -0.0002 0.5116 0.0502 0.7492 0.1484 0.2375 0.0981 0.4534 0.2422 0.6352 0.4238 0.1819 0.1817 0.3261 0.3974 0.4245 0.6348 0.0985 0.2375 0.1491 0.492 0.1491 0.749v7.689"></path>
                            <path d="m10.453 10.5479 -0.2 0.594c-0.2274 0.6826 -0.66404 1.2763 -1.24798 1.6967 -0.58394 0.4204 -1.28548 0.6462 -2.00502 0.6453H2.705c-0.5179 0.0002 -1.01455 0.2059 -1.38104 0.5718 -0.366493 0.3659 -0.572901 0.8623 -0.57396 1.3802v7.689"></path>
                            <path d="M7.59998 23.125v-6.734c0.85722 -0.0793 1.68935 -0.3322 2.44572 -0.7432 0.7565 -0.4111 1.4214 -0.9717 1.9543 -1.6478"></path>
                            <path d="M11.5 0.875v2"></path>
                            <path d="M15.414 2.96094 14 4.37494"></path>
                            <path d="M7.586 2.96094 9 4.37494"></path>
                        </svg>
                        <div>
                            <h3>100% Kiwi owned</h3>
                            <p>
                                When you choose Swift Earplugs, you’re not just
                                buying earplugs; you’re investing in New
                                Zealand’s creative economy and helping us bring
                                that success globally.
                            </p>
                        </div>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        >
                            <path d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z"></path>
                            <path d="m10.474 8.57989 -3.054 -6.846"></path>
                            <path d="m1.701 7.49292 6.868 3.00498"></path>
                            <path d="m22.298 16.507 -6.867 -3.006"></path>
                            <path d="m13.526 15.4199 3.054 6.846"></path>
                            <path d="M8.25 12c0 0.9946 0.39509 1.9484 1.09835 2.6517C10.0516 15.3549 11.0054 15.75 12 15.75c0.9946 0 1.9484 -0.3951 2.6517 -1.0983 0.7032 -0.7033 1.0983 -1.6571 1.0983 -2.6517 0 -0.9946 -0.3951 -1.9484 -1.0983 -2.65165C13.9484 8.64509 12.9946 8.25 12 8.25c-0.9946 0 -1.9484 0.39509 -2.65165 1.09835C8.64509 10.0516 8.25 11.0054 8.25 12Z"></path>
                        </svg>
                        <div>
                            <h3>Dance with us</h3>
                            <p>
                                Join us in a celebration of sound and safety.
                                Dance with Swift Earplugs, where every beat is
                                clear, and every night out is safe. Follow our
                                journey, connect with our community, and see how
                                together, we make every gig or concert
                                unforgettable.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
