import React from 'react';
import styles from './index.module.scss';
import { List, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className={styles.container}>
                <List>

                </List>
            </div>
        );
    }
}

Main.propTypes = {
    form: PropTypes.object.isRequired
};

const PickerWrapper = createForm()(Main);
export default PickerWrapper;