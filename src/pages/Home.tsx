import { ProductCarousel } from "@/appcomponents/ProductCarousel";

import { DemoNotifications } from "@/appcomponents/Notifications.jsx";
function Home() {
  return (
    <>
      <div className=''>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-4 pl-16'>
          Book Club
        </h1>
      </div>
      <ProductCarousel />
      <div className='p-16'>
        <DemoNotifications />
      </div>
    </>
  );
}

export default Home;
