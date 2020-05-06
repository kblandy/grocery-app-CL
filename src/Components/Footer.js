import React, { Component } from 'react';

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                <img className="footer-image" src={require('../Images/1984-ingsoc.jpg')} alt="ingsoc logo" /> This Pamphlet Property of INGSOC
                </div>

                {/* Footer Icons */}
                <a href="https://github.com/kblandy" className="p-2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faGithubSquare}
                        size='2x' 
                    />
                </a>

                <a href="https://www.linkedin.com/in/kirstynblandy/" className="p-2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size='2x' 
                    />
                </a>

            </footer>
        )
    }
}

export default Footer;