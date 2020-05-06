import React, { Component } from 'react';

class SmallAd extends Component {
    render() {
        return (
            <div id="small-ad">
            {/* Toilet Paper Ad, only visible on large devices */}
                <h3 id="small-ad-header">{this.props.title}</h3>
                <img id="img-ad" src={require('../../../Images/toilet-paper.jpg')} alt="toilet paper" />

                <img id="small-ad-stamp" className="mx-auto" src={require('../../../Images/stamp.jpg')} alt="stamp" />
                    <p className="small-ad-p">
                        Toilet Paper so SOFT you won't believe it's NATIONALIZED!
                        Responsible party members arrive early and never find themselves without.
                        Pick up yours today for 
                    </p>
                    <h3 className="price">45,60 credits</h3>
                    <h3 className="small-ad-p p-0">Limited Availability</h3>
            </div>
        );
    }
};

export default SmallAd;