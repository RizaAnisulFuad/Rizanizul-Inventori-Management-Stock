import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AddProductModal from "./AddProductModal";
import UpdateProductModal from "./UpdateProductModal";
import DeleteProductModal from "./DeleteProductModal";
import Button from "react-bootstrap/Button";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { getAllProducts } from "../../../services/product";

import { useFetchStore } from "../../../hooks/useFetchStore";
const TableProduct = () => {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [productId, setProductId] = useState("");

  const { refetchProduct, setRefetchProduct } = useFetchStore();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await getAllProducts();
        setProducts(productResponse);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const refetchData = async () => {
      try {
        const productResponse = await getAllProducts();
        setProducts(productResponse);
        setRefetchProduct(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (refetchProduct) {
      refetchData();
    }
  }, [refetchProduct, setRefetchProduct]);

  console.log(products);
  return (
    <>
      <Container className="mx-auto mt-5">
        <div className="d-flex justify-content-end mb-2">
          <Button onClick={() => setAddShow(true)}>Tambah Produk</Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stok</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setProductId(product._id);
                      setEditShow(true);
                    }}
                  >
                    <MdEditSquare />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setProductId(product._id);
                      setDeleteShow(true);
                    }}
                  >
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <AddProductModal show={addShow} handleClose={() => setAddShow(false)} />
      <UpdateProductModal
        show={editShow}
        handleClose={() => setEditShow(false)}
        data={products.find((product) => product._id === productId)}
      />
      <DeleteProductModal
        show={deleteShow}
        handleClose={() => setDeleteShow(false)}
        data={products.find((product) => product._id === productId)}
      />
    </>
  );
};

export default TableProduct;
