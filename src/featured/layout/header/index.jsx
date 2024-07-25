import React from 'react';
import { LuMenu } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDashboardCustomize, MdFullscreen } from "react-icons/md";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

const Header = ({ toggleSidebar }) => {
  return (
    <header>
      <div className='bg-elementsColor flex flex-row items-center justify-between text-white text-[20px] h-[70px] px-4'>
        <div className='header-left flex flex-row items-center gap-8'>
          <div onClick={toggleSidebar} className='cursor-pointer'><LuMenu /></div>
          <div className='flex items-center gap-2 text-gray-500'>
            <IoSearch />
            <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none text-xs placeholder-gray-500 text-white' />
          </div>
          <div>
            <p className='flex items-center gap-2 text-xs cursor-pointer'>Mega Menu <IoIosArrowDown /></p>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <div><img className='cursor-pointer w-6' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z' /></div>
          <ul className='flex gap-6 text-2xl items-center'>
            <li><div className='cursor-pointer'><MdOutlineDashboardCustomize /></div></li>
            <li><div className='text-3xl cursor-pointer'><MdFullscreen /></div></li>
            <li><div className='animate-notification cursor-pointer'><IoNotificationsOutline /></div></li>
            <li><div className='flex items-center gap-2 cursor-pointer'>
              <img className='w-10 rounded-full border-4 border-gray-600' src='https://skote-v-dark.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg' />
              <p className='flex items-center gap-2 text-sm'>admin<IoIosArrowDown /> </p>
            </div></li>
            <li><div className='animate-spin cursor-pointer'><IoSettingsOutline /></div></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
