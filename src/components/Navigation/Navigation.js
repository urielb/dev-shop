/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Navigation {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="/" onClick={Link.handleClick}>Desenvolvedores</a>
        <span className="Navigation-spacer"> | </span>
        <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Meu Carrinho</a>
      </div>
    );
  }

}

export default Navigation;