"use client"
import { useState } from "react"

type FormData = {
    name: string,
    email: string,
    password: string,
    bio: string,
    gender: string,
    hobbies: Array<string>,
    country: string,
    terms: boolean
}

function SignupForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        bio: "",
        gender: "",
        hobbies: [],
        country: "",
        terms: false
    })

    const hobbiesOptions = ['Reading', 'Traveling', 'Gaming'];
    const countries = ['India', 'USA', 'UK'];

    const handleChange = (  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value, type, checked} = e.target
        if(type=== "checkbox" && name=== "hobbies"){
            let newHobbies = checked ? [...formData.hobbies, value] : formData.hobbies.filter((v) => v !== value)
            setFormData({...formData, hobbies: newHobbies})
        }else if(type==="checkbox"  && name === "terms"){
            setFormData({...formData, terms:checked})
        }else{
            setFormData({...formData, [name]: value})
        }
    }


    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log("FormData", formData)
    }


    return (
        <div className="bg-white max-w-md mx-auto mt-10 text-black shadow-md rounded-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Signup Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-4">Fullname</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Fullname..."
                        className="w-full p-2 border rounded-md bg-gray-100 "
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-4">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email..."
                        className="w-full border rounded-md p-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-4">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password..."
                        className="w-full border rounded-md p-2 bg-gray-100"

                    />
                </div>

                <div>
                    <label className="block font-semibold mb-4">Bio</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}

                        rows={3}
                        placeholder="Enter bio..."
                        className="w-full border rounded-md bg-gray-100 p-2"
                    ></textarea>
                </div>

                <div>

                    <label className="block font-semibold mb-4">Gender</label>
                    <div className="flex gap-4">
                        <label className="flex gap-2 items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>

                        <label className="flex gap-2 items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Hobbies</label>
                    <div className="flex gap-4">
                        {hobbiesOptions.map((hobby) => (
                            <label key={hobby} className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    name="hobbies"
                                    value={hobby}
                                    checked={formData.hobbies.includes(hobby)}
                                    onChange={handleChange}
                                />
                                {hobby}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block mb-2 font-semibold">Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md bg-gray-100"
                    >
                        <option value="">Select country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                </div>

                <div >
                    <label className="flex items-center gap-2" >
                        <input 
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                         />
                        I accept the terms and conditions
                    </label>
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600 transition">Submit</button>

            </form>
        </div>
    )



}


export default SignupForm