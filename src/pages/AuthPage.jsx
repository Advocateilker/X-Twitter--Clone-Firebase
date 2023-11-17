import React, { useState, useEffect } from 'react'
import { auth, provider } from '../firebase/config'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword ,onAuthStateChanged,signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"



const AuthPage = () => {
    const [signUp, setSignUp] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                toast.success('Hesaba giriş yapıldı');
                navigate('/feed');
            } else {

            }
        });


        return () => unsubscribe();
    }, [navigate]);

    const handleGoogle = () => {

        signInWithPopup(auth,provider)
        .then(()=>navigate("/feed"))


    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (signUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => toast.success("Hesabınız Oluşturuldu"))
                .catch(err => toast.error(`Üzgünüz Bir Hata Oluştu: ${err.code}`))

        } else {

            signInWithEmailAndPassword(auth, email, password)
                .catch((err) => {
                    toast.error(`Üzgünüz Bir Hata Oluştu: ${err.code}`)
                    if (err.code === "auth/invalid-login-credentials") {
                        setIsError(true)
                    }
                })

        }

    }

    const resetPassword = () => {

        sendPasswordResetEmail(auth, email)
            .then(() => toast.info("Şifre Sıfırlama İsteği Başarılı"))

    }

    return (
        <section className='h-screen grid place-items-center'>
            <div className='bg-black flex flex-col gap-10 py-16 px-32 rounded-lg'>
                <div className='flex justify-center'>
                    <img className='h-[60px]' src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg" alt="x-logo" />
                </div>
                <h1 className='text-center font-bold text-xl text-white'>X'e Giriş Yap</h1>
                <button onClick={handleGoogle} className='flex items-center bg-white py-2 px-10 rounded-full text-black cursor-pointer gap-1 transition hover:bg-gray-300'>
                    <img className=' rounded-full w-[20px] h-[20px]' src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="google-logo" />

                    <span className='whitespace-nowrap'>Google ile Giriş Yap</span>
                </button>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <label className='text-white'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray] ' type="email" required />
                    <label className='text-white mt-2'>Şifre</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray] ' type="password" required />

                    <button className='bg-white mt-10 rounded-full p-1 font-bold transition hover:bg-gray-300 text-black'>
                        {signUp ? "Kayıt Ol" : "Giriş Yap"}
                    </button>

                    <p className='text-white flex gap-3 items-center justify-center'>
                        <span className='text-gray-400'>
                            {signUp ? "Hesabınız varsa" : "Hesabınız yoksa"}
                        </span>
                        <span className={!signUp ? 'text-red-400 cursor-pointer' : "text-green-400 cursor-pointer"} onClick={() => setSignUp(!signUp)}>
                            {signUp ? "Giriş Yapın" : "Kayıt Olun"}
                        </span>
                    </p>
                </form>

                {isError && <p onClick={resetPassword} className=' cursor-pointer text-center text-red-500 '>Şifrenizi mi unuttunuz?</p>}

            </div>

        </section>
    )
}

export default AuthPage