<form wire:submit.prevent="updateCard">
    <div>
        <h1 class="text-2xl font-medium">Edit Card</h1>

        <div>
            <span class="label label-text">Name</span>
            <input type="text" class="input input-bordered input-primary w-full" wire:model.live="card.name">
            @error('name')
                <span class="text-xs text-error">
                    {{ $message }}
                </span>
            @enderror
        </div>


        @if ($this->oldUser)
            <span class="label label-text">Current User</span>

            <div class="flex items-center justify-between bg-base-100 px-2">
                <div
                    class="flex items-center gap-2 p-2 rounded-lg [&:has(input:checked)]:border-2 border-primary cursor-pointer">
                    <img src="{{ $this->oldUser->image }}" class="w-10 h-10 rounded-md" alt="">
                    <div class="flex flex-col ">
                        <span> {{ $this->oldUser->name }} </span>
                        <span class="opacity-80 text-sm"> {{ $this->oldUser->email }} </span>
                    </div>
                </div>

                <button type="button" class="btn btn-error" wire:click="clearUser">
                    Unlink
                </button>

            </div>
        @endif


        <div>
            <span class="label label-text">Edit User</span>
            <input type="text" placeholder="Search by name, email" class="input input-bordered input-primary w-full"
                wire:model.live="term">
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
                        <button type="button"
                            class="btn {{ $this->card->user_id == $user->id ? 'btn' : 'btn-primary' }}"
                            wire:click="selectUser('{{ $user->id }}')">
                            {{ $this->card->user_id == $user->id ? 'Selected' : 'Select' }}
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
                Update Card
            </button>

        </div>

    </div>
</form>
