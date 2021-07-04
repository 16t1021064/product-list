import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'primary' : 'warning';
        return (
            <tr>
                <td >{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} đồng</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-primary"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        )
    }
}
