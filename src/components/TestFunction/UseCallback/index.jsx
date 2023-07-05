import React, { useCallback, useState } from "react";
import Content from "./Content";

//kiến thức reference types
// Ví dụ sử dụng memo cho component Content để không bị re-render không cần thiết khi người dùng click vào clickme -> re-render cả component cha và con
const UseCallback = () => {
  const [count, setCount] = useState(0);
  // Khi click thì component re-render và những function trong <Content /> cũng bị re-render=> k cần thiết. biện pháp bao memo quanh component Content
  // Môi khi tạo ra một hàm mới, sẽ lưu vào bộ nhớ rồi trả ra tham chiếu, mỗi lần tạo hàm mới sẽ có tham chiếu mới, tương tự với hàm handleIncrease, mỗi khi click thì sẽ re-render lại component từ đó sẽ tạo ra một phạm vi mới độc lập không liên quan đến phạm vi trước đáy=> dẫn đến việc khi chạy đến component Content, memo sẽ so sánh thấy props(tham chiếu) khác nhau, nên sẽ re-render lại component Content=> là điều k cần thiết ====>SỬ DỤNG USECALLBACK ĐỂ KHẮC PHỤC.....useCallback(): nhận 2 đối số là callback và depentdencies....callback chính là hàm handleIncrease
  const handleIncrease = useCallback(() => {
    setCount((precount) => precount + 1);
  }, []);

  return (
    <div>
      <div style={{ padding: "10px 30px" }}>
        <Content onIncrease={handleIncrease} />
        <h1>{count}</h1>
      </div>
    </div>
  );
};
export default UseCallback;
