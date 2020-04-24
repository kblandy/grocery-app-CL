import React, { Component } from 'react';

import SmallAd from './SmallAd';

class BigArticle extends Component {
    render() {
        return (
            <div className="border border-dark" id="big-article">
                <h3 className="news-article-header">Victory in Europa</h3>
                <h4 className="news-article-subheader">but storms still brewing overseas</h4>

                    <SmallAd
                        title="Doubleplusgood Toilet Tissue" />
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet magna imperdiet, laoreet lectus id, pharetra magna. Aenean sollicitudin vestibulum ante, at vehicula nisi pretium eget. Proin justo risus, mollis in ligula eu, tempus dapibus risus. Phasellus lacinia est ac massa consectetur molestie. Maecenas pulvinar ornare nisl sed varius. Etiam tempor lorem a ultricies ornare. Nam at purus consectetur, ornare tellus vitae, viverra enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vulputate tristique ante, at faucibus ante. Aenean id neque nisl.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam velit libero, placerat eu nulla ut, pretium lacinia lacus. Donec nec felis vel dolor sollicitudin pretium vel vel sapien. Etiam id urna eget ex tempor suscipit. Nullam maximus pretium sodales. Nullam non massa in odio ultrices condimentum et et ex. Cras vel gravida augue. Donec in mi tristique, efficitur purus non, commodo metus. Quisque laoreet ex nibh, non pellentesque lacus eleifend eu. Vivamus sed vulputate ligula. In sed dapibus urna. Sed tincidunt eros et urna mollis ultrices et et ex. Aenean dictum efficitur purus, sed tristique eros congue quis. Nullam tempor, ligula elementum luctus cursus, quam tortor luctus dolor, vitae elementum nisi sem ac nisl.</p>
            </div>
        );
    }
};

export default BigArticle;