import React, { useMemo, useRef, useState } from "react";

// useMemo: Tranh viec tinh toan logic k can thiet. ban chat useMemo sex caching gia tri return của function, mỗi lần component re-render nó sẽ kiểm tra giá trị truyển vào function nếu giá trị đó không thay đôi thì return giá trị đã cache trước đó và ngược lại nếu giá trị tham số truyển vào thay đổi....
const UseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  //(2)
  const nameRef = useRef();

  const handleSubmit = () => {
    //set cho mang mới, giải products cũ vào, thêm object(mỗi sản phẩm 1 object gồm name và price)
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price), // khi xử lý input gtri luôn là kiểu chuỗi, cần covert bằng parstInt, hoặc dùng dấu + (price: +price)
      },
    ]);
    //giải quyết bài toán khi submit thì clean giá trị và focus vào input sử dụng USEREF(1)
    setName("");
    setPrice("");
    //(3)
    nameRef.current.focus();

    //CÁCH LÀM VIỆC VỚI MẢNG
  };
  // Phần tính toán này sẽ được tính toán lại mỗi khi component thay đồi, ví dụ như nhập vào ô input thì component cũng sẽ render lại và chạy cả phần tính toán này... như vậy là k cần thiêt
  // Sử dụng useMemo() sẽ giải quyết được vấn đề, useMemo nhận vào 2 tham số là callback(trả ra kết quả  muốn memo: result) và dependenci(giống useEffect)
  // Thêm products vào dependenci để đảm bảo khi thay đổi, thêm sửa xóa products thì mới thực hiện tính toán lại
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tinh lai");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div style={{ padding: "10px 30px" }}>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UseMemo;
