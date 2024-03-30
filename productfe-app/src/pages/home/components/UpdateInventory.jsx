import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class AddInventoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter product name" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" className="form-control" id="price" name="price" placeholder="Enter product price" />
              </div>
              <div className="form-group">
                <label htmlFor="stock">Stock:</label>
                <input type="number" className="form-control" id="stock" name="stock" placeholder="Enter product stock" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Enter product description" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input type="text" className="form-control" id="category" name="category" placeholder="Enter product category" />
              </div>
              <button type="button" className="btn btn-primary" onClick={this.handleShowModal}>Open Modal</button>
            </form>
          </div>
        </div>

        {/* Modal */}
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Inventory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter product name" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" className="form-control" id="price" name="price" placeholder="Enter product price" />
              </div>
              <div className="form-group">
                <label htmlFor="stock">Stock:</label>
                <input type="number" className="form-control" id="stock" name="stock" placeholder="Enter product stock" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Enter product description" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input type="text" className="form-control" id="category" name="category" placeholder="Enter product category" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>Close</Button>
            <Button variant="primary" onClick={this.handleCloseModal}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
