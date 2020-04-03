import React from 'react';
import styles from './index.module.scss';
import { List, Radio } from 'antd-mobile';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';

const RadioItem = Radio.RadioItem;

const data = [
    { id: 'id0', label: '单选A' },
    { id: 'id1', label: '单选B' },
];

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            checkID: 'id0'
        };
    }

    componentDidMount() {

    }

    _renderRadioItem1 = () => {
        const { checkID } = this.state;
        return data.map(i => (
            <RadioItem key={i.id} checked={checkID === i.id} onChange={() => { this.setState({ checkID: i.id }); }}>
                {i.label}
            </RadioItem>
        ));
    }

    _renderRadioItem2 = () => {
        const { checkID } = this.state;
        return data.map(i => (
            <Radio className={styles.radio} key={i.id} checked={checkID === i.id} onChange={() => { this.setState({ checkID: i.id }); }}>
                {i.label}
            </Radio>
        ));
    }

    render() {
        return (
            <div className={styles.container}>
                <List renderHeader={() => '单选组件-样式1'}>
                    {this._renderRadioItem1()}
                </List>
                <div style={{ backgroundColor: '#fff', paddingTop: '20px' }}>
                    {this._renderRadioItem2()}
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    form: PropTypes.object.isRequired
};

const PickerWrapper = createForm()(Main);
export default PickerWrapper;