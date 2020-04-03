import React from 'react';
import styles from './index.module.scss';
import { SearchBar } from 'antd-mobile';

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.autoFocusInst.focus();
    }

    render() {
        return (
            <div className={styles.container}>
                <SearchBar
                    placeholder="搜索"
                    maxLength={8}
                    onChange={(e) => console.log(e)}
                    onSubmit={(e) => console.log(e)}
                />
                <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
            </div>
        );
    }
}

export default Main;