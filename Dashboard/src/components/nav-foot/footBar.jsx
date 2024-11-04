import style from './footBar.module.css'
import { Link } from 'react-router-dom'
function FootBar () {
    return (
        <>
            <div className={style.main}>
                <div className={style.footerBar}>
                    <div className={style.footerMenu}>
                        <div className={style.footerNavigation}>
                            <div className={style.footNav}>
                                <h2>Quick Links</h2>
                                <div className={style.navLink}><Link to='/'>1item</Link></div>
                                <div className={style.navLink}><Link to='/'>2item</Link></div>
                                <div className={style.navLink}><Link to='/'>3item</Link></div>
                                <div className={style.navLink}><Link to='/'>4item</Link></div>
                                <div className={style.navLink}><Link to='/'>5item</Link></div>
                            </div>
                            <div className={style.footNav}>
                                <h2>Product</h2>
                                <div className={style.navLink}><Link to='/'>1item</Link></div>
                                <div className={style.navLink}><Link to='/'>2item</Link></div>
                                <div className={style.navLink}><Link to='/'>3item</Link></div>
                                <div className={style.navLink}><Link to='/'>4item</Link></div>
                                <div className={style.navLink}><Link to='/'>5item</Link></div>
                            </div>
                            <div className={style.footNav}>
                                <h2>3link</h2>
                                <div className={style.navLink}><Link to='/'>1item</Link></div>
                                <div className={style.navLink}><Link to='/'>2item</Link></div>
                                <div className={style.navLink}><Link to='/'>3item</Link></div>
                                <div className={style.navLink}><Link to='/'>4item</Link></div>
                                <div className={style.navLink}><Link to='/'>5item</Link></div>
                            </div>
                            <div className={style.footNav}>
                                <h2>4link</h2>
                                <div className={style.navLink}><Link to='/'>1item</Link></div>
                                <div className={style.navLink}><Link to='/'>2item</Link></div>
                                <div className={style.navLink}><Link to='/'>3item</Link></div>
                                <div className={style.navLink}><Link to='/'>4item</Link></div>
                                <div className={style.navLink}><Link to='/'>5item</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.footerCopy}>
                        <div className={style.copyright}>
                            <p>All Right Reserved &copy; : <a href="/" target='_blank'>eNinja-In</a> 2024-25</p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default FootBar;