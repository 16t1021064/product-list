import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index'
import { connect } from 'react-redux'
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            checkbStatus: true
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                checkbStatus: itemEditing.status
            })
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var { id, txtName, txtPrice, checkbStatus } = this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: checkbStatus
        }
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.push("/productlist");
    }
    render() {
        var { txtName, txtPrice, checkbStatus } = this.state;
        return (
            <div className='col-md 6'>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên sản phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={(e) => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label >Giá: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={(e) => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label >Trạng thái: </label>
                        <select
                            className="form-control"
                            name="checkbStatus"
                            value={checkbStatus}
                            onChange={(e) => this.onChange(e)}
                        >
                            <option value="true">Còn hàng</option>
                            <option value="false">Hết hàng</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary " style={{ marginRight: '10px' }}>Lưu lại</button>
                    <Link to="/productlist" className="btn btn-warning">
                        Trở lại
                    </Link>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },

    }
}
const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
