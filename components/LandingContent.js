import {Component} from 'react';
import Link from 'next/link';


class LandingContent extends Component {
    render()
    {
        return (
            <div className="flex flex-row place-content-center content-center text-white h-screen w-full space-x-60">
                <div className="mx-8 my-auto" >
                    <img className="drop-shadow-[-30px_15px_16px_rgb(225,30,192)] hover:drop-shadow-none"  src="../svg/cat.svg" style={{height: 650, width: 350}} />
                </div >

                <div className="flex flex-col mx-8 my-auto" >
                    <p className="text-8xl my-4 font-bold" >
                        Welcome
                    </p >
                    <p className="text-4xl mx-4" >
                        This is the landing page of my web dev test.
                    </p >
                    <p className="text-2xl text-justify mx-4 my-3 italic"
                        style={{width: 700}} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p >
                    <div className="mx-4" >
                        <button className="bg-indigo-600 text-white text-xl rounded hover:bg-fuchsia-900"
                                type="button"
                                style={{width: 150}} >
                            <Link href="#login">
                                <a>Join us</a>
                            </Link>
                        </button >
                    </div >
                </div >
            </div >
        )
    }
}

export default LandingContent;