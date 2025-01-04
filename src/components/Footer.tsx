export default function Footer() {
  return (
    <footer className="px-20 py-14">
      <div className="flex gap-1 items-center mb-8">
        <span className="text-2xl">Logo</span>
        <h3 className="text-2xl font-semibold uppercase">Chooper</h3>
      </div>

      <div className="flex items-start justify-between">
        <Menu />
        <Company />
        <Service />
        <Subscription />
      </div>

      <hr className="mt-12 mb-8" />

      <Legal />
    </footer>
  );
}

function Menu() {
  return (
    <div className="flex-1 flex flex-col gap-6 ">
      <h4 className="font-semibold uppercase">Menu</h4>
      <ul className="flex flex-col gap-4">
        <li className="text-[#555]">Home</li>
        <li className="text-[#555]">Product</li>
        <li className="text-[#555]">Pricing</li>
        <li className="text-[#555]">Resources</li>
      </ul>
    </div>
  );
}

function Company() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <h4 className="font-semibold uppercase">Company</h4>
      <ul className="flex flex-col gap-4">
        <li className="text-[#555]">About Us</li>
        <li className="text-[#555]">Help Center</li>
        <li className="text-[#555]">The Community</li>
        <li className="text-[#555]">Partner Program</li>
      </ul>
    </div>
  );
}

function Service() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <h4 className="font-semibold uppercase">Service</h4>
      <ul className="flex flex-col gap-4">
        <li className="text-[#555]">Link Shortner</li>
        <li className="text-[#555]">Microsite Builder</li>
        <li className="text-[#555]">Subscription</li>
      </ul>
    </div>
  );
}

function Subscription() {
  return (
    <div className="flex-[2] flex flex-col gap-8 items-start">
      <h4 className="font-semibold uppercase">Subscribe to newsletter</h4>
      <form
        action="#"
        className="border-2 px-2 py-1 rounded-lg w-full flex justify-between"
      >
        <input type="text" placeholder="youremail@gmail.com" className="grow" />
        <button className="bg-[#8039DF] text-[#f8fafc] px-4 py-1.5 rounded-md">
          Subscribe &rarr;
        </button>
      </form>

      <div className="flex gap-8">
        <p className="flex flex-col gap-2">
          <span className="uppercase font-semibold">Call us</span>
          <span className="text-[#555]">+234-8030919112</span>
        </p>

        <p className="flex flex-col gap-2">
          <span className="uppercase font-semibold">Email us</span>
          <span className="text-[#555]">hello@chopper.com</span>
        </p>
      </div>
    </div>
  );
}

function Legal() {
  return (
    <div className="flex justify-between items-center">
      <p>&copy; Copyright 2025, all rights reserved</p>
      <div className="flex justify-center gap-4">
        <a href="#">Terms of service</a>
        <a href="#">Privacy policy</a>
      </div>
    </div>
  );
}
