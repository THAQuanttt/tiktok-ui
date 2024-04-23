import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSign,
    faSignIn,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="tiktok"></img>
                </div>
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-label')}>Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos"></input>
                        <button className={cx('search-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon className={cx('spiner')} icon={faSpinner}></FontAwesomeIcon>
                        <span className={cx('border')}></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button
                        primary
                        // leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                        // rightIcon={<FontAwesomeIcon icon={faSignOut} />}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}
export default Header;
