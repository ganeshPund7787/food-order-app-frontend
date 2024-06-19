const Footer = () => {
  return (
    <div className="bg-red-600 py-10 my-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          YouChoice.com
        </span>
        <span className="text-white font-bold tracking-tight gap-4">
          <span>Privacy Policy</span>
          <span>Terms for service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
