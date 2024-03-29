export default function Spinner() {
  return (
    <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-200 w-[3rem] h-[3rem] absolute top-1/2 left-1/3 animate-spin   dark:bg-slate-800 rounded-full border-3 flex justify-center items-center">
      <div className="bg-white dark:bg-slate-800 w-[2.5rem] h-[2.5rem] rounded-full"></div>
    </div>
  );
}
