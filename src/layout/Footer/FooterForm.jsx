import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const FooterForm = () => {
  const handleSubmit = (e) => {
    e.prevenDefault();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      note: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập thông tin")
        .min(1, "Tên cần ít nhất 1 chữ cái"),
      email: Yup.string()
        .required("Vui lòng nhập thông tin")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Sai định dạng Email"),
      phone: Yup.string()
        .required("Vui lòng nhập thông tin")
        .min(9, "Số điện thoại cần ít nhất 9 chữ số"),
      note: Yup.string().required("Vui lòng nhập thông tin"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      className="flex  flex-col gap-4 w-[100%] p-[30px] rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <input
        type="text"
        id="name"
        placeholder="Họ và Tên "
        className=" bg-[#919EAB14] m-10px rounded-lg"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name && (
        <p className="text-[red] p-[-2px] text-[13px]">{formik.errors.name}</p>
      )}
      <input
        type="email"
        id="email"
        placeholder="Email của bạn"
        className=" bg-[#919EAB14] m-10px rounded-lg"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && (
        <p className="text-[red]  p-[-2px] text-[13px]">
          {formik.errors.email}
        </p>
      )}
      <input
        type="number"
        id="phone"
        placeholder="Sô điện thoại"
        className=" bg-[#919EAB14] m-10px rounded-lg"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.errors.phone && (
        <p className="text-[red]  p-[-2px] text-[13px]">
          {formik.errors.phone}
        </p>
      )}
      <input
        type="text"
        placeholder="Ghi chú"
        id="note"
        className=" bg-[#919EAB14] m-10px ml-15px rounded-lg"
        value={formik.values.note}
        onChange={formik.handleChange}
      />
      {formik.errors.note && (
        <p className="text-[red]  p-[-2px] text-[13px]">{formik.errors.note}</p>
      )}
      <button
        className="inline bg-[#0DC5AE] text-white max-w-[172px]  p-30px rounded-lg"
        type="submit"
      >
        Gửi thông tin
      </button>
    </form>
  );
};

export default FooterForm;
