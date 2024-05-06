import React from 'react'
import { useRef, useState, useEffect } from "react"

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("/eyecross.png")) {
            ref.current.src = "/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "/eyecross.png"
            passwordRef.current.type = "text"
        }
    }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/ &gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 gap-8 text-black items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />

                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="" />

                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="/eye.png" alt="eye" />
                            </span>

                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 border border-green-900 bg-green-400 hover:bg-green-500 rounded-full px-6 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-xl py-3'>Your Saved Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className='table-auto w-full rounded-md overflow-hidden'>
                        <thead className='bg-green-600 text-white'>
                            <tr>
                                <th className='py-1'>Site</th>
                                <th className='py-1'>Username</th>
                                <th className='py-1'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>

                                        <td className='flex items-center justify-center py-1 border border-white text-center'><a href={item.site} target='_blank' >{item.site}</a>

                                            <div className='cursor-pointer size-7'>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "padding-top": "4px", "padding-left": "4px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json" //copy icon 
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>

                                        </td>
                                        <td className=' justify-center py-1 border border-white text-center'>
                                            <div className='flex items-center justify-center'>
                                                <span>{item.username}</span>
                                                <div className='cursor-pointer size-7'>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "padding-top": "4px", "padding-left": "4px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json" //copy icon 
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='flex items-center justify-center py-1 border border-white text-center'>
                                            <div className='flex items-center justify-center'>
                                                <span>{item.password}</span>
                                                <div className='cursor-pointer size-7'>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "padding-top": "4px", "padding-left": "4px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json" //copy icon 
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                    
                                </tr>
                            })}
                        </tbody>
                    </table>}

                </div>

            </div>
        </>
    )
}

export default Manager
