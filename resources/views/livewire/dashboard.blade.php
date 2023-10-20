<div class="flex gap-3">
    <div class="flex flex-col gap-2">
        <div class="stats shadow ">
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z" />
                    </svg>
                </div>
                <div class="stat-title">Profile visits</div>
                <div class="stat-value">
                    {{ $totalVisits }}
                </div>
                <div class="stat-desc">{{ $lastMonth }} - {{ $today }} </div>
            </div>
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z" />
                    </svg>
                </div>
                <div class="stat-title">Users</div>
                <div class="stat-value">{{ $totalUsers }}</div>
                <div class="stat-desc">↗︎ {{ $usersGrowth }}</div>
            </div>
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                        <mask id="ipSOrder0">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                                <path fill="#fff" stroke="#fff"
                                    d="M33.05 7H38a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7v3h14V7h2.05Z" />
                                <path stroke="#fff" stroke-linecap="round" d="M17 4h14v6H17z" />
                                <path stroke="#000" stroke-linecap="round" d="m27 19l-8 8.001h10.004l-8.004 8" />
                            </g>
                        </mask>
                        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSOrder0)" />
                    </svg>
                </div>
                <div class="stat-title">Orders</div>
                <div class="stat-value">
                    {{ $totalOrders }}
                </div>
                <div class="stat-desc">↗︎ {{ $usersGrowth }}</div>
            </div>
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M16 1.466C7.973 1.466 1.466 7.973 1.466 16c0 8.027 6.507 14.534 14.534 14.534c8.027 0 14.534-6.507 14.534-14.534c0-8.027-6.507-14.534-14.534-14.534zm1.255 22.414v2.047h-1.958v-2.024c-3.213-.44-4.62-3.08-4.62-3.08l2-1.673s1.277 2.223 3.587 2.223c1.276 0 2.244-.683 2.244-1.85c0-2.728-7.35-2.397-7.35-7.458c0-2.2 1.74-3.785 4.138-4.16V5.86h1.958v2.045c1.672.22 3.652 1.1 3.652 2.993v1.452H18.31v-.704c0-.726-.925-1.21-1.96-1.21c-1.32 0-2.287.66-2.287 1.584c0 2.794 7.35 2.112 7.35 7.415c0 2.18-1.628 4.07-4.158 4.445z" />
                    </svg>
                </div>
                <div class="stat-title">Total Amount</div>
                <div class="stat-value">
                    {{ $totalAmount }}₹
                </div>
                <div class="stat-desc">{{ $lastMonth }} - {{ $today }} </div>
            </div>
        </div>
        <div class="bg-base-100 p-2 rounded-lg shadow">
            <h1 class="text-2xl font-medium">Recent Orders</h1>

            @if ($orders->count() == 0)
                <div class="w-full text-center mt-5">You don't have orders yet.</div>
            @else
            <table class="table ">
                <!-- head -->
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>User</th>
                        <th>Card type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    @foreach ($orders as $order)
                        <tr class="hover:bg-base-200 cursor-pointer"
                            onclick="window.location='{{ route('admin.orders.edit', ['order' => $order->id]) }}';">
                            <th>
                                {{ $order->id }}
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="{{ $order->user?->image }}" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">
                                            {{ $order->user?->name }}
                                        </div>
                                        <div class="text-sm opacity-50">{{ $order->user?->email }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {!! $order->card->renderType() !!}
                            </td>
                            <td>
                                {!! $order->state->render() !!}
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                    <!-- foot -->
                    <tfoot>
                        <tr>
                            <th># </th>
                            <th>User</th>
                        <th>Card type</th>
                        <th>Status</th>
                    </tr>
                </tfoot>
            </table>
            @endif
        </div>
    </div>

    <div class="bg-base-100 p-2 rounded-lg shadow w-full    ">
        <h1 class="text-2xl font-medium">Recent Users</h1>

        @if ($users->count() == 0)
        <div class="w-full text-center mt-4">You don't have any users yet </div>
        @else
        
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                @foreach ($users as $user)
                    <tr class="hover:bg-base-200 cursor-pointer"
                        onclick="window.location = '{{ route('admin.users.edit', ['user' => $user->id]) }}'">
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="{{ $user->image }}" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">
                                        {{ $user->name }}
                                    </div>
                                    <div class="text-sm opacity-50">{{ $user->email }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ $user->is_premium ? 'premium' : 'basic' }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
            <!-- foot -->
            <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </tfoot>
        </table>
        @endif
    </div>
</div>
