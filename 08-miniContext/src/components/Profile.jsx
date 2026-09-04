import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user)
        return <>
                    <div class="flex flex-col justify-center items-center bg-white">
                        <p class="text-zinc-950 dark:text-white font-medium mb-1">Please login</p>
                    </div>
                </>

        return (
        <>
            <div class="flex flex-col justify-center items-center bg-white">
                <div class="mx-auto flex w-full mt-20 flex-col justify-center px-5 pt-0 md:h-[unset] max-w-[520px] lg:px-6 xl:pl-0">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min flex items-center max-w-full py-4 px-4 dark:border-zinc-800">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="w-6 h-6 me-4"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                            ></path>
                        </svg>
                        <div>
                            <p class="text-zinc-950 dark:text-white font-medium mb-1">
                                <ul>
                                    <li>Welcome {user.username}</li>
                                    <li>Password is: {user.password}</li>
                                </ul>
                                {/* Welcome {user.username} */}
                            </p>
                            {/* <p class="text-zinc-500 dark:text-zinc-400 font-medium">
                                Send notifications to device.
                            </p> */}
                        </div>
                        <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input ms-auto"
                        >
                            <span
                                data-state="checked"
                                class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                            ></span>
                        </button>
                    </div>
                </div>
                <p class="font-normal text-zinc-950 mt-20 mx-auto w-max">
                    Welcome &nbsp;
                    <a href="https://horizon-ui.com/shadcn-ui?ref=twcomponents" target="_blank" class="text-brand-500 font-bold space-x-2"> 
                     {user.username}
                    </a>
                </p>
                <p class="font-normal text-zinc-950 mt-20 mx-auto w-max">
                    Password is: <label class="text-brand-500 font-bold space-x-2">{user.password}</label>
                </p>
            </div>
        </>
    )
}

export default Profile
