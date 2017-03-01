import React from 'react';

import { Table, Pagination } from 'qnui';
import Fetch from '../../lib/fetch';
import '../../styles/table.css';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataList: [],
    pageSize: 10,
    pageNo: 1,
    total: 1
  }
  componentDidMount() {
    this.getList();
  }
  getList(pageNo = this.state.pageNo , pageSize = this.state.pageSize){
    Fetch.get('/getList', { apiName: 'getList', pageNo: pageNo, pageSize: pageSize }).then(result => {
      let dataList = result.items_onsale_get_response.items.item.map((item) => {
        return {
          product: {
            pic_url: item.pic_url,
            title: item.title,
            price: item.price,
            num: item.num,
            outer_id: item.outer_id
          },
          delist_time: item.delist_time
        }
      })
      let total = result.items_onsale_get_response.total_results;
      this.setState({
        dataList,
        total
      });
    })
  }
  onChange() {
  }
  onPageChange(value){
    this.getList(value);
  }
  render() {
    const renderBaby = (product) => {
      return (<div className="media">
        <img src={product.pic_url} className="media-side" width="80" height="80" />
        <div className="media-content">
          <div><a href="javascript:;">{product.title}</a></div>
          <div>{product.price} / {product.num}</div>
          <div>商家编码：{product.outer_id || ''}</div>
        </div>
      </div>)
    }
    return (
      <div>
        <Table dataSource={this.state.dataList} rowSelection={{ onChange: () => { this.onChange() } }}>
          <Table.Column title="宝贝" dataIndex="product" cell={renderBaby} />
          <Table.Column title="下架时间" dataIndex="delist_time" />
        </Table>
        <Pagination onChange={this.onPageChange.bind(this)} total={this.state.total}/>
      </div>
    );
  }
}

List.defaultProps = {
};

export default List;