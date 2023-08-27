import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import setCookie from './setCookie';

function Login() { // Updated function name to start with uppercase
    const [email, setEmail] = useState(''); // Renamed to setEmail
    const [pass, setPass] = useState('');   // Renamed to setPass
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        await axios.get('/signin').then(res => {
            var response = res.data.users[0]
            if (response.username === email && response.password === pass) {
                setCookie('username', response.username)
                navigate('/dashboard')
            }
        }).catch(err => {
            console.log(err)
        })

    };



    return (
        <form className='w-50 lg:w-1/2 lg:mx-auto m-10 p-10 bg-white rounded-md ' onSubmit={handleLogin} >
            <div className='text-center text-2xl lg:text-3xl mb-5'>
                Sign-in form
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="username" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    );
}

export default Login;
