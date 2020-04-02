import React from 'react';
import styles from './index.module.scss';
import { List, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import { district, provinceLite } from 'antd-mobile-demo-data';

const seasons = [
    [
        {
            label: '2013',
            value: '2013',
        },
        {
            label: '2014',
            value: '2014',
        },
    ],
    [
        {
            label: '春',
            value: '春',
        },
        {
            label: '夏',
            value: '夏',
        },
    ],
];

const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',
};

const colors = [
    {
        label:
            (<div>
                <span
                    style={{ ...colorStyle, backgroundColor: '#FF0000' }}
                />
                <span>红色</span>
            </div>),
        value: '#FF0000',
    },
    {
        label:
            (<div>
                <span
                    style={{ ...colorStyle, backgroundColor: '#00FF00' }}
                />
                <span>绿色</span>
            </div>),
        value: '#00FF00',
    },
    {
        label:
            (<div>
                <span
                    style={{ ...colorStyle, backgroundColor: '#0000FF' }}
                />
                <span>蓝色</span>
            </div>),
        value: '#0000FF',
    },
];

// 赋值均为数组格式，每个数组字符串与渲染的数据源Value匹配，将Label作为值显示
class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            areaValue: [],
            seasonValue: [],
            data: [],
            cols: 1,
            asyncValue: [],
            colorValue: ['#00FF00']
        };
    }

    componentDidMount() {
        console.log(provinceLite); // 数据格式(一列)
        console.log(seasons); // 非联动数据格式(两列)
        console.log(district); // 联动数据格式(三列)
    }

    // 联动异步
    onClick = () => {
        setTimeout(() => {
            this.setState({ data: provinceLite });
        }, 500);
    }

    // 算法就是封装成三级联动的数据格式
    onPickerChange = (val) => {
        let colNum = 1;
        const d = [...this.state.data];
        const asyncValue = [...val];
        if (val[0] === 'zj') {
            d.forEach((i) => {
                if (i.value === 'zj') {
                    colNum = 2;
                    if (!i.children) {
                        i.children = [{
                            value: 'zj-nb',
                            label: '宁波',
                        }, {
                            value: 'zj-hz',
                            label: '杭州',
                        }];
                        asyncValue.push('zj-nb');
                    } else if (val[1] === 'zj-hz') {
                        i.children.forEach((j) => {
                            if (j.value === 'zj-hz') {
                                j.children = [{
                                    value: 'zj-hz-xh',
                                    label: '西湖区',
                                }];
                                asyncValue.push('zj-hz-xh');
                            }
                        });
                        colNum = 3;
                    }
                }
            });
        } else {
            colNum = 1;
        }
        this.setState({
            data: d,
            cols: colNum,
            asyncValue,
        });
    };

    // 颜色选择器
    onChangeColor = (color) => {
        console.log(color);
        this.setState({
            colorValue: color,
        });
    };

    render() {
        const { areaValue, seasonValue, colorValue } = this.state;

        return (
            <div className={styles.container}>
                {/* 联动同步 */}
                <Picker
                    extra="请选择"
                    data={district}
                    title="选择地区"
                    value={areaValue}
                    onChange={v => {
                        this.setState({ areaValue: v });
                        console.log(v);
                    }}
                    onOk={v => this.setState({ areaValue: v })}
                >
                    <List.Item arrow="horizontal">地区(联动同步)</List.Item>
                </Picker>
                {/* 联动异步 */}
                <Picker
                    data={this.state.data}
                    cols={this.state.cols}
                    value={this.state.asyncValue}
                    onPickerChange={this.onPickerChange}
                    onOk={v => console.log(v)}
                >
                    <List.Item arrow="horizontal" onClick={this.onClick}>地区(联动异步)</List.Item>
                </Picker>
                {/* 非联动 */}
                <List>
                    <Picker
                        extra="请选择"
                        data={seasons}
                        title="选择季节"
                        cascade={false}
                        value={seasonValue}
                        onChange={v => {
                            this.setState({ seasonValue: v });
                            console.log(v);
                        }}
                        onOk={v => this.setState({ seasonValue: v })}
                    >
                        <List.Item arrow="horizontal">季节(非联动)</List.Item>
                    </Picker>
                    <Picker
                        data={district}
                        cols={1}
                        onChange={(e) => {
                            console.log(e);
                        }}
                    >
                        <List.Item arrow="horizontal">地区仅显示1列</List.Item>
                    </Picker>
                    <Picker
                        data={colors}
                        value={colorValue}
                        cols={1}
                        onChange={this.onChangeColor}
                    >
                        <List.Item arrow="horizontal">颜色选择</List.Item>
                    </Picker>
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