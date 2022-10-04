import React from 'react';
import './Body.css';
import Header from './Header';
import { useStateValue } from './StateProvider';
import  PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import  MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SongRow from './SongRow';

const Body = ({spotify}) => {
    const [{ discovery_weekly }, dispatch] = useStateValue();

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={discovery_weekly?.images[0].url} alt="" /> 
                <div className="body__infoText">
                    <strong>PLAYLIST </strong>
                    <h2>Discover Weekly</h2>
                    <p>{discovery_weekly?.description}</p>
                </div>
            </div>
            <div className="body__song">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discovery_weekly?.tracks.items.map((item)=>(
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
