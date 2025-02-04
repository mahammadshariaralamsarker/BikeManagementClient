const SectionHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="mx-auto max-lg text-center space-y-1 md:space-y-3 mb-4 md:mb-8">
      <div className="flex justify-center items-center gap-3">
        <span className="w-6 h-[1px] bg-gray-500 inline-block"></span>
        <h5 className="text-primary uppercase text-xs md:text-sm font-orbitron font-medium">
          {subTitle}
        </h5>
        <span className="w-6 h-[1px] bg-gray-500 inline-block"></span>
      </div>
      <h3 className="text-secondary uppercase text-xl md:text-3xl font-orbitron font-bold">
        {title}
      </h3>
    </div>
  );
};

export default SectionHeading;
