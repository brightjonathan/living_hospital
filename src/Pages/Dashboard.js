import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import {db} from '../Firebase-config';
import DashboardBirthDetails from '../Component/DashboardBirthDetails';
import DashbaordAntenetalDetails from '../Component/DashbaordAntenetalDetails';
import SpinnerAs from '../Component/SpinnerAs';


const Dashboard = ({isAuth}) => {

  const [Birth, setBirth] = useState([]);
  const [loading, setloading] = useState(true);
  const [Antenetal, setAntenetal] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    const getBlogs = onSnapshot(
      collection(db, 'BirthData'),
      (snapshot) =>{
        let list = []
        snapshot.docs.forEach((doc)=>{
          list.push({id: doc.id, ...doc.data()})
        });
        setBirth(list)
        setloading(false)
      }, (err)=>{
        console.log(err)
      }
    )

    return ()=>{
      getBlogs();
    }

},[])


useEffect(()=>{
  const getBlogs = onSnapshot(
    collection(db, 'AntenetalData'),
    (snapshot) =>{
      let list = []
      snapshot.docs.forEach((doc)=>{
        list.push({id: doc.id, ...doc.data()});
      });
      setAntenetal(list);
      setloading(false);

    }, (err)=>{
      console.log(err)
    }
  )

  return ()=>{
    getBlogs();
  }

},[]);



useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [isAuth]);

  if(loading){
    return <SpinnerAs/>
  }


  return (
    <div className='mt-[15vh]' >
   <DashboardBirthDetails Birth={Birth} isAuth={isAuth} />

    <hr className='text-2xl mt-9 '/>

    <DashbaordAntenetalDetails Antenetal={Antenetal} isAuth={isAuth} /> 
    
    </div>
  )
}

export default Dashboard;
