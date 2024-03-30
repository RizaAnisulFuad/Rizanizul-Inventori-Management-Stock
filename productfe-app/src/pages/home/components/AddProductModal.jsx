import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { createProduct } from "../../../services/product";
import { toast } from "sonner";
import { useFetchStore } from "../../../hooks/useFetchStore";
const AddProductModal = ({ show, handleClose }) => {
  const { setRefetchProduct } = useFetchStore();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: "",
    description: "",
    category: "",
  });
  const handleSaveProduct = async () => {
    try {
      const createdProduct = await createProduct(product);
      toast.success("Product created successfully!");
      setRefetchProduct(true);
      handleClose();
    } catch (error) {
      console.error("Error creating product");
      toast.error("Error creating product");
      setRefetchProduct(false);
      handleClose();
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter product name"
              value={product?.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder="Enter product price"
              value={product?.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              className="form-control"
              id="qty"
              name="qty"
              placeholder="Enter product stock"
              value={product?.qty}
              onChange={(e) => setProduct({ ...product, qty: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter product description"
              value={product?.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              placeholder="Enter product category"
              value={product?.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveProduct}>
            Tambah
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProductModal;
