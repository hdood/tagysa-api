<div class="flex flex-col gap-4">
    <a href="javascript:history.back()" class=" hover:-translate-x-1 transition-transform cursor-pointer max-w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="w-10 h-10 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    </a>
    <div class="bg-base-100 p-4 rounded-md flex flex-col gap-8">
        <h1 class="text-3xl font-medium flex  items-center ">


            <span class="opacity-70">Orders / </span> &nbsp;#{{ $order->id }}
        </h1>
        @if (session('message'))
            <div class="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                    {{ session('message') }}
                </span>
            </div>
        @endif


        <div class="flex p-5 justify-between w-full items-center">

            <div
                class="max-w-fit p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 bg-base-200 rounded-lg shadow-lg">
                <div class="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 rounded-full ">
                    <img src="{{ $order->user->image }}" alt=""
                        class="object-cover object-center w-full h-full dark:bg-gray-500 rounded-full ">
                </div>
                <div class="flex flex-col space-y-4">
                    <div>
                        <h2 class="text-2xl font-semibold">
                            {{ $order->user->name }}
                        </h2>
                        <span class="text-sm dark:text-gray-400">{{ $order->user->designation }}</span>
                    </div>
                    <div class="space-y-1">
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address"
                                class="w-4 h-4">
                                <path fill="currentColor"
                                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z">
                                </path>
                            </svg>
                            <span class="dark:text-gray-400">
                                {{ $order->user->email }}
                            </span>
                        </span>
                        @if ($order->user->phone)
                            <span class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber"
                                    class="w-4 h-4">
                                    <path fill="currentColor"
                                        d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z">
                                    </path>
                                </svg>
                                <span class="dark:text-gray-400">+{{ $order->user->country_code }}
                                    {{ $order->user->phone }}</span>
                            </span>
                        @endif
                    </div>
                </div>
            </div>


            <div>
                {!! $order->state->renderAction() !!}
            </div>
        </div>


        {{ $order->card->render() }}
    </div>
</div>
