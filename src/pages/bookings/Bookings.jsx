import { useState } from "react";
import { NavBar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../style";
import axios from "axios";
import { Footer } from "../../components";

const Bookings = () => {
  // Form state and validation
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    collectionAddress: "",
    description: "",
    collectionDate: "",
    deliveryAddress: "",
    deliveryDate: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    collectionAddress: false,
    description: false,
    collectionDate: false,
    deliveryAddress: false,
    deliveryDate: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWaitMessage, setShowWaitMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: value.length === 0,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setError((prev) => ({
      ...prev,
      [name]: value.length === 0,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: formInputs.name.length === 0,
      email: formInputs.email.length === 0,
      collectionAddress: formInputs.collectionAddress.length === 0,
      description: formInputs.description.length === 0,
      collectionDate: formInputs.collectionDate.length === 0,
      deliveryAddress: formInputs.deliveryAddress.length === 0,
      deliveryDate: formInputs.deliveryDate.length === 0,
    };

    setError(newErrors);

    const isValid = !Object.values(newErrors).some((err) => err);

    if (isValid) {
      setShowWaitMessage(true);

      // EmailJS service details
      const serviceId = "service_a0bz6at";
      const templateId = "template_n6xihdi";
      const publicKey = "L48R5RZfRqil3HOqk";

      // Template parameters
      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: formInputs.name,
          from_email: formInputs.email,
          collection_address: formInputs.collectionAddress,
          description: formInputs.description,
          collection_date: formInputs.collectionDate,
          delivery_address: formInputs.deliveryAddress,
          delivery_date: formInputs.deliveryDate,
        },
      };

      try {
        const res = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        console.log(res.data);
        setIsSubmitted(true);
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        setShowWaitMessage(false);
        setFormInputs({
          name: "",
          email: "",
          collectionAddress: "",
          description: "",
          collectionDate: "",
          deliveryAddress: "",
          deliveryDate: "",
        });
        setIsSubmitted(false);
      }, 6000);
    } else {
      setIsSubmitted(false);
    }
  };

  const isFormValid = !Object.values(error).some((err) => err);
  return (
    <>
      <NavBar />
      <section className={`pt-[0rem] ${styles.paddingX}`}>
        <motion.p
          initial={{ y: "-10vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="pt-[6rem] "
        >
          Welcome to
        </motion.p>

        <motion.p
          initial={{ y: "3vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className=" text-2xl font-semibold text-[lime] "
        >
          Bookings
        </motion.p>

        <section className="w-full mt-[1rem] flex justify-center flex-col">
          <p className="mb-2 font-thin text-slate-500">
            Fields marked with an{" "}
            <span className="text-red-500 font-bold">*</span> are required
          </p>

          <form className=" flex flex-col gap-1" onSubmit={handleSubmit}>
            <label className="font-bold" htmlFor="name">
              Name <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
              placeholder="e.g: Lowkey Dev"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formInputs.name}
            />
            {error.name && (
              <p className="flex text-xs text-red-500">
                This is a required field
              </p>
            )}
            <label className="font-bold" htmlFor="email">
              Email <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
              placeholder="e.g: example@example.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formInputs.email}
            />
            {error.email && (
              <p className="flex text-xs text-red-500">
                This is a required field
              </p>
            )}
            <label className="font-bold" htmlFor="collectionAddress">
              Collection Address{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              id="collectionAddress"
              name="collectionAddress"
              className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
              placeholder="e.g: 123 Main St"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formInputs.collectionAddress}
            />
            {error.collectionAddress && (
              <p className="flex text-xs text-red-500">
                This is a required field
              </p>
            )}
            <label className="font-bold" htmlFor="collectionDate">
              Collection Date <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="date"
              id="collectionDate"
              name="collectionDate"
              className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
              placeholder="Date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formInputs.collectionDate}
            />
            {error.collectionDate && (
              <p className="flex text-xs text-red-500">
                This is a required field
              </p>
            )}
            <label className="font-bold" htmlFor="deliveryAddress">
              Delivery Address <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
              className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
              placeholder="e.g: 456 Elm St"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formInputs.deliveryAddress}
            />
            {error.deliveryAddress && (
              <p className="flex text-xs text-red-500">
                This is a required field
              </p>
            )}
            <label className="font-bold" htmlFor="deliveryDate">
              Delivery Date <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
              placeholder="Date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formInputs.deliveryDate}
            />
            {error.deliveryDate && (
              <p className="flex text-xs text-red-500">
                This is a required field
              </p>
            )}
            <label className="font-bold" htmlFor="description">
              Description of Delivery{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full rounded-2xl focus:border-[lime] h-[140px] outline-none border-[1px] p-2 border-slate-500 mt-1"
              placeholder="e.g: Your message here"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formInputs.description}
            />
            {error.description && (
              <p className="  flex text-xs text-red-500">
                This is a required field
              </p>
            )}
            {showWaitMessage && (
              <p className="text-[12px] font-thin">Please wait...</p>
            )}{" "}
            <button
              type="submit"
              className={`mt-4 mb-6 p-2 w-[100px] sm:h-[60px] text-white rounded-2xl ${
                isFormValid ? "bg-[lime]" : "bg-slate-300 "
              }   `}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Bookings;
