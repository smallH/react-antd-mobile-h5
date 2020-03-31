import React from 'react';
import styles from './index.module.scss';
import { DatePicker, List, Button } from 'antd-mobile';

const now = new Date();

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            date: now,
            time: now
        };
    }

    onChange = (val) => {
        console.log(val);
    }

    render() {
        const year = now.getFullYear();
        const month = now.getMonth();
        const date = now.getDate();

        return (
            <div className={styles.container}>
                <List>
                    <DatePicker
                        mode="datetime"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                        onOk={() => { console.log('确定'); }}
                        onDismiss={() => { console.log('取消'); }}
                    >
                        <Button>选择日期</Button>
                    </DatePicker>
                    <DatePicker
                        mode="datetime"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">日期+时间</List.Item>
                    </DatePicker>
                    <DatePicker
                        mode="date"
                        title="选择器标题"
                        extra="Optional"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">日期</List.Item>
                    </DatePicker>
                    <DatePicker
                        minDate={new Date(year, month, date, 9, 0, 0)} // 日期范围最小值：默认new Date(2000, 1, 1, 0, 0, 0)
                        maxDate={new Date(year, month, date, 18, 0, 0)} // 日期范围最大值：默认new Date(2030, 1, 1, 23, 59, 59)
                        mode="time"
                        value={this.state.time}
                        onChange={time => { this.setState({ time }); console.log(time); }}
                    >
                        <List.Item arrow="horizontal">时间选择器</List.Item>
                    </DatePicker>
                    <DatePicker
                        mode="time"
                        minuteStep={2} // 分钟数递增步长设置
                        use12Hours // 12小时制
                        value={this.state.time}
                        onChange={time => this.setState({ time })}
                    >
                        <List.Item arrow="horizontal">12小时制 (am/pm)</List.Item>
                    </DatePicker>

                </List>
            </div>
        );
    }
}

export default Main;