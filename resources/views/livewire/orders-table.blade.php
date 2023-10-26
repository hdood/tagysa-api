<div class="space-y-4">
    <div>
        <h1 class="text-3xl font-medium flex  items-center ">


            Orders
        </h1>
    </div>
    <div class="overflow-x-auto bg-base-200 rounded-md p-4">

        <div class="flex gap-2">
            <select class="select select-bordered w-full max-w-xs" wire:model='type'>
                <option value="">All</option>
                @foreach (App\Models\Order::getStates()['state'] as $state)
                    <option value="{{ $state }}">
                        {{ $state }}
                    </option>
                @endforeach
            </select>
            <input type="text" placeholder="Search By Name or order ID" class="input input-bordered input-primary w-full max-w-xs" wire:model='name' />
        </div>

        @if ($orders->count() == 0)

            <div class="text-center mt-6">
                Nothing Found
            </div>

        @else

            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>User</th>
                        <th>Card type</th>
                        <th>Date</th>
                        <th>Address</th>
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
                                {{ $order->created_at }}
                            </td>
                            <td class="">
                                <address>
                                    {{ $order->formattedAddress() }}
                                </address>
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
                        <th>Date</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </tfoot>
            </table>
            {{ $orders->links() }}
        @endif
    </div>

</div>
