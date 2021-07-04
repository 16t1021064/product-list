import React, { Component } from 'react'
export default class ProductList extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Danh sách sản phẩm</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên hàng</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}
