import Image from 'next/image';
import styles from './Quote.module.scss';

export const Quote: React.FC = () => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.image}></div>
            <div className={styles.text}>
                <svg
                    className={styles.mark}
                    viewBox="0 0 130 95"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M28.8 94.9918C20.16 94.9918 13.2 92.0625 7.92 86.2041C2.64 80.1112 0 72.0265 0 61.95C0 49.0613 3.84 36.9929 11.52 25.7446C19.2 14.4964 28.68 6.17733 39.96 0.787537L43.56 6.76316C38.76 10.5126 34.44 15.0822 30.6 20.472C27 25.8618 24.12 32.4233 21.96 40.1565L29.52 42.2655C37.2 44.6089 43.2 48.124 47.52 52.8108C52.08 57.4975 54.36 63.2388 54.36 70.0347C54.36 77.5335 51.84 83.6263 46.8 88.3131C41.76 92.7655 35.76 94.9918 28.8 94.9918ZM104.4 94.9918C95.76 94.9918 88.8 92.0625 83.52 86.2041C78.24 80.1112 75.6 72.0265 75.6 61.95C75.6 49.0613 79.44 36.9929 87.12 25.7446C94.8 14.4964 104.28 6.17733 115.56 0.787537L119.16 6.76316C114.36 10.5126 110.04 15.0822 106.2 20.472C102.6 25.8618 99.72 32.4233 97.56 40.1565L105.12 42.2655C112.8 44.6089 118.8 48.124 123.12 52.8108C127.68 57.4975 129.96 63.2388 129.96 70.0347C129.96 77.5335 127.44 83.6263 122.4 88.3131C117.36 92.7655 111.36 94.9918 104.4 94.9918Z" />
                </svg>
                <span className={styles.quote}>
                    <span>
                        I use these at really loud concerts, and they not only
                        protect my ears but actually make the music sound better
                        by balancing the sound and reducing the noise from the
                        crowd.
                    </span>
                    <Image
                        src="/purples-1.png"
                        alt=""
                        height={217 / 2}
                        width={190 / 2}
                        className={styles.float}
                    />
                </span>
                <span className={styles.name}>Amber M.</span>
            </div>
        </div>
    </div>
);
