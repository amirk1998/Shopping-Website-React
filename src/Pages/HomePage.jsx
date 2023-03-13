import Layout from '../Layout/Layout';
import * as data from '../../data/productsData';

const HomePage = () => {
  const addProductHandler = (product) => {
    console.log(product);
  };

  return (
    <Layout>
      <section className='grid grid-cols-3 items-center gap-3 mt-2 mx-8'>
        {data.products.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col items-center border-2 border-slate-300 rounded-lg px-4 py-2 mt-2'
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-48 rounded-md'
                />
              </div>
              <div className='flex items-center justify-between w-full my-2'>
                <p>{item.name}</p>
                <p>{item.price} $</p>
              </div>
              <button
                onClick={() => addProductHandler(item)}
                className='text-purple-700  hover:text-white hover:bg-purple-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mt-2'
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default HomePage;
