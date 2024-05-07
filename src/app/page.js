export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center m-auto bg-cyan-50">
      <div className=" flex flex-col justify-center items-center  w-20 h-20 ">
      <h1 className="">Create Account </h1>
      <form>
       <label className="text-red-300">Name</label>
       <input/>
       <label>email</label>
       <input/>
       <label>Password</label>
       <input/>
      </form>
      </div>
     
    </div>
  );
}
