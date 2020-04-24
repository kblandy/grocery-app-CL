import React, { Component } from 'react';

class SmallAd extends Component {
    render() {
        return (
            <div id="small-ad">
                <h3 id="small-ad-header">{this.props.title}</h3>
                <img id="img-ad" src={require('../../../Images/toilet-paper.jpg')} alt="toilet paper" />

                <img id="small-ad-stamp" src={require('../../../Images/stamp.jpg')} alt="stamp" />
                    <p className="small-ad-p">
                        Toilet Paper so SOFT you won't believe it's NATIONALIZED!
                        Responsible party members arrive early and never find themselves without.
                        Pick up yours today for <h3 className="p-3">45,60 credits</h3>
                    </p>
                    <h3 className="mx-auto">Limited Stocks</h3>
            </div>
        );
    }
};

export default SmallAd;