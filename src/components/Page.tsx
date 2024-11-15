import { DataProps, PageProps } from "../utils/types";

interface PageComponentProps extends DataProps, PageProps {}

export default function Page({ data, info }: PageComponentProps) {
  return (
    <main className="py-24 sm:py-32 min-h-[95vh]">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3 flex-grow">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
            {info.title}
          </h2>
          <p className="mt-6 text-lg/8">{info.description}</p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {data.map((datum) => (
            <li key={datum.name}>
              <div
                className={`flex items-center gap-x-6 ${
                  datum.url ? "cursor-pointer" : ""
                }`}
                onClick={() => datum.url && window.open(datum.url, "_blank")}
              >
                <img
                  alt=""
                  src={datum.imageUrl}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base/9 hover:text-viaOrange font-semibold tracking-tight">
                    {datum.name}
                  </h3>
                  <p className="text-sm/6 font-semibold">{datum.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
