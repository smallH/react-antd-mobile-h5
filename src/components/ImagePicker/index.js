import React from 'react';
import styles from './index.module.scss';
import { ImagePicker } from 'antd-mobile';

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            multiple: true,
        };
    }

    onChange = (files, type, index) => {
        console.log(files, type, index); // 返回类型格式包括文件file格式和图像的Base64格式
        this.setState({ files });
    }

    render() {
        const { files, multiple } = this.state;
        return (
            <div className={styles.container}>
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)} // 点击图片触发的回调
                    selectable={files.length < 7} // 是否显示添加按钮，默认true。用于自定义数量
                    multiple={multiple} // false单选、true多选
                    accept="image/gif,image/jpeg,image/jpg,image/png" // 文件类型过滤
                />
            </div>
        );
    }
}

export default Main;