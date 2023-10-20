<div class="flex justify-center flex-col">
    <div class="flex flex-col gap-4 max-w-fit self-center">
        <div class="bg-base-100 p-4 rounded-md flex flex-col gap-8">

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
    
            @livewire($coupon->coupon->renderEdit(), ['coupon' => $coupon->coupon])
    
    
            <div class="flex p-2 gap-3 w-full items-end">
                <div class="flex flex-col gap-1">
                    <span class="text-sm">Limited?</span>
                    <input type="checkbox" class="toggle toggle-primary" wire:model='limited' />
                </div>
    
                @if ($this->limited)
                    <input type="number" class="input input-primary input-bordered input-sm max-w-[5rem]" min="{{$coupon->allowed_redeemers->count()}}" name="limit" wire:model='coupon.max_redeems' {{ $this->limited ? '' : 'disabled' }}>
                    <div class="flex flex-col gap-1">
                        <span class="text-sm">Specific?</span>
                        <input type="checkbox" class="toggle toggle-primary" wire:model='coupon.is_specific_users' />
                    </div>
                @endif
    
            </div>
            <div>
                @if ($coupon->is_specific_users && $this->limited)
                    @foreach ($coupon->allowed_redeemers as $user)
                        <div class="flex items-center gap-3 p-2 rounded-lg bg-base-100">
                            <img src="{{ $user->image }}" class="w-10 h-10 rounded-md" alt="">
                            <div class="flex flex-col ">
                                <span> {{ $user->name }} </span>
                                <span class="opacity-80 text-sm"> {{ $user->email }} </span>
                            </div>
                            <button class="btn btn-error btn-sm text-white " wire:click='detachRedeemer("{{$user->id}}")'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/></svg>
                            </button>
                        </div>
                    @endforeach
                    @for ($i = $coupon->allowed_redeemers->count(); $i < $coupon->max_redeems; $i++)
                        <div class="flex flex-col gap-2 my-2 ">
                            <span>User {{$i + 1}}</span>
                            <input type="text" class="input input-primary input-bordred" placeholder="Search by user name" wire:model='search.{{$i}}'>
                            @isset($searchResult[$i])
                            <div class="p-2 bg-base-200 rounded-lg">
                                    @foreach ($searchResult[$i] as $user)
                                        <label for="radio-{{ $user->id }}">
                                            <div
                                                class="flex items-center gap-2 p-2 rounded-lg bg-base-100 [&:has(input:checked)]:border-2 border-primary cursor-pointer">
                                                <img src="{{ $user->image }}" class="w-10 h-10 rounded-md" alt="">
                                                <div class="flex flex-col ">
                                                    <span> {{ $user->name }} </span>
                                                    <span class="opacity-80 text-sm"> {{ $user->email }} </span>
                                                </div>
                                                <input type="radio" id="radio-{{ $user->id }}" name="specific-user-{{$i}}" value="{{ $user->id }}"
                                                     class="radio radio-primary hidden" wire:model='specificUsers.{{$i}}' checked />
                                            </div>
                                        </label>
                                    @endforeach
                            </div>
                            @endisset
                        </div>
                    @endfor
                @endif
            </div>
    
        </div>
    </div>
    <div class="w-full flex justify-end gap-3">
        <button class="btn btn-error" wire:click='delete' wire:target='delete' wire:loading.class='disabled'>
            <span wire:loading.remove wire:target='delete'>Delete</span>
            <span class="loading loading-spinner loading-md" wire:loading wire:target='delete'></span>
        </button>
        <button class="btn btn-primary" wire:click='update' wire:target='update' wire:loading.class='disabled'>
            <span wire:loading.remove wire:target='update'>Save</span>
            <span class="loading loading-spinner loading-md" wire:loading wire:target='update'></span>
        </button>
    </div>
</div>
