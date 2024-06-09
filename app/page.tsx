import { Metadata } from 'next';
import { Hero } from '@components/Hero/Hero';
import { ImageContent } from '@components/ImageContent/ImageContent';
import { ProductTile } from '@components/ProductTile/ProductTile';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'Swift Earplugs',
    description: 'Swift Earplugs bring you closer to the music you love.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <div className={styles.content}>
                <ProductTile />
                <ImageContent>
                    <h2>Designed for comfort and style</h2>
                    <ul>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path d="M18.637 8.78894 22.8 18.931c0.0747 0.1822 0.1128 0.3774 0.1121 0.5744 -0.0007 0.197 -0.0402 0.392 -0.1162 0.5737 -0.0761 0.1817 -0.1872 0.3467 -0.327 0.4855 -0.1398 0.1388 -0.3056 0.2486 -0.4879 0.3234 -0.1823 0.0747 -0.3775 0.1128 -0.5745 0.1121 -0.197 -0.0007 -0.3919 -0.0402 -0.5736 -0.1163 -0.1818 -0.076 -0.3467 -0.1872 -0.4855 -0.327 -0.1388 -0.1398 -0.2487 -0.3056 -0.3234 -0.4878l-2.467 -6.02c-0.7363 0.8068 -1.7058 1.3642 -2.7737 1.5945 -1.0678 0.2303 -2.1808 0.1221 -3.1843 -0.3095L8.81201 8.53394c0.49112 -1.21295 1.41869 -2.19798 2.59999 -2.761 0.6709 -0.28892 1.3931 -0.43991 2.1236 -0.444 0.7304 -0.00408 1.4542 0.13883 2.1283 0.42022 0.6741 0.2814 1.2847 0.69553 1.7955 1.21775 0.5108 0.52222 0.9112 1.14185 1.1776 1.82203Z"></path>
                                <path d="M13.3071 10.875c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"></path>
                                <path d="M13.3071 10.875c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375"></path>
                                <path d="M12.4111 2.25898c-0.8433 -0.65917 -1.8264 -1.11666 -2.87397 -1.337414 -1.62706 -0.361033 -3.32896 -0.148451 -4.8171 0.601694 -1.48813 0.75015 -2.6709 1.99168 -3.34772 3.51406 -0.67682 1.52238 -0.806029 3.2319 -0.36572 4.83864 0.44031 1.60674 1.42304 3.01184 2.78154 3.97694 0.63641 0.4152 1.14484 0.9991 1.46852 1.6864 0.32368 0.6873 0.44987 1.451 0.36448 2.2059 -0.07905 0.5541 -0.06247 1.1177 0.049 1.6662 0.23754 1.1409 0.88045 2.1571 1.80976 2.8607 0.92931 0.7035 2.08212 1.0469 3.24511 0.9664 1.163 -0.0805 2.2575 -0.5793 3.081 -1.4042 0.8234 -0.8248 1.3201 -1.9199 1.3981 -3.0826"></path>
                                <path d="M7.98013 3.76051c-0.8944 -0.00206 -1.76629 0.28037 -2.48961 0.80647 -0.72332 0.52609 -1.26059 1.26859 -1.53412 2.12015 -0.27354 0.85156 -0.26917 1.76804 0.01247 2.61695 0.28164 0.84892 0.82596 1.58632 1.55426 2.10542"></path>
                            </svg>
                            <h3>A secure fit that moves with you</h3>
                            <p>
                                Jump, dance, and feel free. Our earplugs are
                                crafted to fit securely, ensuring they stay in
                                place as you move with the music.
                            </p>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path d="M5.25 8.25c0 1.7902 0.71116 3.5071 1.97703 4.773C8.4929 14.2888 10.2098 15 12 15s3.5071 -0.7112 4.773 -1.977c1.2658 -1.2659 1.977 -2.9828 1.977 -4.773 0 -1.79021 -0.7112 -3.5071 -1.977 -4.77297C15.5071 2.21116 13.7902 1.5 12 1.5c-1.7902 0 -3.5071 0.71116 -4.77297 1.97703S5.25 6.45979 5.25 8.25Z"></path>
                                <path d="M0.75 15.75c0 1.7902 0.71116 3.5071 1.97703 4.773C3.9929 21.7888 5.70979 22.5 7.5 22.5s3.5071 -0.7112 4.773 -1.977c1.2658 -1.2659 1.977 -2.9828 1.977 -4.773 0 -1.7902 -0.7112 -3.5071 -1.977 -4.773C11.0071 9.71116 9.29021 9 7.5 9c-1.79021 0 -3.5071 0.71116 -4.77297 1.977C1.46116 12.2429 0.75 13.9598 0.75 15.75Z"></path>
                                <path d="M9.75 15.75c0 0.8864 0.17459 1.7642 0.5138 2.5831 0.3392 0.819 0.8364 1.5631 1.4632 2.1899 0.6268 0.6268 1.3709 1.124 2.1899 1.4632 0.8189 0.3392 1.6967 0.5138 2.5831 0.5138 0.8864 0 1.7642 -0.1746 2.5831 -0.5138 0.819 -0.3392 1.5631 -0.8364 2.1899 -1.4632 0.6268 -0.6268 1.124 -1.3709 1.4632 -2.1899 0.3392 -0.8189 0.5138 -1.6967 0.5138 -2.5831 0 -0.8864 -0.1746 -1.7642 -0.5138 -2.5831 -0.3392 -0.819 -0.8364 -1.5631 -1.4632 -2.1899 -0.6268 -0.6268 -1.3709 -1.12397 -2.1899 -1.46319C18.2642 9.17459 17.3864 9 16.5 9c-0.8864 0 -1.7642 0.17459 -2.5831 0.51381 -0.819 0.33922 -1.5631 0.83639 -2.1899 1.46319 -0.6268 0.6268 -1.124 1.3709 -1.4632 2.1899 -0.33921 0.8189 -0.5138 1.6967 -0.5138 2.5831Z"></path>
                            </svg>
                            <h3>A pop of colour to suit your style</h3>
                            <p>
                                Select from Rose Gold, Lilac Purple, or Matte
                                Black to accessorise your outfit. Swift Earplugs
                                aren’t just functional—they’re fashionable.
                            </p>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path d="M14.5199 16.2004 11.16 19.5602l3.3599 3.3599"></path>
                                <path d="M22.0346 11.2334c-0.468 4.7273 -4.4442 8.3296 -9.1947 8.3301H11.16"></path>
                                <path d="m17.0912 5.92621 4.5895 1.2297 1.2309 -4.5895"></path>
                                <path d="M9.0322 1.9023c4.3275 -1.9569993 9.4338 -0.3143 11.8086 3.7988l0.8399 1.4559"></path>
                                <path d="m6.90761 8.83559 -1.2297 -4.5895 -4.5895 1.2297"></path>
                                <path d="M7.4519 17.8288C3.5942 15.058 2.465 9.81412 4.8402 5.70102l0.84 -1.4559"></path>
                            </svg>
                            <h3>Re-usable and eco-friendly</h3>
                            <p>
                                Easy to clean and designed for repeated use.
                                Party with peace of mind, knowing your earplugs
                                are environmentally friendly and built to last
                                through countless nights out.
                            </p>
                        </li>
                    </ul>
                </ImageContent>
                <ImageContent>
                    <h2>Perfect on any night out</h2>
                    <ul>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path d="M19.68 6.66012c-0.1025 0.09627 -0.2232 0.17116 -0.355 0.22032 -0.1318 0.04915 -0.272 0.0716 -0.4126 0.06601 -0.1405 -0.00558 -0.2785 -0.03908 -0.406 -0.09854 -0.1275 -0.05946 -0.2418 -0.14369 -0.3364 -0.24779l-1.57 -1.6c-0.2081 -0.20067 -0.3306 -0.47404 -0.3418 -0.76293 -0.0111 -0.28889 0.0898 -0.57091 0.2818 -0.78707 0.1502 -0.20462 0.3597 -0.35821 0.6 -0.44l4.77 -1.46c0.1772 -0.04815 0.3643 -0.04657 0.5407 0.00459 0.1764 0.05115 0.3353 0.1499 0.4593 0.28541 0.0999 0.08687 0.1815 0.1927 0.2401 0.31135 0.0587 0.11865 0.0932 0.24776 0.1015 0.37985 0.0084 0.13209 -0.0095 0.26452 -0.0527 0.38963 -0.0432 0.1251 -0.1108 0.24039 -0.1989 0.33917l-3.32 3.4Z"></path>
                                <path d="M11 10.5302c-0.3131 -0.3349 -0.5453 -0.73704 -0.6788 -1.17562 -0.1335 -0.43858 -0.1647 -0.90191 -0.0912 -1.35442 0.1207 -0.70232 0.3609 -1.37877 0.71 -2 0.1212 -0.22153 0.1682 -0.4761 0.134 -0.72631 -0.0342 -0.2502 -0.1478 -0.48283 -0.324 -0.66369 -0.1037 -0.10924 -0.2285 -0.19622 -0.3669 -0.25566 -0.1384 -0.05944 -0.2875 -0.0901 -0.4381 -0.0901 -0.15061 0 -0.29966 0.03066 -0.43805 0.0901s-0.26324 0.14642 -0.36694 0.25566c-0.94405 0.91934 -1.59177 2.09986 -1.86001 3.39 -0.21 1.05 -1 2.48004 -2 2.49004 -0.61438 0.0033 -1.22175 0.1309 -1.78563 0.3748 -0.56387 0.244 -1.07263 0.5994 -1.49572 1.0449 -0.4231 0.4455 -0.75179 0.972 -0.96636 1.5477 -0.214574 0.5757 -0.310589 1.1888 -0.282286 1.8026 0.014508 1.6077 0.661096 3.1451 1.799996 4.28l1.08 1.12c0.53739 0.5717 1.1845 1.0294 1.90268 1.3455 0.71818 0.3161 1.49271 0.4843 2.27732 0.4945 0.60891 0.0107 1.2138 -0.1007 1.77896 -0.3276 0.56514 -0.2269 1.07914 -0.5646 1.51164 -0.9934 0.4325 -0.4288 0.7747 -0.9398 1.0065 -1.503 0.2317 -0.5632 0.3483 -1.1671 0.3429 -1.776 0 -1.11 1.2 -1.8 2.23 -1.76 0.6017 0.0488 1.2066 -0.0392 1.7695 -0.2574 0.5628 -0.2182 1.069 -0.561 1.4805 -1.0026 0.1429 -0.1528 0.2402 -0.3425 0.2808 -0.5476 0.0407 -0.2052 0.023 -0.4177 -0.0509 -0.6133 -0.0739 -0.1957 -0.2011 -0.3668 -0.3672 -0.4939 -0.1661 -0.1271 -0.3645 -0.2051 -0.5727 -0.2252 -3.24 -0.27 -3.93 -0.16 -4.8 -1.06l-1.42 -1.41Z"></path>
                                <path d="m8.52 12.79 2.07 2.12"></path>
                                <path d="m11.89 11.42 5.49 -5.62996"></path>
                                <path d="M4.92 17.06c0 0.1996 0.03828 0.3973 0.11266 0.5817 0.07437 0.1844 0.18339 0.352 0.32082 0.4931 0.13743 0.1412 0.30058 0.2531 0.48015 0.3295 0.17956 0.0764 0.37201 0.1157 0.56637 0.1157 0.19435 0 0.38681 -0.0393 0.56637 -0.1157 0.17956 -0.0764 0.34272 -0.1883 0.48015 -0.3295 0.13743 -0.1411 0.24644 -0.3087 0.32082 -0.4931S7.88 17.2596 7.88 17.06s-0.03828 -0.3972 -0.11266 -0.5816c-0.07438 -0.1845 -0.18339 -0.352 -0.32082 -0.4932 -0.13743 -0.1411 -0.30059 -0.2531 -0.48015 -0.3295 -0.17956 -0.0763 -0.37202 -0.1157 -0.56637 -0.1157 -0.19436 0 -0.38681 0.0394 -0.56637 0.1157 -0.17957 0.0764 -0.34272 0.1884 -0.48015 0.3295 -0.13743 0.1412 -0.24645 0.3087 -0.32082 0.4932 -0.07438 0.1844 -0.11266 0.382 -0.11266 0.5816Z"></path>
                            </svg>
                            <h3>For any occasion</h3>
                            <p>
                                Whether you’re at a concert, a festival, or a
                                club, Swift Earplugs are your best companion,
                                ensuring that you are enjoying the music while
                                protecting your hearing.
                            </p>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path d="M12 11.25c-0.3978 0 -0.7794 -0.158 -1.0607 -0.4393S10.5 10.1478 10.5 9.75v-3c0 -0.39782 0.158 -0.77936 0.4393 -1.06066 0.2813 -0.2813 0.6629 -0.43934 1.0607 -0.43934 0.3978 0 0.7794 0.15804 1.0607 0.43934S13.5 6.35218 13.5 6.75v3c0 0.3978 -0.158 0.7794 -0.4393 1.0607S12.3978 11.25 12 11.25Z"></path>
                                <path d="M19.5 8.25c0 -1.98912 -0.7902 -3.89678 -2.1967 -5.3033C15.8968 1.54018 13.9891 0.75 12 0.75s-3.89678 0.79018 -5.3033 2.1967S4.5 6.26088 4.5 8.25v7.5c0 1.9891 0.79018 3.8968 2.1967 5.3033C8.10322 22.4598 10.0109 23.25 12 23.25s3.8968 -0.7902 5.3033 -2.1967C18.7098 19.6468 19.5 17.7391 19.5 15.75v-7.5Z"></path>
                            </svg>
                            <h3>Compact and portable</h3>
                            <p>
                                Each pair of Swift Earplugs comes with a sleek,
                                portable carrying case, making it easy to take
                                them wherever the music takes you.
                            </p>
                        </li>
                    </ul>
                </ImageContent>
            </div>
        </>
    );
}
