import React from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../Firebase-config';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DashboardBirthDetails = ( { Birth, isAuth } ) => {

    
  return (
    <>
    <h2  className='ml-8 text-2xl font-semibold'> Birth dashbaord </h2>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-1  lg:grid-cols-1 gap-x-6 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
       {Birth?.map((item)=>{
        return(
          <div key={item.id} >
            {isAuth && item.User.id === auth.currentUser.uid && (
             
             <div className='p-4 rounded-lg shadow-2xl mb-9 bg-white hover:bg-transparent hover:bg-slate-300 duration-500 '>
            <div>
            <h3 className=' pt-4 text-[15px] text-black pb-2 font-bold' > {`${item?.childs_name}'s`} Birth details </h3>
            <h1> <span className='font-bold text-black'> Weight :</span> { item?.weight || <Skeleton/> }kg </h1>
               <h1> <span className='font-bold text-black'> Date of Birth : </span> { item?.Date_of_Birth || <Skeleton/> } </h1>
               <h1> <span className='font-bold text-black'> Phone Number :</span> { item?.Phone_Number || <Skeleton/> } </h1>
               <h1> <span className='font-bold text-black'> Time of Birth: </span> { item?.Time_of_Birth || <Skeleton/> }</h1>
               <h1> <span className='font-bold text-black'> State of origin: </span> { item?.State_of_origin || <Skeleton/> }</h1> 
               <h1> <span className='font-bold text-black'> State of origin: </span> { item?.city || <Skeleton/> } </h1> 

               <div className='mt-4'>
              <Link to={`/birth_detail/${item.id}`} > <button className='mr-4 pr-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white' >Read more </button> </Link>
            </div>

            </div>
            </div>
            
            )}
            
          </div>
        )
       })}
      </div>

    </>
  )
}

export default DashboardBirthDetails;
