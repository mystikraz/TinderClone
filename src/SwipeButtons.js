import React from 'react';

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import './swipebuttons.css';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <StarRateIcon className="swipeButtons__star" fontSize="large" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className="swipeButtons__right" fontSize="large" />
            </IconButton>
            <IconButton>
                <FlashOnIcon className="swipeButtons__lightning" fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
