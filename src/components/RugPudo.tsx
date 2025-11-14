import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Reveal from "@/components/Reveal";

function RugPudo() {
  return (
    <Reveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Text (left) */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The RUG PUDO Network: Postal Services, Closer to You.
          </h2>
          <p className="mt-3 text-slate-600">
            Soon, you can pick up and drop off parcels at trusted local shops
            and businesses in your neighborhood.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="bg-somali-blue text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <ArrowRightIcon className="h-5 w-5" />
              Discover the Network
            </a>
          </div>
        </div>

        {/* Image (right) */}
        <div className="md:order-last">
          <img
            src="/images/pudo-point.png"
            alt="RUG PUDO point"
            className="h-auto w-full rounded-lg shadow"
          />
        </div>
      </div>
    </Reveal>
  );
}

export default RugPudo;
export { RugPudo };
