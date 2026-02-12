import React, { use, useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = form;

    const newError = {
      name: "",
      email: "",
    };

    if (!name.trim()) {
      newError.name = "Tên không được bỏ trống";
    }

    if (!email.trim()) {
      newError.email = "Email không được bỏ trống";
    }

    setError(newError);

    if (!newError.name && !newError.email) {
      setData((data) => [...data, form]);
      setForm({ name: "", email: "" });
    }
  };

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
    // Phải thêm [] vì nếu ko có nó nó chỉ là e.target.name chứ ko phải thành name he email
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Tên..."
            name="name"
            onChange={handleChange}
            value={form.name}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <button>Đăng kí</button>
      </form>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <h2>{item.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default Login;
