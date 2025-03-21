import classNames from 'classnames';
import { FC } from 'react';
import styles from '../Payments.module.scss';

export const MasterCard: FC = () => (
    <svg
        className={classNames(styles.payment, styles['MasterCard'])}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 60"
    >
        <g fill="none" fillRule="evenodd">
            <path fill="#FFF" d="M0 0h100v60H0z" />
            <g fillRule="nonzero">
                <path fill="#FF5F00" d="M43.049 16.764h14.808v27.142H43.049z" />
                <path
                    fill="#EB001B"
                    d="M43.99 30.337c-.006-5.297 2.377-10.303 6.463-13.573-6.939-5.562-16.903-4.752-22.89 1.86-5.987 6.613-5.987 16.808 0 23.42 5.987 6.613 15.951 7.423 22.89 1.861-4.084-3.27-6.468-8.272-6.464-13.568z"
                />
                <path
                    fill="#F79E1B"
                    d="M77.835 30.337c0 6.608-3.7 12.637-9.527 15.525-5.828 2.887-12.761 2.128-17.855-1.957 4.082-3.272 6.466-8.275 6.466-13.57 0-5.296-2.384-10.299-6.466-13.571 5.094-4.085 12.027-4.844 17.855-1.956 5.828 2.887 9.527 8.916 9.527 15.524v.005zm-1.617 10.935v-.758h.221v-.156h-.56v.156h.24v.758h.1zm1.086 0v-.914h-.169l-.197.653-.198-.653h-.15v.914h.122v-.686l.183.595h.127l.184-.595v.693l.098-.007z"
                />
            </g>
        </g>
    </svg>
);
