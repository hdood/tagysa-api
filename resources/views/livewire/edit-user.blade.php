@section('title')
    Edit | {{ $this->user->name }}
@endsection
<div class="flex flex-col gap-4">
    <a href="javascript:history.back()" class=" hover:-translate-x-1 transition-transform cursor-pointer max-w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="w-10 h-10 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    </a>

    <div class="flex gap-10 justify-center">
        <div class="flex flex-col items-start gap-3 rounded h-60">

            <div class="p-5 flex flex-col items-start gap-3 bg-base-200 w-72 rounded max-h-fit">
                <div class="avatar">
                    <div class="w-24 rounded-lg">
                        <img src="{{ $this->user->image }}" alt="user profile image" />
                    </div>
                </div>
                <div class="space-y-2">
                    <h1 class="text-2xl font-medium">
                        {{ $this->user->name }}
                    </h1>
                    <h2>
                        {{ $this->user->email }}
                    </h2>
                    <h3 class="text-sm">
                        joined in {{ $this->user->created_at }}
                    </h3>
                </div>
            </div>

        </div>

        <div class="flex flex-col gap-4">

            <div class="bg-base-200 p-5 rounded">
                {{-- <div class="flex gap-3 items-center my-4">
                    <span class="font-medium">{{ $this->user->id }}</span>
                    <button x-data='{copied : false}' @click="copied = true; setTimeout(() => copied = false, 2000)"
                        class="btn btn-priamry btn-xs"
                        onclick="navigator.clipboard.writeText('{{ $this->user->id }}');">
                        <svg x-show="!copied" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Zm-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z" />
                        </svg>
                        <svg x-show="copied" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                        </svg>
                    </button>
                </div> --}}

                <h1 class="text-xl font-medium">Personal Infomations</h1>
                <div class="flex gap-3">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs"
                            wire:model='user.name' />
                        @error('user.name')
                            <label class="label text-red-500 italic text-sm">
                                <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs"
                            wire:model='user.email' />
                        @error('user.email')
                            <label class="label text-red-500 italic text-sm">
                                <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                    </div>
                </div>



            </div>

            <div class="bg-base-200 p-5 rounded">
                <h1 class="text-xl font-medium my-4">Cards</h1>
                <div class="flex gap-3 flex-col">
                    @forelse ($this->user->cards as $card)
                        <div
                            class="bg-primary  p-4 rounded text-primary-content flex items-center justify-between gap-2  cursor-pointer w-full">

                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4Zm4 16h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-.442 0-.858.002-1.25h19.996c.002.392.002.808.002 1.25c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20Zm-8-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6Zm6.5 0a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5h-1.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div>{{ $card->name }}</div>
                            </div>


								<div @click.stop="">
									<a href="{{env('FRONTEND_URL')}}/user/{{$card->id}}" target="_blank" class="btn btn-base">
										Visit Profile
									</a>
								</div>
                        </div>
                    @empty 
                        
                    <div class="my-4 text-center">
                        This user does not have any linked cards
                    </div>
                        
                    @endforelse
                </div>
            </div>
            <div class="p-4 flex justify-end rounded bg-base-200">
                <button class="btn btn-primary " wire:click='save' wire:target='save' wire:loading.class='disabled'>
                    <span wire:loading.remove wire:target='save'>Save changes</span>
                    <span class="loading loading-spinner loading-md" wire:loading wire:target='save'></span>
                </button>
            </div>
        </div>

    </div>

</div>
</div>
