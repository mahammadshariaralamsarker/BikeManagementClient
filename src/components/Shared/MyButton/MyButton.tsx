const MyButton = ({ title }: { title: string }) => {
  return (
    <button className="w-full bg-primary hover:bg-primary/85 transition-all text-white py-3 rounded-md font-orbitron font-bold uppercase text-sm">
      {title}
    </button>
  );
};

export default MyButton;
