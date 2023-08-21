"use client";
const Page = () => {
  return (
    <div>
      <section className="bg-slate-200 my-10 p-2 rounded">
        <div className=" w-[50%] m-auto bg-slate-100 p-9  rounded">
          <h1 className="text-2xl text-center mb-7">Contact Us</h1>

          <form onSubmit={(e) => e.preventDefault()} className="w-[100%]">
            <label for="name">Name:</label>

            <input
              className="px-2"
              type="text"
              id="name"
              name="name"
              required
            />
            <br />
            <br />

            <label for="email">Email:</label>
            <input
              className="px-2"
              type="email"
              id="email"
              name="email"
              required
            />
            <br />
            <br />

            <label for="website">Website:</label>
            <input className="px-2" type="url" id="website" name="website" />
            <br />
            <br />

            <label for="message">Message:</label>
            <br />
            <textarea
              className="px-2"
              id="message"
              name="message"
              rows="4"
              cols="50"
              required
            ></textarea>
            <br />
            <br />

            <input
              className="bg-green-300 p-2 w-[100%] hover:bg-green-500 duration-500"
              type="submit"
              value="Submit"
            />
          </form>
        </div>

        <h1 className="text-center my-9 text-3xl font-bold">
          যে কোন প্রয়োজনে আমাদের সাথে যোগাযোগের ঠিকানা -{">"}
        </h1>
        <div>
          <div className="text-center font-bold">
            <p className=" ">
              Ka-6/a, Navana Sylvania,
              <br /> Baridhara Road, Nadda,
              <br /> Gulshan-2, Dhaka-1212 <br /> Mobile: +880 1960-999918
              <br /> Email: support@ostad.app
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
