import { useState } from "react";

const metadata = {
  title: "用户管理",
  layout: "grid",
  columns: 2,
  fields: [
    {
      type: "text",
      label: "用户名",
      name: "username",
      placeholder: "请输入用户名",
      required: true,
    },
    {
      type: "email",
      label: "邮箱",
      name: "email",
      placeholder: "请输入邮箱地址",
      required: true,
    },
    {
      type: "password",
      label: "密码",
      name: "password",
      placeholder: "请输入密码",
      required: true,
    },
    {
      type: "button",
      label: "提交",
      action: "submit",
    },
  ],
};

function DynamicForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("表单数据：", formData);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">{metadata.title}</h1>
      <form className="grid grid-cols-1 gap-4">
        {metadata.fields.map((field, index) => {
          if (
            field.type === "text" ||
            field.type === "email" ||
            field.type === "password"
          ) {
            return (
              <div key={index}>
                <label className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              </div>
            );
          }
          if (field.type === "button") {
            return (
              <button
                key={index}
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleSubmit}
              >
                {field.label}
              </button>
            );
          }
          return null;
        })}
      </form>
    </div>
  );
}

export default DynamicForm;
