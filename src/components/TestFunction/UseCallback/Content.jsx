import React from "react";

//memo sử dụng toán tử === so sánh nếu có props thay đổi thì mới re-render lại component, tránh component bị re-render k cần thiết
function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <div style={{ padding: "15px 25px" }}>
      <h2>Content</h2>
      <button onClick={onIncrease}>Click me</button>
    </div>
  );
}

export default React.memo(Content);
