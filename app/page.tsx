import Card from "@/components/card";
import OrderItem from "@/components/order-item";
import Platform from "@/components/platform";
import ProfileCard from "@/components/profile-card";
import { ArrowDown2, BoxTick, Calendar, Coin1,  I3DRotate, Notification, SearchNormal1, ShoppingCart } from "iconsax-react";

export default function Home() {
  return (
    <div className="flex-1 h-full overflow-hidden flex flex-col bg-[#FAFAFA] dark:bg-[#171717]  transition-all">
      <header className="text-dark dark:text-white flex items-center px-5 py-[18px] gap-4 border-b border-b-[#E5EAEF] dark:border-b-[#737373] transition-all">
        <span className="text-xl font-semibold">Dashboard</span>

        <div className="px-4 py-3 rounded-full border border-neutral-400 flex gap-1 items-center flex-1 max-w-80 ml-auto">
          <SearchNormal1 size="18" color="#78828A"/>
          <input type="text" placeholder="Search..." className="flex-1 focus:outline-none bg-transparent"/>
        </div>

        <span className="flex items-center gap-1.5 px-4 font-medium text-sm">
          <span className="text-black dark:text-white"><Calendar size="20"/></span>
          November 15, 2023
        </span>

        <span className="h-10 w-10 text-[#0D062D] dark:text-gray-200 rounded-full border border-neutral-400 dark:border-[#737373] grid place-content-center">
          <Notification size="20" variant="Outline"/>
        </span>

        <ProfileCard />
      </header>
      <main className="p-5 flex-1 overflow-y-scroll no-scrollbar">
        <div className="grid grid-cols-12 gap-4">
          <section className="section p-4 col-span-7">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold dark:text-white transition-all">Sales Trends</span>
              <div className="flex items-center gap-1">
                <label htmlFor="sorting" className="font-medium text-sm dark:text-white transition-all">Sort by:</label>
                <span className="flex items-center gap-1 border border-[#E1DFDF] px-3 py-1.5 rounded-full">
                  <select name="sorting" id="sorting" className="text-sm dark:text-white transition-all appearance-none focus:outline-none bg-transparent">
                    <option value="daily">Daily</option>
                    <option value="weekly" selected>Weekly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                  <span className="text-black dark:text-white"><ArrowDown2 size="20" variant="Outline"/></span>
                </span>
              </div>
            </div>

            <div className="flex text-neutral-600 dark:text-slate-300">
              <ul className="w-[74px] flex flex-col justify-between text-sm font-semibold">
                <li>50.000</li>
                <li>40.000</li>
                <li>30.000</li>
                <li>20.000</li>
                <li>10.000</li>
                <li>5.000</li>
                <li className="pl-3">0</li>
              </ul>
              <div className="flex-1 relative">
                <div className="h-full w-full absolute top-0 left-0 flex flex-col justify-between">
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                  <div className="chart-lines"/>
                </div>
                <div className="flex justify-between w-full items-end pt-10">
                  <div className="bar-item h-16"/>
                  <div className="bar-item h-28"/>
                  <div className="bar-item h-10"/>
                  <div className="bar-item h-40"/>
                  <div className="bar-item h-20"/>
                  <div className="bar-item h-52 gradient-bg"/>
                  <div className="bar-item h-20"/>
                  <div className="bar-item h-32"/>
                  <div className="bar-item h-44"/>
                  <div className="bar-item h-12"/>
                  <div className="bar-item h-40 "/>
                  <div className="bar-item h-36"/>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[74px]"/>
              <div className="flex justify-between text-neutral-600 dark:text-slate-300 w-full text-sm font-semibold py-2 text-center">
                  <span className="block text-center w-[30px]">Jan</span>
                  <span className="block text-center w-[30px]">Feb</span>
                  <span className="block text-center w-[30px]">Mar</span>
                  <span className="block text-center w-[30px]">Apr</span>
                  <span className="block text-center w-[30px]">Mei</span>
                  <span className="block text-center w-[30px]">Jun</span>
                  <span className="block text-center w-[30px]">Jul</span>
                  <span className="block text-center w-[30px]">Aug</span>
                  <span className="block text-center w-[30px]">Sep</span>
                  <span className="block text-center w-[30px]">Okt</span>
                  <span className="block text-center w-[30px]">Nov</span>
                  <span className="block text-center w-[30px]">Des</span>
                </div>
            </div>
          </section>
          <section className="col-span-5 grid grid-cols-2 gap-4">
            <Card
              Icon={BoxTick}
              chart="/charts/total-income.svg"
              title="Total Income"
              isNegative={false}
              percent="23,5"
              value={'350'}
            />
            <Card
              Icon={I3DRotate}
              chart="/charts/total-refund.svg"
              title="Total Refund"
              isNegative={true}
              percent="23,5"
              value={'270'}
            />
            <Card
              Icon={ShoppingCart}
              chart="/charts/average-sales.svg"
              title="Average Sales"
              isNegative={true}
              percent="23,5"
              value={'1567'}
            />
            <Card
              Icon={Coin1}
              chart="/charts/total-income.svg"
              title="Total Income"
              isNegative={false}
              percent="23,5"
              value={'$350.000'}
            />
          </section>
        </div>
        <div className="grid grid-cols-12 gap-4 pt-4">
          <section className="section p-4 col-span-7">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg text-[#26282C] dark:text-white transition-all">Last Orders</span>
              <span className="text-[#34CAA5] font-medium hover:underline cursor-pointer">See All</span>
            </div>

            <div>
              <table className="w-full">
                <thead>
                  <tr className="text-[#9CA4AB] font-medium text-left">
                    <th className="pb-5">Name</th>
                    <th className="pb-5">Date</th>
                    <th className="pb-5">Amount</th>
                    <th className="pb-5">Status</th>
                    <th className="pb-5">Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  <OrderItem 
                    image="/img1.jpg"
                    name="Marcus Bergson"
                    date="Nov 15, 2023"
                    amount={80000}
                    status="Paid"
                  />
                  <OrderItem 
                    image="/img2.jpg"
                    name="Jaydon Vaccaro"
                    date="Nov 15, 2023"
                    amount={150000}
                    status="Refund"
                  />
                  <OrderItem 
                    image="/img3.jpg"
                    name="Corey Schleifer"
                    date="Nov 14, 2023"
                    amount={87000}
                    status="Paid"
                  />
                  <OrderItem 
                    image="/img4.jpg"
                    name="Cooper Press"
                    date="Nov 14, 2023"
                    amount={100000}
                    status="Refund"
                  />
                  <OrderItem 
                    image="/img5.jpg"
                    name="Phillip Lubin"
                    date="Nov 13, 2023"
                    amount={78000}
                    status="Paid"
                  />
                </tbody>
              </table>
            </div>
          </section>
          <section className="section p-4 col-span-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg dark:text-white transition-all">Top Platform</span>
              <span className="text-[#34CAA5] font-medium hover:underline cursor-pointer">See All</span>
            </div>

            <div className="space-y-5">
              <Platform 
                color="bg-[#6160DC]" 
                width="w-1/2"
                name="Book Bazaar"
                amount="2,500,000" 
                percent="15"
              />
              <Platform 
                color="bg-[#54C5EB]" 
                width="w-1/3"
                name="Artisan Aisle"
                amount="1,800,000" 
                percent="10"
              />
              <Platform 
                color="bg-[#FFB74A]" 
                width="w-1/4"
                name="Toy Troop"
                amount="1,200,000" 
                percent="8"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
