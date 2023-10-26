
@section('title')
    Users
@endsection

<div>
    <div class="space-y-4">
        <div>
            <h1 class="text-3xl font-medium flex  items-center ">
                Users
            </h1>
        </div>
        <div class="overflow-x-auto bg-base-200 rounded-md p-4">
            <div class="flex gap-2 items-center">
                <input type="text" placeholder="Search By Name, Email, Id" class="input input-bordered input-primary w-full max-w-xs" wire:model='term' />
                <select class="select select-bordered w-full max-w-xs" id="" wire:model='userType'>
                    <option value="">Both</option>
                    <option value="premium">Premium</option>
                    <option value="basic">Basic</option>
                </select>
                <div class="collapse   collapse-sm">
                    <input type="checkbox" /> 
                    <div class="collapse-title ">
                        <button class="btn btn-primary">More filters</button>
                    </div>
                    <div class="collapse-content "> 

                        <div>
                            <span class="font-medium">Creation Date</span>
                            <div class="flex gap-2 mt-2">
                                <div>
                                    <span>From</span>
                                    <input type="date" class="input input-bordered input-primary w-full max-w-xs" id="" wire:model='from'>
                                </div>
                                <div>
                                    <span>To</span>
                                    <input type="date" class="input input-bordered input-primary w-full max-w-xs" id="" wire:model='to'>
                                </div>
                            </div>
                        </div>
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
                            <th>Type</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        @foreach ($users as $user)
                            <tr class="hover:bg-base-200 cursor-pointer" onclick="window.location = '{{route('admin.users.edit', ['user' => $user->id])}}'">
                                <th onclick="event.stopPropagation()">
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
                                    {{ $user->is_premium ? 'premium' : 'basic' }}
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
                            <th>Type</th>
                            <th>Created At</th>
                        </tr>
                    </tfoot>
                </table>
                {{ $users->links() }}
            @endif
        </div>

    </div>
</div>
