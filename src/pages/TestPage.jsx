import React, { Component, PropTypes } from 'react';
import MD5 from '../lib/md5'
class  TestPage extends Component {
    constructor(props) {
        super(props);
        this.state={
        	a:2
        }
    }
    componentDidMount(){
        const appid = '2015063000000001';
        const key = '12345678';
        const salt = (new Date).getTime();
        const query = 'apple';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
        const from = 'en';
        const to = 'zh';
        const str1 = appid + query + salt +key;
        const sign = MD5(str1);
        $.ajax({
            url: 'http://fanyi.baidu.com/pccollection',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                req: 'get',
                page: 1,
                pagesize: 15,
                order: 'time',
                datatype: 'json',
                signature: '6964fa15342d7d02a79eb46dcbadf382'
            },
            success: function (data) {
                console.log(data);
            }
        });

    }
    render() {
        return (
           <div onClick={this.handleClick}>
               {`\u82f9\u679c`}
           </div>
        );
    }
}

export default  TestPage;
