import React, { Component } from 'react'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    <strong>Không tìm thấy trang</strong>
                </div>
            </div>
        )
    }
}
