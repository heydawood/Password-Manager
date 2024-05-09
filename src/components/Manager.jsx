import React from 'react'
import { useRef, useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

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
        if (form.site.length > 2 && form.username.length > 2 && form.password.length > 2) {

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
           // console.log([...passwordArray, form])
            setform({ site: "", username: "", password: "" })
            // toast('Password Saved!', {
            //     position: "bottom-left",
            //     autoClose: 1500,
            //     hideProgressBar: false,
            //     closeOnClick: true,                        //toast alert (throwing errors)
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
        }
        else {
            toast.error('Error: Password Not Saved!', {
                autoClose: 1500,
                position: "bottom-left",
                theme: "dark",
            });
        }
    }

    const deletePassword = (id) => {
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            // toast.success('Password Deleted!', {
            //     position: "bottom-left",
            //     autoClose: 1500,
            //     hideProgressBar: false,
            //     closeOnClick: true,            //toast alert(throwing errors)
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
        }
    }

    const editPassword = (id) => {
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
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

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,   //toast alert
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable                                 //toast
                pauseOnHover
                theme="light"
                transition="bounce" />
            {/* Same as */}
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="p-3 md:mycontainer min-h-[85.3vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/ &gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 gap-8 text-black items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-600 w-full p-4 py-1' type="text" name="site" id="site" />

                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-600 w-full p-4 py-1' type="text" name="username" id="username" />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-600 w-full p-4 py-1' type="password" name="password" id="password" />

                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="/eye.png" alt="eye" />
                            </span>

                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 border border-green-900 bg-green-500 hover:bg-green-600 rounded-full px-7 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-xl py-3'>Your Saved Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className=' mb-1 table-auto w-full rounded-md overflow-hidden'>
                        <thead className='bg-green-600 text-white'>
                            <tr>
                                <th className='py-1'>Site</th>
                                <th className='py-1'>Username</th>
                                <th className='py-1'>Password</th>
                                <th className='py-1'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>

                                    <td className='flex items-center justify-center py-1 border border-white text-center'><a href={item.site} target='_blank' >{item.site}</a>

                                        <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.site) }}>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "4px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json" //copy icon 
                                                trigger="hover">
                                            </lord-icon>
                                        </div>

                                    </td>

                                    <td className='py-1 border border-white text-center'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.username}</span>
                                            <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "4px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json" //copy icon 
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-1 border border-white text-center'>
                                        <div className='flex items-center justify-center'>
                                            <span>{"*".repeat(item.password.length)}</span>
                                            <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "4px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json" //copy icon 
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='justify-center py-1 border border-white text-center'>
                                        <div className='flex items-center justify-center'>
                                            {/* Edit button */}
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "4px" }}
                                                    src="https://cdn.lordicon.com/gwlusjdu.json" //edit icon 
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                            {/* delete button */}
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "4px" }}
                                                    src="https://cdn.lordicon.com/skkahier.json" //delete icon 
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
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
