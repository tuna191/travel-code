import { labelInput, dataHotel } from "./dataHotel";
import './styleHomeHotel.css'
function RecommentHotel() {
    return (
        <div className="recommentHotel">
            <div className="recommentHotel__head">
                <h2>{labelInput[1].label}</h2>
                <hr />
            </div>
            <div className="recommentHotel__content">
                <div className="content__input">
                    <h1>{labelInput[0].label}</h1>
                    <input placeholder="Enter email..." />
                </div>
                <div className="content__img">
                    <div className="content__img__children">
                        <div className="img">
                            <img src={dataHotel[0].src} />
                        </div>
                        <div className="img__dec">
                            <h3>{dataHotel[0].price}</h3>
                            <h2>{dataHotel[0].name}</h2>
                            <div className="img__icon">
                                <span>{dataHotel[0].icon}</span>
                                <span>{dataHotel[0].icon}</span>
                                <span>{dataHotel[0].icon}</span>
                                <span>{dataHotel[0].icon}</span>
                                <span>{dataHotel[0].icon}</span>
                                <h3>{dataHotel[0].evaluate}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="content__img__children">
                        <div className="img">
                            <img src={dataHotel[1].src} />
                        </div>
                        <div className="img__dec">
                            <h3>{dataHotel[1].price}</h3>
                            <h2>{dataHotel[1].name}</h2>
                            <div className="img__icon">
                                <span>{dataHotel[1].icon}</span>
                                <span>{dataHotel[1].icon}</span>
                                <span>{dataHotel[1].icon}</span>
                                <span>{dataHotel[1].icon}</span>
                                <span>{dataHotel[1].icon}</span>
                                <h3>{dataHotel[1].evaluate}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="content__img__children">
                        <div className="img">
                            <img src={dataHotel[2].src} />
                        </div>
                        <div className="img__dec">
                            <h3>{dataHotel[2].price}</h3>
                            <h2>{dataHotel[2].name}</h2>
                            <div className="img__icon">
                                <span>{dataHotel[2].icon}</span>
                                <span>{dataHotel[2].icon}</span>
                                <span>{dataHotel[2].icon}</span>
                                <span>{dataHotel[2].icon}</span>
                                <span>{dataHotel[2].icon}</span>
                                <h3>{dataHotel[2].evaluate}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommentHotel