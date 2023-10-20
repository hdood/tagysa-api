<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title> @yield('title') </title>
    @livewireStyles
</head>

<body style="min-height: 100vh;" class="flex bg-gray-100 min-h-screen">
        <aside class="hidden sm:flex sm:flex-col bg-base-100">
            <a href="#" class="inline-flex items-center justify-center h-20 w-20 bg-base-100 ml-2">
                <img src="/logo_small.png" class="scale-75" alt="95dot logo" srcset="">
            </a>
            <div class="flex-grow flex flex-col justify-between text-base-content bg-base-100">
                <nav class="flex flex-col mx-4 my-6 space-y-4">
                    <a href="{{ route('admin.dashboard') }}"
                        class="btn {{ request()->route()->getName() == 'admin.dashboard'
                            ? 'btn-primary'
                            : 'btn-base-200' }}">
                        <span class="sr-only">Orders</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                        </svg>
                    </a>

                    <a href="{{ route('admin.users') }}"
                        class="btn {{ request()->route()->getName() == 'admin.users'||
                        request()->route()->getName() == 'admin.users.edit'
                            ? 'btn-primary'
                            : 'btn-base-200' }}">
                        <span class="sr-only">Users</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M13.07 10.41a5 5 0 0 0 0-5.82A3.39 3.39 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.39 3.39 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z" />
                        </svg>
                    </a>

                    <a href="{{ route('admin.orders') }}"
                        class="btn {{ request()->route()->getName() == 'admin.orders' ||
                        request()->route()->getName() == 'admin.orders.edit'
                            ? 'btn-primary'
                            : 'btn-base-200' }}">
                        <span class="sr-only">Orders</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                        </svg>

                    </a>

                    <a href="{{ route('admin.cards') }}"
                        class="btn {{ request()->route()->getName() == 'admin.cards' 
                            ? 'btn-primary'
                            : 'btn-base-200' }}">
                        <span class="sr-only">Cards</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4Zm4 16h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-.442 0-.858.002-1.25h19.996c.002.392.002.808.002 1.25c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20Zm-8-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6Zm6.5 0a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5h-1.5Z" clip-rule="evenodd"/></svg>
                    </a>




                </nav>

            </div>
        </aside>
        <div class="flex-grow text-gray-800">
            <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
                <button
                    class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                    <span class="sr-only">Menu</span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <div class="relative w-full max-w-md sm:-ml-2">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor"
                        class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                    <input type="text" role="search" placeholder="Search..."
                        class="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
                </div>
                <div class="flex flex-shrink-0 items-center ml-auto">
                    <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                        <span class="sr-only">User Menu</span>
                        <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                            <span class="font-semibold">

                                {{ auth()->user()->name }}
                            </span>
                        </div>

                    </button>
                    <div class="border-l pl-3 ml-3 space-x-1">

                        <form action="{{ route('admin.logout') }}" method="POST"
                            class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                            @csrf
                            <button
                                class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                <span class="sr-only">Log out</span>
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </header>
            <main class="p-6 sm:p-10 space-y-6">
                @yield('content')
            </main>
        </div>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    @livewireScripts
</body>

</html>
