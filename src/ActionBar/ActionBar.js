import React from 'react';
import './ActionBar.scss';
import PropTypes from 'prop-types';
/**
 * @author Athul
 *
 * ButonBar component holds the action buttons in a page and displayed at the bottom.
 * It will be always visible if used on a page when there is a scroll bar in it
 *
 * @param children (jsx | optional) - The Buttons/items to be rendered within the Bar
 *
 */
class ActionBar extends React.Component {
    /******************** Lifecycle Methods ********************/
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false
        };
        this.isSticky = this.isSticky.bind(this);
    }

    componentDidMount = () => {
        let _this = this;
        if(document.querySelector('.button-bar')) {
            let originalPos = document.querySelector('.button-bar').offsetTop;
            _this.setState({ isSticky: this.isSticky(originalPos) });
            window.onscroll = function() {
                _this.setState({ isSticky: _this.isSticky(originalPos) });
            };
        }
    }

    componentWillUnmount = () => window.onscroll = null;

    render = () => (
        <div className={this.state.isSticky ? 'button-bar fixed-footer' : 'button-bar'}>
            {this.props.children}
        </div>
    );

    isSticky = (originalPos) => {
        let topPos = window.pageYOffset;
        let bottomPos = topPos + window.innerHeight;
        if (originalPos > topPos && originalPos < bottomPos) {
            return false;
        } else {
            return true;
        }
    }
}
ActionBar.displayName = 'ActionBar';
/******************** Configuration ********************/
ActionBar.propTypes = {
    children: PropTypes.node
};

export default ActionBar;