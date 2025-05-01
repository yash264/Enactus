
export default function Stats() {
  return (
    <section className="stats_box py-10 grid bg-enactusYellow rounded-[30px] place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto mt-6 px-4">
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">33+</h1>
        <p>COUNTRIES</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">1,064+</h1>
        <p>CAMPUS PROGRAMS</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">42,450+</h1>
        <p>STUDENT MEMBERS ANNUALLY</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">13.1+</h1>
        <p>MILLION LIVES IMPACTED</p>
      </div>
    </section>
  );
}