const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  min-h-screen">
      <div className="relative w-16 h-16 border-4 border-gray-800 rounded-full animate-spin">
        <div className="absolute inset-0 border-2 border-red-600 rounded-full"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-800 origin-bottom -translate-x-1/2"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-800 origin-bottom -translate-x-1/2 rotate-45"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-800 origin-bottom -translate-x-1/2 rotate-90"></div>

        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <p className="text-gray-700 font-medium">Tuning your bike...</p>
    </div>
  );
};

export default Loading;
