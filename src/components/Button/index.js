import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Button, List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.container}>
                <Button>默认样式</Button>
                <Button disabled>禁用样式</Button>
                <Button type="primary">确认样式</Button>
                <Button type="warning">警告样式</Button>
                <Button loading>加载中</Button>
                <Button icon="check-circle-o">带图标</Button>
                <Button type="primary" inline style={{ marginRight: '4px' }}>行内布局按钮</Button>
                <Button type="ghost" inline style={{ marginRight: '4px' }}>行内布局按钮</Button>
                <br />
                <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>小尺寸</Button>
                <Button type="ghost" inline size="large">大尺寸</Button>
                <List>
                    <Item
                        extra={<Button type="primary" inline>确认</Button>}
                        multipleLine
                    >
                        标题
                        <Brief>简介</Brief>
                    </Item>
                </List>
            </div>
        );
    }
}

export default Main;