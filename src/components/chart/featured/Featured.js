import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./featured.scss"

export const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className='title'>Total Revenue</h1>
                <MoreVertIcon fontSize='small' className='icon' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
                </div>
                <p className="title">XYZabc</p>
                <p className="amount">XYZabc</p>
                <p className="desc">XYZabc</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <ArrowDropDownIcon fontSize='small'/>
                            <div className="resultAmount">
                                AX-10
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <ArrowDropUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">
                                AX-10
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <ArrowDropUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">
                                AX-10
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
