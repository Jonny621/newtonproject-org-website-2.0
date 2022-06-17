import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { childProps } from '../../hooks/PageModel'

const GlobalCommunity: React.FC<childProps> = (props) => {
    const { title } = props;
    return (
        <div className={'global'}>
            <h2>{title}</h2>
            <ul>
                <li>
                    <a href='https://t.me/Newtonproject' target='_blank'>
                        <div className={'global-img'}>
                            <StaticImage alt='telegram' src='../../static/images/home/telegram.png' />
                        </div>
                        <h5>Telegram</h5>
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/newton_project' target='_blank'>
                        <div className={'global-img'}>
                            <StaticImage alt='twitter' src='../../static/images/home/twitter.png' />
                        </div>
                        <h5>Twitter</h5>
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com/newtonproject' target='_blank'>
                        <div className={'global-img'}>
                            <StaticImage alt='twitter' src='../../static/images/home/facebook.png' />
                        </div>
                        <h5>Facebook</h5>
                    </a>
                </li>
                <li>
                    <a href='https://newtonproject.medium.com/' target='_blank'>
                        <div>
                            <StaticImage className={'global-img'} alt='medium' src='../../static/images/home/medium.png' />
                        </div>
                        <h5>Medium</h5>
                    </a>
                </li>
                <li>
                    <a href='https://groups.google.com/forum/#!aboutgroup/newton-universe' target='_blank'>
                        <div className={'global-img'}>
                            <StaticImage alt='group' src='../../static/images/home/group.png' />
                        </div>
                        <h5>Google Group</h5>
                    </a>
                </li>
                <li>
                    <a href='https://www.reddit.com/user/newtonproject' target='_blank'>
                        <div className={'global-img'}>
                            <StaticImage alt='reddit' src='../../static/images/home/reddit.png' />
                        </div>
                        <h5>Reddit</h5>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/newtonproject' target='_blank'>
                        <div className={'global-img'}>
                            <StaticImage alt='github' src='../../static/images/home/github.png' />
                        </div>
                        <h5>Github</h5>
                    </a>
                </li>
                <li className={'global-youtube'}>
                    <a href='https://www.youtube.com/channel/UCO3hbqzT5abDbVKzK5EQigg' target='_blank'>
                        <div className={'global-img'}>
                            <StaticImage alt='github' src='../../static/images/home/youtube.png' />
                        </div>
                        <h5>YouTube</h5>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default GlobalCommunity

