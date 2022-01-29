
import '../HomeListDanhLam/HomeListDanhLam.css'
import { listViewHead, dataDanhLam } from './dataDanhLam'
function HomeListDanhLam() {
    return (
        <div className='listView'>
            <div className='listView__head'>
                <h2>{listViewHead[0].h2}</h2>
                <hr />
            </div>
            <div className='listView__body'>
                <div className='ListView__body__one'>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[0].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[0].price}</h3>
                            <h2>{dataDanhLam[0].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[0].icon}</span>
                                <span>{dataDanhLam[0].icon}</span>
                                <span>{dataDanhLam[0].icon}</span>
                                <span>{dataDanhLam[0].icon}</span>
                                <span>{dataDanhLam[0].icon}</span>
                                <h4>{dataDanhLam[0].view}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[1].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[1].price}</h3>
                            <h2>{dataDanhLam[1].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[1].icon}</span>
                                <span>{dataDanhLam[1].icon}</span>
                                <span>{dataDanhLam[1].icon}</span>
                                <span>{dataDanhLam[1].icon}</span>
                                <span>{dataDanhLam[1].icon}</span>
                                <h4>{dataDanhLam[1].view}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[2].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[2].price}</h3>
                            <h2>{dataDanhLam[2].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[2].icon}</span>
                                <span>{dataDanhLam[2].icon}</span>
                                <span>{dataDanhLam[2].icon}</span>
                                <span>{dataDanhLam[2].icon}</span>
                                <span>{dataDanhLam[2].icon}</span>
                                <h4>{dataDanhLam[2].view}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[3].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[3].price}</h3>
                            <h2>{dataDanhLam[3].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[3].icon}</span>
                                <span>{dataDanhLam[3].icon}</span>
                                <span>{dataDanhLam[3].icon}</span>
                                <span>{dataDanhLam[3].icon}</span>
                                <span>{dataDanhLam[3].icon}</span>
                                <h4>{dataDanhLam[3].view}</h4>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='ListView__body__two'>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[4].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[4].price}</h3>
                            <h2>{dataDanhLam[4].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[4].icon}</span>
                                <span>{dataDanhLam[4].icon}</span>
                                <span>{dataDanhLam[4].icon}</span>
                                <span>{dataDanhLam[4].icon}</span>
                                <span>{dataDanhLam[4].icon}</span>
                                <h4>{dataDanhLam[4].view}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[5].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[5].price}</h3>
                            <h2>{dataDanhLam[5].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[5].icon}</span>
                                <span>{dataDanhLam[5].icon}</span>
                                <span>{dataDanhLam[5].icon}</span>
                                <span>{dataDanhLam[5].icon}</span>
                                <span>{dataDanhLam[5].icon}</span>
                                <h4>{dataDanhLam[5].view}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[6].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[6].price}</h3>
                            <h2>{dataDanhLam[6].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[6].icon}</span>
                                <span>{dataDanhLam[6].icon}</span>
                                <span>{dataDanhLam[6].icon}</span>
                                <span>{dataDanhLam[6].icon}</span>
                                <span>{dataDanhLam[6].icon}</span>
                                <h4>{dataDanhLam[6].view}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__img'>
                            <img src={dataDanhLam[7].src} />
                        </div>
                        <div className='content__dec'>
                            <h3>{dataDanhLam[7].price}</h3>
                            <h2>{dataDanhLam[7].dec}</h2>
                            <div className='content__dec__evaluate'>
                                <span>{dataDanhLam[7].icon}</span>
                                <span>{dataDanhLam[7].icon}</span>
                                <span>{dataDanhLam[7].icon}</span>
                                <span>{dataDanhLam[7].icon}</span>
                                <span>{dataDanhLam[7].icon}</span>
                                <h4>{dataDanhLam[7].view}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeListDanhLam