'use client';

import Image from 'next/image'

import {useState} from 'react';

export default function Home() {
  let [openSections, setOpenSections] = useState({LEAGUE: false, TEAMS: false, COLORS: false, SIZES: false, PRICES: false});
  let [filterDisplay, setFilterDisplay] = useState(false);
  let [cartDisplay, setCartDisplay] = useState(false);
  let [chatDisplayed, setChatDisplayed] = useState(false);

  let data = [
    {league: 'NBA', team: 'Boston Celtics', color: 'green', size: 'XL', price: '$100'},
    {league: 'NBA', team: 'Lakers', color: 'Purple', size: 'XL', price: '$100'},
    {league: 'Premier League', team: 'Chelsea', color: 'blue', size: 'X', price: '$100'},
    {league: 'Premier League', team: 'Manchester United', color: 'red', size: 'XLL', price: '$100'},

  ];
  let nav = ['LEAGUE', 'TEAMS', 'COLORS', 'SIZES', 'PRICES'];
  let innerNav = [
    {name: 'LEAGUE', data: ['NBA', 'Premier League']},
    {name: 'TEAMS', data: ['Boston Celtics', 'Lakers', 'Chelsea', 'Manchester United']},
    {name: 'COLORS', data: ['green', 'purple', 'blue', 'red']},
    {name: 'SIZES', data: ['XL', 'XXL']},
    {name: 'PRICES', data: ['$100', '$200']},
  ]

  let handleNavClick = (arg:string) => {
    
    setOpenSections((prev) => ({
      ...prev,
      [arg]: !prev[arg as keyof typeof prev],
    }));
  }

  let handleFilterDisplay = () => {
    setFilterDisplay(!filterDisplay)
  }
  return (
    <main>
      <div className='py-[5px] px-[10px] lg:px-[40px] border-b-2 border-b-[rgb(240,240,240)]'>
        <select className="text-[13px]  block ml-auto bg-white outline-none">
          <option>United States (USD $)</option>
          <option>EU (EUR $)</option>
          <option>United Kingdom (GBP $)</option>
        </select>
      </div>

      {/*Navigation*/}
      <div className="flex flex-row justify-between py-[10px] px-[10px] lg:px-[40px] items-center mt-[20px]">
        <Image src='/search-icon.png' alt='seach icon' width={25} height={25}/>
        <a className='text-[16px]  lg:text-[20px]'><b>JERSEY STORE</b></a>
        <div className='flex flex-row gap-[20px]'>
          <Image src='/cart-icon.png' alt='cart icon' width={25} height={25} onClick={() => { setCartDisplay(true) }} />
          <Image src='/user-icon.png' alt='user icon' width={25} height={25}/>
        </div>
      </div>

      {/*Cart UI */}
      <div className={`${cartDisplay? 'block fixed z-[2] bg-[rgba(225,225,225,0.5)] w-[100vw] h-[100vh] top-0': 'none'}` } onClick={() => {setCartDisplay(false)} }>
      </div>
      <div className={`${cartDisplay? 'block fixed bg-black p-[15px] top-0 right-0 w-[85%] lg:w-[30%] h-[100vh] overflow-y-scroll z-[3]': 'hidden'} w-[20%]`}>
        <p className='pt-[10px] mb-[20px] text-white text-[30px] flex flex-row'>
          <span>Cart</span>
          <span className='ml-auto cursor-pointer' onClick={() => {setCartDisplay(false)}}>x</span>
        </p>
        <p className='text-[18px] lg:text-[13px] text-[rgb(245,245,245)] py-[10px]'>Your cart is currently empty.</p>
      </div>

      {/*product filter*/}
      <div className={`${filterDisplay? 'block fixed z-[2] bg-[rgba(225,225,225,0.5)] w-[100vw] h-[100vh] top-0': 'none'}` } onClick={() => {setFilterDisplay(false)}}></div>
      <div className='flex flex-row  w-[100%] mt-[20px] lg:mt-[50px] px-[10px] lg:px-[40px]'>
        <nav className={` ${filterDisplay? 'block fixed bg-black p-[15px] top-0 left-0 w-[85%] h-[100vh] overflow-y-scroll z-[3]': 'hidden'} lg:block w-[20%] mr-auto`}>
          <p className='lg:hidden  pt-[10px] mb-[20px] text-white text-[30px] flex flex-row'>
            <span>Filter</span>
            <span className='ml-auto cursor-pointer' onClick={handleFilterDisplay}>x</span>
          </p>
          {/* Nav links*/}
          {
            nav.map((item, index) => (
              <div key={index} className='border-b-[0.5px] border-b-[rgb(100,100,100)] '>
                <p key={index} onClick={ () => handleNavClick(item) } className='cursor-pointer flex flex-row justify-between items-center  text-[18px] lg:text-[13px] text-[rgb(245,245,245)] lg:text-black py-[10px]'>
                  <span>{item}</span>
                  <Image src='/sort-icon-2.png' alt='user icon' width={30} height={30}/>
                </p>
                {/*options */}
                {
                  innerNav.map( (innerItem, innerIndex) => (
                      (openSections[innerItem.name as keyof typeof openSections] && item == innerItem.name) && 
                      <div key={innerIndex} className=''>
                          {
                            innerItem.data.map((val, ind) => (
                              <p className='mb-[7px] flex flex-row items-center cursor-pointer hover:underline' key={ind}>
                                <input type='checkbox'/>
                                <label className='ml-[10px] text-[14px] text-[rgb(245,245,245)] lg:text-black cursor-pointer'>{val}</label>
                              </p>
                            ))
                          }
                      </div>
                    )
                  )
                }
              </div>
            ))
          }

          {/*search button for mobile filtet */}
          <p className='lg:hidden mt-[40px]'>
            <b className='text-black bg-white p-[10px] rounded text-[18px]'>Search</b>
          </p>
        </nav>

        {/*SHows filter and sort */}
        <section className='w-[100%] lg:w-[77%]'>
          <div className='flex flex-row justify-between items-center mb-[20px] mt-[15px]'>
            <p className='hidden lg:block text-[15px]'>9 products</p>
            <p className={`lg:hidden border border-black py-[5px] px-[20px]`} onClick={() => {setFilterDisplay(true)}}>Filter</p>
            <div className='border border-black p-[5px]'>
              <select className=" text-[15px] bg-white outline-none">
                <option>Sort</option>
                <option>Ascending Order</option>
                <option>Descending Order</option>
                <option>Low to High</option>
                <option>Best Selling</option>
                <option>Availability</option>
              </select>
            </div>
          </div>
          {/*shows total poduct in mobile */}
          <p className='lg:hidden mb-[20px]'>9 products</p>
          
          {/*Products in a grid view */}
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-[15px] mb-[20px]'>
            <div className='text-center '>
              {/*<div className="relative w-[200px] h-[200px] border-2 border-red-400 " ><Image src="/pics.jpg"  alt="Description of the image" layout="fill" objectFit="fill" /></div>*/}
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>ANTHONY DAVIS LAKERS AUTHENTIC JERSEY</p>
              <b className='text-[13px]'>$100</b>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>LEBRON JAMES CHRISMAS JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>
            
            <div className='text-center'>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>KYRIE IRVING CELTICS JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>STEPHEN CURRY WARRIORS JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>

            <div className='text-center'>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>KAWHI LEONARD SPURS JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>JOEL EMBIID PHILADEPHIA JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>NIKOLA JOKIC SERBIA JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>JAYSON TATUM CELTICS JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>

            <div className='text-center '>
              <p className=' h-[200px] lg:h-[300px] bg-black '>pics</p>
              <p className='text-[15px] pt-[5px]'>JAMES HARDEN ROCKETS JERSEY</p>
              <b className='text-[13px]'>$120</b>
            </div>
          </div>

        </section>
      </div>

      {/*Chatbot*/}
      
      <div className=' fixed block bottom-0 lg:bottom-[15%] lg:right-[10px]'>
          <div className={`${chatDisplayed? 'block': 'hidden'} flex flex-col bg-blue-900 w-[calc(100vw)] lg:w-[350px] h-[80vh] lg:h-[60vh] p-[5px] rounded-xl`}>
            <div className='p-[10px] text-white'>
              <p className='flex flex-row text-[14px] mb-[10px]'><b className='mr-auto'>Clothing Store Chat</b> <b onClick={()=>{setChatDisplayed(false)}}>X</b></p>
              <p className='text-[13px] mb-[10px]'>Questions that can't be answered by the chatbot will settled by our customer care</p>
            </div>
            { /*chats*/ }
            <div className='bg-white pt-[20px] rounded-xl grow'>
              {/*chat container*/}
              <div>
                {/*Chat 1*/}
                <div className='bg-[rgb(245,225,245)] m-[10px] mb-[20px] w-[90%] rounded-xl'>
                  <div className='flex flex-row items-center px-[10px] py-[5px] border-b-2 border-b-white'>
                    <p className=' bg-black w-[20px] h-[20px] rounded-full mr-[10px]'>.</p>
                    <p className='text-black text-[12px] '>Bot</p>
                  </div>
                  <div className='text-[12px] px-[10px] py-[5px]'>
                    <p>Who do you want to chat with.</p>
                    <div className='flex flex-row my-[10px] text-center'>
                      <p className='p-[5px] bg-[rgb(245,205,245)] grow mr-[5px]'>Agent</p>
                      <p className='p-[5px] bg-[rgb(245,205,245)] grow'>Chatbot</p>
                    </div>
                  </div>
                </div>
                {/*Chatbot activated */}
                <div className='text-center text-[12px] mb-[20px]'>You're now talking to the chat bot.</div>
              
                {/*Chat with the user*/}
                <div className='bg-[rgb(205,245,245)] m-[10px] w-[90%] ml-[auto] rounded-xl'>
                  <div className='flex flex-row items-center px-[10px] py-[5px] border-b-2 border-b-white'>
                    <p className=' bg-black w-[20px] h-[20px] rounded-full mr-[10px]'>.</p>
                    <p className='text-black text-[12px] '>User</p>
                  </div>
                  <div className='text-[12px] px-[10px] py-[5px] '>
                    <p>Do you have any white Lakers jersey?</p>
                  </div>
                </div>
              </div>
              {/* Form */}
              <div className='flex flex-row mx-[20px] mt-[20px] '>
                <input className='bg-[rgb(245,245,245)] grow outline-none text-[14px] py-[5px] px-[15px]' type='search' placeholder='Type a message'/>
                <span className='text-[14px] text-white bg-black py-[5px] px-[15px]'>Send</span>
              </div>
            </div>
          </div>
          {/*Chat Icon for desktop*/}
          <div className={`hidden lg:block ${chatDisplayed? 'bg-red-300': 'bg-blue-300'} w-[50px] h-[50px] ml-[auto] mt-[10px] p-[10px] border border-black rounded-full cursor-pointer`} onClick={() => { setChatDisplayed(!chatDisplayed) } }>
            <Image src='/message-icon.png' alt='user icon' width={40} height={40}/>
          </div>
      </div>
      {/*chat icon for mobile */}
      <div className={`lg:hidden ${chatDisplayed? 'z-[-1]': 'z-[1]'} fixed bottom-[15%] right-[10px] bg-blue-300 w-[50px] h-[50px] ml-[auto] mt-[10px] p-[10px] border border-black rounded-full cursor-pointer`} onClick={() => { setChatDisplayed(!chatDisplayed) } }>
        <Image src='/message-icon.png' alt='user icon' width={40} height={40}/>
      </div>

      {/*Footer*/}
      <footer className='bg-black text-[13px] lg:text-[15px] text-center p-[10px]'>
        <div className='inline-block border border-[rgb(240,240,240)] p-[10px] m-auto my-[10px] nlg:my-[20px]'>
          <select className="bg-black text-white outline-none cursor-pointer">
            <option>United States (USD $)</option>
            <option>EU (EUR $)</option>
            <option>United Kingdom (GBP $)</option>
          </select>
        </div>
        <p className='text-white'>&copy; 2024. Jersey store</p>
      </footer>
    </main>
  );
}
