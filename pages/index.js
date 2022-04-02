import "../styles.css";

const NavItem = (props) => (
  <a
    className=" text-sm font-bold text-gray-800 px-1 py-2 hover:bg-gray-300 rounded trasition-colors duration-300 "
    href="true"
  >
    {props.text}
  </a>
);

const Button = (props) => (
  <button
    type={props.type}
    className="bg-red-500 hover:bg-red-600 transition-colors duration-300 text-sm text-white p-2 rounded border borde-red-500"
  >
    {props.children}
  </button>
);

export default () => (
  <div className="container mx-auto">
    <nav className="flex justify-between px-3 py-2">
      <div className="flex">
        <div className=" inline-block  h-6 w-6 bg-gray-400 rounded-full"></div>
        <span className="pl-2">Notion</span>
      </div>
      <div className="hidden md:block">
        <div className="space-x-2 ">
          <NavItem href="/product" text="Product" />
          <NavItem href="/download" text="Download" />
          <NavItem href="/remote-work" text="Remote Work" />
          <NavItem href="/remote-work" text="Remote work" />
          <NavItem href="/pricing" text="Pricing" />
          <NavItem href="/jobs" text="Jobs" />
          <NavItem href="/log-in" text="Log in" />
          <NavItem href="/sign-up" text="Sign up" />
        </div>
      </div>
    </nav>
    <div className=" text-center md:text-left md:flex max-w-3xl mx-auto mt-24 space-x-3 ">
      <h1 className="font-bold text-6xl leading-tight ">
        All-in-one workspace
      </h1>
      <div className="space-y-3">
        <p className="text-xl ">
          Write, plan, collaborate and get organized. Notion is all you need --
          in one tool.
        </p>
        <div className="md:hidden">
          <Button type="button">
            <div className="flex px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Download form App Store
            </div>
          </Button>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("TODO submit form");
          }}
          className="hidden md:block "
        >
          <input
            type="text"
            placeholder="Enter your email..."
            className="bg-white rounded border border-gray-300 p-2 mr-2"
          />
          <Button type="submit">Get started</Button>
        </form>
        <p className="text-gray-600 ">
          For teams & individuals -- web, mobile, Mac, Windows
        </p>
      </div>
    </div>
  </div>
);
