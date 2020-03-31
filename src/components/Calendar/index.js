import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Calendar, List } from 'antd-mobile';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const Item = List.Item;

// 默认数据
const now = new Date();
const extra = { '2019/04/01': { info: '不可选', disable: true } }; // 设置不可选方式一
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate())] = { info: '不可选', disable: true }; // 设置不可选方式二，组件要的格式

// 将 YYYY/MM/DD 这种格式转换为组件所需的时间撮格式{'时间撮':{info:'', disable:''}}
Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            config: {},
            startTime: undefined,
            endTime: undefined,
        };
    }

    renderBtn(zh, config = {}) {
        return (
            <Item
                arrow="horizontal"
                onClick={() => {
                    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                    this.setState({
                        show: true,
                        config,
                    });
                }}
            >
                {zh}
            </Item>
        );
    }

    // 确定
    _onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime,
            endTime,
        });
    }

    // 重置
    _onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }

    // 扩展日期单元格显示内容，可用于设置不可选的日期
    _getDateExtra = date => {
        return extra[+date];
    };

    // 当选择的区间包含不可选日期时触发的回调函数
    _onSelectHasDisableDate = (dates) => {
        console.warn('选择区间包含不可选日期时的回调函数', dates);
    }

    render() {
        return (
            <div className={styles.container}>
                <List style={{ backgroundColor: 'white' }}>
                    {this.renderBtn('选择日期区间')}
                    {this.renderBtn('选择日期时间区间', { pickTime: true })}
                    {this.renderBtn('选择日期', { type: 'one' })}
                    {this.renderBtn('选择日期时间', { type: 'one', pickTime: true })}
                    {this.renderBtn('选择日期区间(快捷)', { showShortcut: true })}
                    {this.renderBtn('选择日期时间区间(快捷)', { pickTime: true, showShortcut: true })}
                    {this.renderBtn('大行距', { rowSize: 'xl' })}
                    {this.renderBtn('不无限滚动', { infinite: true })}
                    {this.renderBtn('水平进入', { enterDirection: 'horizontal' })}
                    {this.renderBtn('默认选择范围', { defaultValue: [new Date(+now - 86400000), new Date(+now - 345600000)] })}
                </List>
                <Calendar
                    {...this.state.config}
                    locale={zhCN} // 本地化
                    visible={this.state.show} // 是否显示
                    onCancel={this._onCancel} // 关闭时回调
                    onConfirm={this._onConfirm} // 确认时回调
                    onSelectHasDisableDate={this._onSelectHasDisableDate} // 选择区间包含不可用日期
                    getDateExtra={this._getDateExtra} // 日期扩展数据
                    defaultDate={now} // 显示开始日期
                // renderHeader={() => <div>自定义标题</div>}
                // enterDirection='vertical' // 入场方向：水平'horizontal' | 垂直'vertical'
                // initalMonths={2} // 初始化月个数
                // renderShortcut={(select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode} // 替换快捷选择栏 需要设置showShortcut: true
                />
            </div>
        );
    }
}

export default Main;