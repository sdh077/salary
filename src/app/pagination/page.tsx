import Pagination from "./Pagination";


async function getData(p) {
    // const url = new URL(input.toString());
    // const page = url.searchParams.get('page') || '1';

    return Array.from({ length: 20 }, (_, index) => ({ id: index + Number(p.searchParams.page), name: `Item ${index + Number(p.searchParams.page)}` }));
}

export default async function Page(p)  {
  const data = await getData(p);
  return (
    <div>
      <Pagination data={data}/>
    </div>
  );
};

