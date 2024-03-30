import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "sonner";
import { deleteProduct } from "../../../services/product";
import { useFetchStore } from "../../../hooks/useFetchStore";

const DeleteProductModal = ({ show, handleClose, data }) => {
  const { setRefetchProduct } = useFetchStore();
  const handleSaveProduct = async () => {
    try {
      if (data._id) {
        const deleteProductData = await deleteProduct(data?._id);
        toast.success("Product delete successfully!");
        setRefetchProduct(true);
      } else {
        toast.error("Unknown product");
        setRefetchProduct(false);
      }

      handleClose();
    } catch (error) {
      toast.error("Error delete product");
    }
  };

  console.log(data);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Apakah Kamu Yakin Ingin Menghapus Produk ? </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleSaveProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteProductModal;
