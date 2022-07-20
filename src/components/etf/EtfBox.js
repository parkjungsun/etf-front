import React from "react";
import { useDispatch } from "react-redux";
import { getEtf } from "../../modules/etf";

function EtfBox({code, nm, assets, start, end, w1, w2, w3, w4, w5}) {

    const dispatch = useDispatch();

    const onSummit = () => {
        assets[0]['quantity'] = w1;
        assets[1]['quantity'] = w2;
        assets[2]['quantity'] = w3;
        assets[3]['quantity'] = w4;
        assets[4]['quantity'] = w5;

        const data = {
            "etf_code": code,
            "etf_name": nm,
            "start": start,
            "end": end,
            "assets": assets.slice(0,5)
        };
        
        dispatch(getEtf(data));
    }
    
    return ( 
        <div className="etf_box">
            <div className="title">{nm}</div>
            <div className="etf_assets">
                {assets.slice(0,5).map((item, idx) => (
                    <div className="etf_unit" key={idx}>
                        <div>
                            <div>{item.nm}</div>
                            <div>{item.weight}</div>
                        </div>
                    </div>
                ))}
                <div className="run_button" onClick={() => onSummit()}><p>RUN</p></div>
            </div>
        </div>
    );
}
export default EtfBox;