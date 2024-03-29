import React from "react";

function Clock(props) {
    var duration = props.duration;
    const isUrdu = props.isUrdu;

    function formatNum(temp) {
        if (temp > 9) return temp;
        if (temp > 0) return "0" + temp;
        return "00";
    }
    return (
        <div className="content">
            {window.outerWidth > 450 ? (
                <ul>
                    {duration.days !== 0 && (
                        <li>
                            <p className="num">{formatNum(duration.days)}</p>
                            {isUrdu ? (
                                <p className="caption urdu">دن</p>
                            ) : (
                                <p className="caption">Days</p>
                            )}
                        </li>
                    )}
                    <li>
                        <p className="num">{formatNum(duration.hours)}</p>
                        {isUrdu ? (
                            <p className="caption urdu">گھنٹے</p>
                        ) : (
                            <p className="caption">Hours</p>
                        )}
                    </li>
                    <li>
                        <p className="num">{formatNum(duration.mins)}</p>
                        {isUrdu ? (
                            <p className="caption urdu">منٹ</p>
                        ) : (
                            <p className="caption">Mins</p>
                        )}
                    </li>
                    <li>
                        <p className="num">{formatNum(duration.secs)}</p>
                        {isUrdu ? (
                            <p className="caption urdu">سیکنڈ</p>
                        ) : (
                            <p className="caption">Secs</p>
                        )}
                    </li>
                </ul>
            ) : (
                <>
                    {duration.days !== 0 && (
                        <div className="days-div">
                            <p className="m-0">
                                {isUrdu ? (
                                    <>
                                        {formatNum(duration.days)} {" "}
                                        <span className="caption urdu m-0">
                                            دن
                                        </span>
                                    </>
                                ) : (
                                    <span className="caption m-0">
                                        {formatNum(duration.days)} Days
                                    </span>
                                )}
                            </p>
                        </div>
                    )}
                    <ul>
                        <li>
                            <p className="num">{formatNum(duration.hours)}</p>
                            {isUrdu ? (
                                <p className="caption urdu">گھنٹے</p>
                            ) : (
                                <p className="caption">Hours</p>
                            )}
                        </li>
                        <li>
                            <p className="num">{formatNum(duration.mins)}</p>
                            {isUrdu ? (
                                <p className="caption urdu">منٹ</p>
                            ) : (
                                <p className="caption">Mins</p>
                            )}
                        </li>
                        <li>
                            <p className="num">{formatNum(duration.secs)}</p>
                            {isUrdu ? (
                                <p className="caption urdu">سیکنڈ</p>
                            ) : (
                                <p className="caption">Secs</p>
                            )}
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default Clock;
