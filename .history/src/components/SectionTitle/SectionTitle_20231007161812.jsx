const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-full my-8">
      <p className="text-orange-500 mb-2 uppercase font-serif">
        --- {subHeading} ---
      </p>
      <h3 className="text-4xl uppercase border-y-4 py-4 font-serif">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
