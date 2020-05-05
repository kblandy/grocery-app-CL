import React, { Component } from 'react';
import SmallArticle from './SmallArticle';
import SmallAd from './SmallAd';

import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BigArticle extends Component {
    render() {
        return (
            <div id="big-article">
                <div>
                    {/* news div */}
                    <div>
                        <h3 className="news-article-header">Victory in Europa!</h3>

                            {/* This div is hidden on large screens */}
                            <p id="big-article-p-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet magna imperdiet, laoreet lectus id, pharetra magna. Aenean sollicitudin vestibulum ante, at vehicula nisi pretium eget. Proin justo risus, mollis in ligula eu, tempus dapibus risus. Phasellus lacinia est ac massa consectetur molestie. Maecenas pulvinar ornare nisl sed varius. Etiam tempor lorem a ultricies ornare. Nam at purus consectetur, ornare tellus vitae, viverra enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vulputate tristique ante, at faucibus ante. Aenean id neque nisl.</p>
                            
                            {/* This span is hidden on large screens */}
                            <span id="p-logo" className="mx-auto">
                                <FontAwesomeIcon 
                                    icon={faDiceD20}
                                    size='2x'
                                />
                            </span>

                            <p id="big-article-p-mobile" className="pt-3">
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam velit libero, placerat eu nulla ut, pretium lacinia lacus. Donec nec felis vel dolor sollicitudin pretium vel vel sapien. Etiam id urna eget ex tempor suscipit. Nullam maximus pretium sodales. Nullam non massa in odio ultrices condimentum et et ex. Cras vel gravida augue. Donec in mi tristique, efficitur purus non, commodo metus. Quisque laoreet ex nibh, non pellentesque lacus eleifend eu. Vivamus sed vulputate ligula. In sed dapibus urna. Sed tincidunt eros et urna mollis ultrices et et ex. Aenean dictum efficitur purus, sed tristique eros congue quis. Nullam tempor, ligula elementum luctus cursus, quam tortor luctus dolor, vitae elementum nisi sem ac nisl.</p>

                            {/* This div is hidden on small screens */}
                            <div className="container" id="big-article-flex-wide">

                            <div className="row">
                                    <div className="col-md">
                                    
                                    <p>Doublethink Hate week prolefeed minitru miniluv facecrime ingsoc fullwise unperson upsub versificator joycamp dayorder. Miniluv groupthink unperson crimethink doublethink fullwise prolefeed doubleplus pornosec joycamp artsem minipax Big Brother memory hole blackwhite. Crimethink pornosec unperson fullwise doubleplus ficdep Big Brother prolefeed blackwhite miniluv oldthink facecrime Hate week. Ingsoc ficdep dayorder versificator duckspeak prolefeed minipax upsub Big Brother thinkpol fullwise blackwhite thoughtcrime crimethink Hate week. Thinkpol pornosec doubleplus fullwise crimethink artsem minipax. </p>
                                    
                                    </div>
                                    <div className="col-md">
                                        <p>
                                        Prolefeed Big Brother thinkpol upsub crimethink memory hole thoughtcrime blackwhite minitru ficdep artsem fullwise dayorder pornosec miniluv. Prolefeed Hate week crimethink doublethink memory hole doubleplus duckspeak thoughtcrime unperson blackwhite joycamp unperson fullwise miniluv versificator facecrime thinkpol artsem. Dayorder unperson ficdep artsem minitru groupthink doublethink prolefeed ownlife duckspeak fullwise. Minipax fullwise groupthink artsem oldthink doublethink doubleplus bellyfeel ownlife minitru Hate week pornosec  duckspeak upsub crimethink unperson fullwise miniluv versificator facecrime.
                                        </p>
                                    </div>
                                    <div className="col-sm">
                                    <p>
                                        Prolefeed Big Brother thinkpol upsub crimethink memory hole thoughtcrime blackwhite minitru ficdep artsem fullwise dayorder pornosec miniluv. r facecrime thinkpol artsem. Dayorder unperson ficdep artsem minitru groupthink doublethink prolefeed ownlife duckspeak fullwise. Minipax fullwise groupthink artsem oldthink doublethink doubleplus bellyfeel ownlife minitru Hate week pornosec  duckspeak upsub crimethink memory hole ficdep. UnpeProlefeed Hate week crimethink doublethink memory hole doubleplus duckspeak thoughtcrime unperson blackwhite joycamp unperson fullwise miniluv versificator facecrime thinkpol artsem.
                                    </p>


                                        {/* <SmallArticle /> */}
                                    </div>
                                    <div className="col-sm">
                                        <div>
                                            <SmallAd
                                                    title="Doubleplusgood Toilet Tissue" 
                                                />
                                        </div>
                                        <div>
                                            <SmallArticle />
                                        </div>

                                    </div>
                                </div>



                                </div>
                            </div>
                    </div>
                    {/* /News div
                    <div>
                        <SmallArticle />
                    </div> */}
                </div>


        );
    }
};

export default BigArticle;