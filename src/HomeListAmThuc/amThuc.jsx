import { titleAmThuc, dataListAmThuc } from "./dataAmThuc";
import './styleAmThuc.css'
function ListAmThuc() {
    return (
        <div className="listAmThuc">
            <div className="listAmThuc__head">
                <h2>{titleAmThuc[0].title}</h2>
                <hr />
            </div>
            <div className="listAmThuc__content">
                <div className="listAmThuc__content__children">
                    <img src={dataListAmThuc[0].src} />
                    <div className="decription">
                        <h3>{dataListAmThuc[0].title}</h3>
                        <p>{dataListAmThuc[0].dec}</p>
                    </div>
                </div>
                <div className="listAmThuc__content__children">
                    <img src={dataListAmThuc[1].src} />
                    <div className="decription">
                        <h3>{dataListAmThuc[1].title}</h3>
                        <p>{dataListAmThuc[1].dec}</p>
                    </div>
                </div>
                <div className="listAmThuc__content__children">
                    <img src={dataListAmThuc[2].src} />
                    <div className="decription">
                        <h3>{dataListAmThuc[2].title}</h3>
                        <p>{dataListAmThuc[2].dec}</p>
                    </div>
                </div>
                <div className="listAmThuc__content__children">
                    <img src={dataListAmThuc[3].src} />
                    <div className="decription">
                        <h3>{dataListAmThuc[3].title}</h3>
                        <p>{dataListAmThuc[3].dec}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListAmThuc