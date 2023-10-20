<form wire:submit.prevent="save">
    <div>
        <h1 class="text-2xl font-medium">Create Card</h1>
    
        <div>
            <span class="label label-text">Name</span>
            <input type="text" class="input input-bordered input-primary w-full" wire:model="name">
            @error('name')
                <span class="text-xs text-error">
                    {{$message}}
                </span>
                
            @enderror
        </div>
    
        <div>
            <span class="label label-text">Search by name, email</span>
            <input type="text" class="input input-bordered input-primary w-full" wire:model.live="term">
        </div>
    
        @if (count($searchedUsers) != 0)
    
        <div class="max-h-sm overflow-y-scroll bg-base-200 flex flex-col gap-2 p-2 rounded-lg mt-4">
            @foreach ($searchedUsers as $user)
    
                <div class="flex items-center justify-between bg-base-100 px-2">
                    <div
                        class="flex items-center gap-2 p-2 rounded-lg [&:has(input:checked)]:border-2 border-primary cursor-pointer">
                        <img src="{{ $user->image }}" class="w-10 h-10 rounded-md" alt="">
                        <div class="flex flex-col ">
                            <span> {{ $user->name }} </span>
                            <span class="opacity-80 text-sm"> {{ $user->email }} </span>
                        </div>
                    </div>
                    <button type="button" class="btn {{$this->selectedUser == $user->id ? 'btn' : 'btn-primary'}}" wire:click="selectUser('{{$user->id}}')">
                        {{$this->selectedUser == $user->id ? 'Selected' : 'Select'}}
                    </button>
                </div>
                @endforeach
    
            </div>
        @else
            @if ($this->term)
                <div> Nothing Found</div>
            @endif
        @endif

        <div class="flex justify-end my-3">

            <button class="btn btn-primary">
                Create Card
            </button>

        </div>
    </div>
</form>
