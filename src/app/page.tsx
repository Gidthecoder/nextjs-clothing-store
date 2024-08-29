import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <div className='py-[5px] px-[10px] lg:px-[40px]'>
        <select className="text-[15px] border border-black block ml-auto bg-white">
          <option>United States (USD $)</option>
          <option>EU (EUR $)</option>
          <option>United Kingdom (GBP $)</option>
        </select>
      </div>

      <div className="flex flex-row justify-between border-b border-black py-[10px] px-[10px] lg:px-[40px] items-center mt-[20px]">
        <Image src='/search-icon.png' alt='seach icon' width={25} height={25}/>
        <a className='text-[15px]'><b>CLOTHING STORE</b></a>
        <div className='flex flex-row gap-[20px]'>
          <Image src='/cart-icon.png' alt='cart icon' width={25} height={25}/>
          <Image src='/user-icon.png' alt='user icon' width={25} height={25}/>
        </div>
      </div>

      {/*filters and products */}
      <div className='flex flex-row  w-[100%] mt-[20px] lg:mt-[50px] px-[10px] lg:px-[40px]'>
        <nav className='hidden lg:block w-[20%] mr-auto py-[20px]'>
          <p className='flex flex-row justify-between items-center border-b border-b-black text-[15px] py-[10px]'>
            <span>Category</span>
            <Image src='/sort-icon-2.png' alt='user icon' width={30} height={30}/>
          </p>
          <p className='flex flex-row justify-between items-center border-b border-b-black text-[15px] py-[10px]'>
            <span>Color</span>
            <Image src='/sort-icon-2.png' alt='user icon' width={30} height={30}/>
          </p>
          <p className='flex flex-row justify-between items-center border-b border-b-black text-[15px] py-[10px]'>
            <span>Size</span>
            <Image src='/sort-icon-2.png' alt='user icon' width={30} height={30}/>
          </p>
          <p className='flex flex-row justify-between items-center border-b border-b-black text-[15px] py-[10px]'>
            <span>Price</span>
            <Image src='/sort-icon-2.png' alt='user icon' width={30} height={30}/>
          </p>
        </nav>

        <section className='w-[100%] lg:w-[77%]'>
          <div className='flex flex-row justify-between items-center mb-[20px]'>
            <p className='hidden lg:block text-[15px]'>9 products</p>
            <p className='lg:hidden border border-black text-[15px] p-[10px] px-[40px]'>Filter</p>
            <select className=" text-[15px] border border-black p-[10px] bg-white">
              <option>Sort</option>
              <option>Ascending Order</option>
              <option>Descending Order</option>
              <option>Low to High</option>
              <option>Best Selling</option>
              <option>Availability</option>
            </select>
          </div>
          <p className='lg:hidden mb-[10px]'>9 products</p>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-[10px]'>
            <div className='text-center '>
              {/*<div className="relative w-[200px] h-[200px] border-2 border-red-400 " ><Image src="/pics.jpg"  alt="Description of the image" layout="fill" objectFit="fill" /></div>*/}
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 1</p>
              <p className='text-[14px]'>$100</p>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>
            
            <div className='text-center'>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>

            <div className='text-center'>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px]'>Product 2</p>
              <p className='text-[14px]'>$120</p>
            </div>
          </div>

        </section>
      </div>

      <div className="fixed top-[70%] right-[20px] p-[10px] bg-red-300 border border-black rounded-full">
        <Image src='/message-icon.png' alt='user icon' width={50} height={50}/>
      </div>

      <footer className='bg-black text-white text-center p-[10px]'>
        
        <p>&copy; 2024. Clothing store</p>
      </footer>
    </main>
  );
}
