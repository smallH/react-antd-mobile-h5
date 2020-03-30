import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { List, InputItem, Button, Switch, Range, Stepper } from 'antd-mobile';
import { createForm } from 'rc-form';

const Item = List.Item;
const Brief = Item.Brief;

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    _validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('账号长度不少于为4位'));
        }
    }

    _onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
            } else {
                alert('验证失败');
            }
        });
    }

    _onReset = () => {
        this.props.form.resetFields();
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;

        return (
            <div className={styles.container}>
                <List renderHeader={() => 'List基本用法'}>
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
                        extra={'右侧文字报错样式'}
                        multipleLine
                        onClick={() => { }}
                        error
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
                </List>
                <form>
                    <List renderHeader={() => 'List输入用法'} renderFooter={() => '尾部'}>
                        <InputItem
                            {...getFieldProps('account', {
                                initialValue: '',
                                rules: [
                                    { required: true, message: '请输入账号' },
                                    { validator: this._validateAccount },
                                ],
                            })}
                            placeholder="请输入账号" // 提示
                            clear // 是否带清除功能
                            error={!!getFieldError('account')} // 是否显示报错样式
                            onErrorClick={() => { alert(getFieldError('account').join('、')); }} // 点击报错icon触发的回调函数
                        >账号</InputItem>
                        <InputItem
                            {...getFieldProps('password')}
                            placeholder="请输入密码"
                            type="password">
                            密码
                        </InputItem>
                        <Item
                            extra={<Switch
                                {...getFieldProps('switch', {
                                    initialValue: false,
                                    valuePropName: 'checked'
                                })}
                            />}
                        >
                            滑动开关
                        </Item>
                        <Item>
                            <div className={styles.voice}>
                                <div>区域选择</div>
                                <div className={styles.range}>
                                    <Range
                                        style={{ marginLeft: 30, marginRight: 20 }}
                                        min={0}
                                        max={100}
                                        step={10}
                                        defaultValue={[0, 50]}
                                    />
                                </div>
                            </div>
                        </Item>
                        <Item extra={<Stepper style={{ width: '100%', minWidth: '100px' }} showNumber defaultValue={20} />}>步进器</Item>
                        <Item>
                            <div style={{ float: 'right' }}>
                                <Button size="small" inline type="primary" onClick={this._onSubmit}>提交</Button>
                                <Button size="small" inline style={{ marginLeft: '10px' }} onClick={this._onReset}>重置</Button>
                            </div>
                        </Item>
                    </List>
                </form>
            </div>
        );
    }
}

Main.propTypes = {
    form: PropTypes.object.isRequired
};

const InputWrapper = createForm()(Main);
export default InputWrapper;