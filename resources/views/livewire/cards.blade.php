@section('title')
    Cards
@endsection
<div>
    <div class="space-y-4">


        @if (session('info'))
            <div class="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ session('info') }}.</span>
            </div>
        @endif
        <div>
            <h1 class="text-3xl font-medium flex  items-center ">
                Cards
            </h1>
        </div>

        <!-- Open the modal using ID.showModal() method -->
        <div class="flex w-full justify-end"><button class="btn btn-primary" onclick="create_card_modal.showModal()">Add
                Card</button></div>
        <dialog id="create_card_modal" class="modal">
            <div class="modal-box">
                @livewire('create-card')
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
        <div class="overflow-x-auto bg-base-200 rounded-md p-4">
            @if ($cards->count() == 0)
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
                            <th>user</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        @foreach ($cards as $card)
                            <tr class="hover:bg-base-200 cursor-pointer">
                                <th>
                                    {{ $card->id }}
                                </th>
                                <td>
                                    {{ $card->name }}
                                </td>
                                <td>
                                    @if ($card->user)
                                        <div class="flex items-center space-x-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                    <img src="{{ $card->user->image }}"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-bold">
                                                    {{ $card->user->name }}
                                                </div>
                                                <div class="text-sm opacity-50">{{ $card->user->email }}</div>
                                            </div>
                                        </div>
                                    @else
                                        /
                                    @endif
                                </td>
                                <td class="flex items-center gap-2">
                                    <button class="btn btn-error"
                                        onclick="delete_card_modal_{{ str_replace('-', '_', $card->id) }}.showModal()">Delete</button>

                                    <button class="btn btn-info"
                                        onclick="edit_card_modal_{{ str_replace('-', '_', $card->id) }}.showModal()">Edit</button>

                                    <button x-data='{copied : false}'
                                        @click="copied = true; setTimeout(() => copied = false, 2000)" class="btn"
                                        onclick="navigator.clipboard.writeText('{{ env('FRONTEND_URL') . '/user/' . $card->id }}');">
                                        <svg x-show="!copied" xmlns="http://www.w3.org/2000/svg" width="20"
                                            height="20" viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Zm-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z" />
                                        </svg>
                                        <svg x-show="copied" xmlns="http://www.w3.org/2000/svg" width="20"
                                            height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                                        </svg>
                                    </button>


                                    <a href="data:image/svg;base64, {!! base64_encode(
                                        QrCode::eyeColor(0, 249, 56, 57, 75, 216, 208)->size(200)->generate(env('FRONTEND_URL') . '/user/' . $card->id),
                                    ) !!}" x-data='{copied : false}'
                                        @click="copied = true; setTimeout(() => copied = false, 2000)"
                                        download="{{ $card->name }}_{{ $card->id }}.svg" class="btn">
                                        <svg x-show="!copied" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z" />
                                        </svg>
                                        <svg x-show="copied" xmlns="http://www.w3.org/2000/svg" width="20"
                                            height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                                        </svg>
                                    </a>

                                    <dialog id="edit_card_modal_{{ str_replace('-', '_', $card->id) }}" class="modal">
                                        <div class="modal-box">
                                            @livewire('edit-card', ['card' => $card])
                                        </div>
                                        <form method="dialog" class="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>



                                    <dialog id="delete_card_modal_{{ str_replace('-', '_', $card->id) }}"
                                        class="modal">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Delete Card</h3>
                                            <p class="py-4">Are you sure you want to delete this card?</p>
                                            <div class="w-full flex justify-end space-x-4">
                                                <button
                                                    onclick="delete_card_modal_{{ str_replace('-', '_', $card->id) }}.close()"
                                                    class="btn btn-ghost">
                                                    Cancel
                                                </button>
                                                <button wire:click="deleteCard('{{ $card->id }}')"
                                                    class="btn btn-error">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                        <form method="dialog" class="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>

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
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
                {{ $cards->links() }}
            @endif
        </div>

    </div>
</div>
