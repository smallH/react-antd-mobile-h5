import React from 'react';
import styles from './index.module.scss';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

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
                <List renderHeader={() => '金额用法'}>
                    <InputItem
                        {...getFieldProps('money1')}
                        type={'money'}
                        placeholder="光标靠左"
                        clear
                        moneyKeyboardAlign="left" // 文字排版起始方向, 只有 type='money' 支持
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >光标靠左</InputItem>
                    <InputItem
                        ref={el => this.inputRef = el}
                        type={'money'}
                        placeholder="光标靠右"
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)} // 虚拟键盘点击确认时的回调函数
                        disabledKeys={['.', '0', '3']} // 禁用部分数字按键(仅 type=money时有效)
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >光标靠右</InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={() => this.inputRef.focus()}
                        >
                            获取光标靠右焦点
                    </div>
                    </List.Item>
                </List>
                <List renderHeader={() => '基础用法'}>
                    <InputItem
                        placeholder="0.00"
                        extra="¥"
                    >后缀扩展输入</InputItem>
                    <InputItem
                        {...getFieldProps('bankCard', {
                            initialValue: '8888 8888 8888 8888',
                        })}
                        type="bankCard"
                    >银行卡</InputItem>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="186 1234 1234"
                    >手机号码</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="****"
                    >密码</InputItem>
                    <InputItem
                        {...getFieldProps('number')}
                        labelNumber={5}
                        type="number"
                        placeholder="唤醒数字键盘(不带符号)" // 标签的文字个数，可用2-7之间的数字
                    >数字键盘1</InputItem>
                    <InputItem
                        {...getFieldProps('digit')}
                        labelNumber={5}
                        type="digit"
                        placeholder="唤醒原生数字键盘(带符号)"
                    >数字键盘2</InputItem>
                </List>
            </div>
        );
    }
}

Main.propTypes = {
    form: PropTypes.object.isRequired
};

const InputWrapper = createForm()(Main);
export default InputWrapper;