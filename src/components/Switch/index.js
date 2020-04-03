import React from 'react';
import styles from './index.module.scss';
import { List, Switch } from 'antd-mobile';

const Item = List.Item;
class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <List renderHeader={() => '滑动按钮'}>
                    <Item
                        extra={<Switch
                            checked={this.state.checked}
                            onChange={() => {
                                this.setState({
                                    checked: !this.state.checked,
                                });
                            }}
                        />}
                    >
                        滑动按钮
                    </Item>
                </List>
            </div>
        );
    }
}

export default Main;