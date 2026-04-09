const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="glass-footer mx-4 mb-4 rounded-2xl px-4 py-5 text-center text-slate-600 md:mx-auto md:mb-6 md:max-w-6xl">
      <p className="text-sm font-medium text-slate-700">
        © {currentYear} R-Mobiles. All rights reserved.
      </p>
      <p className="mt-1 text-sm">
        Created by{" "}
        <a
          href="https://frzio.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-600 underline-offset-2 hover:text-indigo-700 hover:underline"
        >
          F R Esa
        </a>
      </p>
    </footer>
  );
};

export default Footer;
