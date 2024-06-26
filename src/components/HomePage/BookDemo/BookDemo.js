import '../BookDemo/BookDemo.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, FormGroup, responsiveFontSizes } from '@mui/material';


export default function Demo() {
    return (
        <section className="h-auto bg-demobg py-10 px-8 xl:py-16 xl:px-28">
            <div>
            <p className="text-2xl mb-5 md:text-3xl lg:text-4xl lg:mb-7 text-center font-circular-medium text-[#121D4B]">Book A Demo</p>
            <p className="text-sm md:text-md text-[#0c0d0e] text-center font-circular-medium">Are you interested in finding out more about how India's leading Microsoft Gold Partner can help your business?</p>
            </div>
            <form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-black mt-10'>
                <TextField id="outlined-basic" label="Enter Name" variant="outlined" color='primary'/>
                <TextField id="outlined-basic" label="Enter E-Mail Address" variant="outlined" color='primary'/>
                <TextField id="outlined-basic" label="Enter Company" variant="outlined" color='primary'/>
                <TextField id="outlined-basic" label="Enter Designation" variant="outlined" color='primary'/>
                <TextField id="outlined-basic" label="Country" variant="outlined" color='primary'/>
                <TextField id="outlined-basic" label="Enter Phone Number" variant="outlined" color='primary'/>
            </div>
            <div className='mt-5'>
                <TextField id="outlined-multiline-static" label="Message" multiline rows={3} className='w-full' color='primary'/>
            </div>
            <div className='box flex justify-center items-start text-left mt-2'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox color='primary'/>} label='I would also like to receive the latest news and updates from Nimbus.'/>
                </FormGroup>
            </div>
            <button className='bg-[#1E307A] text-white w-32 m-4 md:w-52 md:p-1 xl:m-3 font-circular-book'>SUBMIT</button>
            </form>
        </section>
    )
}