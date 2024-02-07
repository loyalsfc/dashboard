'use client'

import Card from "@/components/card";
import Bar from "@/components/charts/bars";
import { MonthlyBars, MonthlyLabels } from "@/components/charts/monthly";
import { WeeklyBars, WeeklyLabels } from "@/components/charts/weekly";
import { YearlyBars, YearlyLabels } from "@/components/charts/yearly";
import MobileMenu from "@/components/mobile-menu";
import NotificationBox from "@/components/notification/notification";
import OrderItem from "@/components/order-item";
import Platform from "@/components/platform";
import ProfileCard from "@/components/profile-card";
import { ArrowDown2, BoxTick, Calendar, Coin1,  I3DRotate, SearchNormal1, ShoppingCart } from "iconsax-react";
import { useState } from "react";

export default function Home() {
  const [selectedChart, setSelectedCharts] = useState<string>("monthly")
  return (
    <div className="flex-1 h-full overflow-hidden flex flex-col bg-[#FAFAFA] dark:bg-[#171717]  transition-all">
      <header className="text-dark dark:text-white flex items-center p-2 xs:p-4 sm:px-5 sm:py-[18px] gap-2.5 lg:gap-4 border-b border-b-[#E5EAEF] dark:border-b-[#737373] transition-all">
        <MobileMenu />
        <span className="sm:hidden mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5"/>
          </svg>
        </span>
        <span className="text-xl font-semibold mr-auto hidden sm:block">Dashboard</span>

        <div className="relative hidden tablet:flex gap-1 items-center min-[970px]:flex-1 max-w-64 desktop:max-w-[400px] transition-all rounded-full border border-neutral-400 p-3 min-[970px]:border-0 min-[970px]:p-0">
          <span className="min-[970px]:absolute left-2"><SearchNormal1 size="18" color="#78828A"/></span>
          <input type="text" placeholder="Search..." className="bg-white flex-1 rounded-full focus:outline-none bg-transparent hidden min-[970px]:block border border-neutral-400 h-full pr-3 min-[970px]:pr-4 py-3 pl-8 focus:border-primary-green"/>
        </div>

        <span className="hidden tablet:flex items-center gap-1.5 px-4 font-medium text-sm">
          <span className="text-black dark:text-white"><Calendar size="20"/></span>
          November 15, 2023
        </span>

        <NotificationBox />

        <ProfileCard />
      </header>
      <main className="p-2 xs:p-4 sm:p-5 flex-1 overflow-y-scroll no-scrollbar max-w-[1500px] mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <section className="section p-4 col-span-12 desktop:col-span-7">
            <div className="flex justify-between items-center mb-4 flex-col min-[330px]:flex-row">
              <span className="text-lg font-semibold dark:text-white transition-all">Sales Trends</span>
              <div className="flex items-center gap-1">
                <label htmlFor="sorting" className="font-medium text-sm dark:text-white transition-all">Sort by:</label>
                <span className="flex items-center gap-1 border border-[#E1DFDF] px-3 py-1.5 rounded-full">
                  <select 
                    value={selectedChart} 
                    onChange={(e)=>setSelectedCharts(e.target.value)}
                    name="sorting" 
                    id="sorting" 
                    className="text-sm dark:text-white transition-all appearance-none focus:outline-none bg-transparent"
                  >
                    <option className="dark:bg-dark" value="daily">Daily</option>
                    <option className="dark:bg-dark" value="monthly">Monthly</option>
                    <option className="dark:bg-dark" value="yearly">Yearly</option>
                  </select>
                  <span className="text-black dark:text-white"><ArrowDown2 size="20" variant="Outline"/></span>
                </span>
              </div>
            </div>

            <div className="flex text-neutral-400 dark:text-slate-300">
              <ul className="w-8 xs:w-16 sm:w-[74px] flex flex-col justify-between text-[0.5rem] xs:text-xs sm:text-sm font-semibold">
                <li>50.000</li>
                <li>40.000</li>
                <li>30.000</li>
                <li>20.000</li>
                <li>10.000</li>
                <li>5.000</li>
                <li className="pl-3">0</li>
              </ul>
              <div className="flex-1 relative overflow-hidden z-10">
                <div className="h-full w-full absolute top-0 left-0 flex flex-col justify-between -z-10">
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
                <div className="flex gap-0.5 justify-between w-full items-end pt-10 overflow-hidden">
                  {selectedChart === "monthly" ? <MonthlyBars /> : selectedChart === "daily" ?  <WeeklyBars/> : <YearlyBars />}
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 xs:w-16 sm:w-[74px] shrink-0"/>
              <div className="flex justify-between text-neutral-600 dark:text-slate-300 w-full text-[0.5rem] xs:text-sm font-semibold py-2 text-center overflow-hidden">
              {selectedChart === "monthly" ? <MonthlyLabels /> : selectedChart === "daily" ?  <WeeklyLabels/> : <YearlyLabels />}
                </div>
            </div>
          </section>
          <section className="col-span-12 min-[1115px]:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <section className="section p-4 col-span-12 desktop:col-span-7">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold xs:text-lg text-[#26282C] dark:text-white transition-all">Last Orders</span>
              <span className="text-primary-green text-sm xs:text-base font-medium hover:underline cursor-pointer">See All</span>
            </div>

            <div className="overflow-x-scroll sm:overflow-x-hidden no-scrollbar">
              <table className="w-full text-sm xs:text-base">
                <thead>
                  <tr className="text-[#9CA4AB] font-medium text-left">
                    <th className="pb-5">Name</th>
                    <th className="pb-5">Date</th>
                    <th className="pb-5">Amount</th>
                    <th className="pb-5">Status</th>
                    <th className="pb-5 pl-2">Invoice</th>
                  </tr>
                </thead>
                <tbody className=" whitespace-nowrap">
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
          <section className="section p-4 col-span-12 desktop:col-span-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold xs:text-lg dark:text-white transition-all">Top Platform</span>
              <span className="text-primary-green font-medium hover:underline cursor-pointer text-sm xs:text-base">See All</span>
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
