import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Checkbox, List } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const data = [
    { value: 0, label: '米饭' },
    { value: 1, label: '饺子' },
    { value: 2, label: '煎饼' },
];

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange = (val) => {
        console.log(val);
    }

    render() {
        return (
            <div className={styles.container}>
                <List>
                    {data.map(i => (
                        <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </CheckboxItem>
                    ))}
                    <CheckboxItem key="disabled" disabled defaultChecked multipleLine>
                        例汤
                    </CheckboxItem>
                </List>
            </div>
        );
    }
}

export default Main;