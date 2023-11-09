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
                            class="bg-base-100  p-4 rounded text-primary-content flex items-center justify-between gap-2  cursor-pointer w-full">

                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4Zm4 16h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-.442 0-.858.002-1.25h19.996c.002.392.002.808.002 1.25c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20Zm-8-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6Zm6.5 0a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5h-1.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div>{{ $card->name }}</div>
                            </div>


                            <div @click.stop="" class="flex items-center gap-4 ">


                                <a href="{{ env('FRONTEND_URL') }}/user/{{ $card->id }}" target="_blank"
                                    class="btn btn-info">
                                    Visit Profile
                                </a>

                                <button class="btn btn-warning"
                                    onclick="unlink_card_modal_{{ str_replace('-', '_', $card->id) }}.showModal()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                        viewBox="0 0 18 18">
                                        <path fill="currentColor"
                                            d="M6.456 10.218a1.934 1.934 0 0 0-1.902.492L2.5 12.762A1.935 1.935 0 0 0 5.238 15.5l2.052-2.053a1.934 1.934 0 0 0 .492-1.902a.968.968 0 0 1-1.326-1.326Zm4.446-4.446a.968.968 0 0 1 1.326 1.326a1.934 1.934 0 0 0 1.902-.492l1.37-1.368A1.935 1.935 0 1 0 12.762 2.5l-1.368 1.37a1.934 1.934 0 0 0-.492 1.902Zm5.965-4.639a3.87 3.87 0 0 1 0 5.473l-1.368 1.368A3.87 3.87 0 0 1 10.026 2.5l1.368-1.368a3.87 3.87 0 0 1 5.473 0ZM8.658 9.342a3.87 3.87 0 0 1 0 5.472l-2.052 2.053a3.87 3.87 0 0 1-5.473-5.473l2.053-2.052a3.87 3.87 0 0 1 5.472 0Z" />
                                    </svg>
                                </button>

                                <dialog id="unlink_card_modal_{{ str_replace('-', '_', $card->id) }}" class="modal">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Delete Card</h3>
                                        <p class="py-4">Are you sure you want to unlink this card?</p>
                                        <div class="w-full flex justify-end space-x-4">
                                            </button>
                                            <button wire:click="unlinkCard('{{ $card->id }}')"
                                                class="btn btn-warning">
                                                Yes unlink this card
                                            </button>
                                            <button
                                                onclick="unlink_card_modal_{{ str_replace('-', '_', $card->id) }}.close()"
                                                class="btn btn-ghost">
                                                Cancel
                                        </div>
                                    </div>
                                    <form method="dialog" class="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>



                                <button class="btn btn-error "
                                    onclick="delete_card_modal_{{ str_replace('-', '_', $card->id) }}.showModal()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z" />
                                    </svg>
                                </button>



                                <dialog id="delete_card_modal_{{ str_replace('-', '_', $card->id) }}" class="modal">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Delete Card</h3>
                                        <p class="py-4">Are you sure you want to delete this card?</p>
                                        <div class="w-full flex justify-end space-x-4">
                                            </button>
                                            <button wire:click="deleteCard('{{ $card->id }}')"
                                                class="btn btn-error">
                                                Yes delete this card
                                            </button>
                                            <button
                                                onclick="delete_card_modal_{{ str_replace('-', '_', $card->id) }}.close()"
                                                class="btn btn-ghost">
                                                Cancel

                                        </div>
                                    </div>
                                    <form method="dialog" class="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>

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

            <div class="p-4 rounded bg-base-200">
                <div class="text-2xl font-medium">
                    Delete User
                </div>

                <dialog id="my_modal_2" class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Delete User</h3>
                        <p class="py-4">Are you sure you want to delete this user.</p>
                        <div class="flex justify-end gap-4">
                            <button class="btn btn-error " wire:click="delete">
                                <span>Yes Delete User</span>
                            </button>
                            <button class="btn btn-ghost" onclick="my_modal_2.close()">
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                    <form method="dialog" class="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

                <p class="my-3">
                    After deleting the user all data related to this user will be lost.
                </p>
                <div class="flex justify-end ">
                    <button class="btn btn-error " onclick="my_modal_2.showModal()">
                        <span>Delete User</span>
                    </button>
                </div>
            </div>
        </div>

    </div>

</div>
</div>
