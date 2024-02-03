import educate from '../../assets/educate.svg';
import agreement from '../../assets/agreement.svg';
import student from '../../assets/student.svg';
import teacher from '../../assets/teacher.svg';
import onlielearning from '../../assets/onlinelearning.svg';
import { Cards } from '../../components/Cards';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 my-5">
      <div className='w-[-webkit-fill-available] h-fit flex  justify-between bg-slate-300 p-5 rounded-md  gap-5'>
        <div className="flex flex-col gap-5">
          <h1 className='text-4xl font-medium text-neutral-900'>Complete Guide For CBSE Teachers.</h1>
          <p className='text-lg font-medium text-neutral-900'>Learning App for CBSE students and Test Generator for teachers to create question papers in minutes.</p>
          <button className='bg-orange-500 py-2 px-5 rounded-md w-fit text-neutral-200 mt-auto'>Getting Start</button>
        </div>
        <div className="flex">
          <img src={educate} alt="Educate" className='w-full h-[20em] object-cover' />
        </div>
      </div>

      <div className='w-[-webkit-fill-available] h-fit flex  justify-center gap-5'>
        <div className="flex flex-row w-[50%] items-start justify-between bg-slate-300 p-5 rounded-md ">
          <div className="flex flex-col gap-5 w-[45%]">
            <h1 className='text-2xl font-medium text-neutral-900'>Student Dashboard</h1>
            <p className='text-lg font-medium text-neutral-900'>Learning App for CBSE students and Test Generator for teachers to create question papers in minutes.</p>
            <Link to={'/login'} className='bg-orange-500 py-2 px-5 rounded-md w-fit text-neutral-200 mt-auto'>Student Login</Link>
          </div>
          <div className="flex justify-end w-[50%] h-full">
            <img src={student} alt="Educate" className='w-[13em] h-fit object-cover' />
          </div>
        </div>
        <div className="flex flex-row w-[50%] items-start justify-between bg-slate-300 p-5 rounded-md ">
          <div className="flex flex-col gap-5 w-[45%]">
            <h1 className='text-2xl font-medium text-neutral-900'>Teachers Dashboard</h1>
            <p className='text-lg font-medium text-neutral-900'>Learning App for CBSE students and Test Generator for teachers to create question papers in minutes.</p>
            <Link to={'/login'} className='bg-orange-500 py-2 px-5 rounded-md w-fit text-neutral-200 mt-auto'>Teachers Login</Link>
          </div>
          <div className="flex justify-end w-[50%] h-full">
            <img src={teacher} alt="Educate" className='w-auto h-fit object-cover' />
          </div>
        </div>
      </div>


      <div className="flex flex-row justify-between gap-5">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className='w-[-webkit-fill-available] h-fit flex  justify-between bg-slate-300 p-5 rounded-md  gap-5'>
        <div className="flex flex-col gap-5 w-[50%]">
          <h1 className='text-4xl font-medium text-neutral-900'>Want to work with us!</h1>
          <p className='text-lg font-medium text-neutral-900'>We keep on updating our question bank and enrich our content on daily basis. Teachers can join us as subject matter experts and work from home with us.</p>
          <button className='bg-orange-500 py-2 px-5 rounded-md w-fit text-neutral-200 mt-auto'>Join Now</button>
        </div>
        <div className="flex justify-center w-[50%]">
          <img src={agreement} alt="Educate" className='w-auto h-[20em] object-cover' />
        </div>
      </div>

    </div>
  )
}

