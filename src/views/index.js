import React from 'react';
import styles from './index.module.scss';
import { List, WhiteSpace, Button } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <List renderHeader={() => '头部'} renderFooter={() => '尾部'}>
                    <Item extra={'左右布局简介'}>标题</Item>
                    <Item arrow="horizontal" multipleLine onClick={() => { }}>
                        标题
                        <Brief>上下布局简介</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        extra={'默认对齐middle'}
                        align="middle"
                        multipleLine
                        onClick={() => { }}
                    >
                        标题
                        <Brief>上下布局简介</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { }}
                    >
                        标题 <Brief>带图标的选项</Brief>
                    </Item>
                    <Item>文字不换行超出显示省略号。文字不换行超出显示省略号。</Item>
                    <Item wrap>文字支持自动换行。文字支持自动换行。文字支持自动换行。</Item>
                    <Item extra={'左右布局简介'} multipleLine align="middle" wrap>
                        文字支持自动换行。文字支持自动换行。文字支持自动换行。
                    </Item>
                    <Item
                        disabled={this.state.disabled}
                        onClick={() => { this.setState({ disabled: true }); }}
                    >
                        点击后，状态变为禁用
                    </Item>
                    <Item>
                        内嵌其它标签元素
                        <Brief><Button>123</Button></Brief>
                    </Item>
                </List>
                <WhiteSpace size='lg' />
            </div>
        );
    }
}

export default Main;