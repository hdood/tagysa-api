@section('title')
    Users
@endsection



@if (session('info'))
    <div class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ session('info') }}.</span>
    </div>
@endif

<div>
    <div class="space-y-4">
        <div>
            <h1 class="text-3xl font-medium flex  items-center ">
                Users
            </h1>
        </div>
        <div class="overflow-x-auto bg-base-200 rounded-md p-4">
            <div class="flex gap-2 items-center">
                <div>
                    <span>Search</span>
                    <input type="text" placeholder="Search By Name, Email, Id"
                        class="input input-bordered input-primary w-full max-w-xs" wire:model='term' />
                </div>

                <div class="flex gap-2 mt-2">
                    <div>
                        <span>From</span>
                        <input type="date" class="input input-bordered input-primary w-full max-w-xs" id=""
                            wire:model='from'>
                    </div>
                    <div>
                        <span>To</span>
                        <input type="date" class="input input-bordered input-primary w-full max-w-xs" id=""
                            wire:model='to'>
                    </div>
                </div>

            </div>
            @if ($users->count() == 0)

                <div class="text-center mt-8">
                    Nothing found.
                </div>
            @else
                <table class="table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        @foreach ($users as $user)
                            <tr class="hover:bg-base-200 cursor-pointer"
                                onclick="window.location = '{{ route('admin.users.edit', ['user' => $user->id]) }}'">
                                <th>
                                    {{ $user->id }}
                                </th>
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
                                    @if ($user->phone)
                                        +{{ $user->country_code }} {{ $user->phone }}
                                    @else
                                        No phone
                                    @endif
                                </td>
                                <td>
                                    {{ $user->created_at }}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                    <!-- foot -->
                    <tfoot>
                        <tr>
                            <th># </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Created At</th>
                        </tr>
                    </tfoot>
                </table>
                {{ $users->links() }}
            @endif
        </div>

    </div>
</div>
