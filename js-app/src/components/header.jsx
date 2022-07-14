import React from 'react';
import PropTypes from 'prop-types';
import './compStyles/_header.css';


const Header = (props)=>{
    return (
        <div>
            <nav className={"header"}>
                <div className={'title'}>{props.title}
                </div>
            </nav>
        </div>

    );
}

Header.defaultProps ={
    title:'Хуй'
}

Header.propTypes ={
    title: PropTypes.string
}

export default Header;

