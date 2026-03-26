const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© {currentYear} R-Mobiles. All rights reserved.</p>
      <p>
        Created by{" "}
        <a
          href="https://frzio.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          F R Esa
        </a>
      </p>
    </footer>
  );
};

export default Footer;
