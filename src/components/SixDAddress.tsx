import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Reveal from "@/components/Reveal";

function SixDAddress() {
  return (
    <Reveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <img
            src="/images/6d-address.png"
            alt="6D Address illustration"
            className="h-auto w-full rounded-lg shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Introducing 6D Address: Somalia's New Digital Address.
          </h2>
          <p className="mt-3 text-slate-600">
            A simple 6-digit code for every location. The foundation for reliable
            delivery across the nation.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="bg-somali-blue text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <ArrowRightIcon className="h-5 w-5" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default SixDAddress;
export { SixDAddress };
