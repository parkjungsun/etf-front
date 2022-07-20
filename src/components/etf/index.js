import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { RateChart } from "./RateChart";
import { ValueChart } from "./ValueChart";
import { PieChart } from "./PieChart";

import { getEtfs, getMoreEtfs } from "../../modules/etfs";
import EtfBox from "./EtfBox";

function Etf() {
    const dispatch = useDispatch();

    const etfs = useSelector((state) => state.etfs);
    const etf = useSelector((state) => state.etf);

    const [start, setStart] = useState("2020-07-20");
    const [end, setEnd] = useState("2022-07-20");
    const [w1, setW1] = useState(1);
    const [w2, setW2] = useState(1);
    const [w3, setW3] = useState(1);
    const [w4, setW4] = useState(1);
    const [w5, setW5] = useState(1);
    
    const { id } = useParams();
    const [page, setPage] = useState(id);

    useEffect(() => {
            dispatch(getEtfs(id));

    }, [id, dispatch]);

    const onChangeWeight1 = (event) => {
        setW1(event.target.value);
    }
    const onChangeWeight2 = (event) => {
        setW2(event.target.value);
    }
    const onChangeWeight3 = (event) => {
        setW3(event.target.value);
    }
    const onChangeWeight4 = (event) => {
        setW4(event.target.value);
    }
    const onChangeWeight5 = (event) => {
        setW5(event.target.value);
    }

    const onStartHandler = (event) => {
        setStart(event.target.value);
    };

    const onEndHandler = (event) => {
        setEnd(event.target.value);
    };

    const getMore = () => {
        dispatch(getMoreEtfs(page+1))
        setPage(page+1)
    }

    if(etfs.length === 0) {
        return <div>
            로딩중입니다.
        </div>
    }

    return (
        <div>
            <div className="date_input">
                <h2>한투 IT 박정선</h2>
                <h2 className="date_title">{etf.etf_name}</h2>
                <div>
                    <input 
                        className="chart_input" 
                        type="text" 
                        placeholder="시작일"
                        maxLength="20"
                        value={start}
                        onChange={onStartHandler}/>
                    ~
                    <input 
                        className="chart_input" 
                        type="text" 
                        placeholder="종료일"
                        maxLength="20"
                        value={end}
                        onChange={onEndHandler}/>
                </div>
            </div>
            <div className="chart_box">
                <div className="chart_unit">
                    <RateChart etf={etf} /> {/* ETF, KOSPI */} 
                </div>
                <div className="chart_unit">
                    <ValueChart etf={etf} /> {/* ETF, My ETF */} 
                </div>
                <div>
                    <PieChart etf={etf} />
                </div>
            </div>
            <div className="comment_box">
                <p>{etf.etf_name}는 KOSPI 지수 대비 수익률이 <span className="text_hie">{((etf.etf_value[etf.etf_value.length -1] - etf.etf_value[0]) / etf.etf_value[0] *100 - (etf.ks_value[etf.ks_value.length -1] - etf.ks_value[0]) / etf.ks_value[0] * 100).toFixed(2)}%</span> 발생하였고,
                나의 포트폴리오는 {etf.etf_name} 대비 수익률이 <span className="text_hie">{(etf.stock_yield[etf.stock_yield.length - 1] - etf.etf_yield[etf.etf_yield.length - 1]).toFixed(2)}%</span> 더 발생하였습니다.
                </p>
            </div>
            <div className="weight_box">
                <input
                    className="weight_input"
                    type="text"
                    placeholder="비중"
                    maxLength="3"
                    value={w1}
                    onChange={onChangeWeight1}
                    />
                <input
                    className="weight_input"
                    type="text"
                    placeholder="비중"
                    maxLength="3"
                    value={w2}
                    onChange={onChangeWeight2}
                />
                <input
                    className="weight_input"
                    type="text"
                    placeholder="비중"
                    maxLength="3"
                    value={w3}
                    onChange={onChangeWeight3}
                />
                <input
                    className="weight_input"
                    type="text"
                    placeholder="비중"
                    maxLength="3"
                    value={w4}
                    onChange={onChangeWeight4}
                />
                <input
                    className="weight_input"
                    type="text"
                    placeholder="비중"
                    maxLength="3"
                    value={w5}
                    onChange={onChangeWeight5}
                />
                <Link to={"/etf/"+(id*1+1)} className="next_page" >
                    <p>다음</p>
                </Link>
            </div>
            <div>
                {etfs.map((item, index) => (
                    <EtfBox
                        key={index}
                        code={item.cd}
                        nm={item.nm}
                        assets={item.assets}
                        start={start}
                        end={end}
                        w1={w1}
                        w2={w2}
                        w3={w3}
                        w4={w4}
                        w5={w5}
                    />
                ))}
            </div>
        </div>
    )
}

export default Etf;