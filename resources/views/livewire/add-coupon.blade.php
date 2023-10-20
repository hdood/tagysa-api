@php
    use MichaelRubel\Couponables\Models\Contracts\CouponContract;
@endphp

<div class="w-full flex flex-col  gap-4 bg-base-100 p-4 rounded-lg">

    <a href="{{ route('admin.coupons') }}" class=" hover:-translate-x-1 transition-transform cursor-pointer max-w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="w-10 h-10 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    </a>

    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Coupon Type</span>
        </label>
        <select class="select select-primary w-full max-w-xs" wire:model='type'>
            <option disabled selected>Select Coupon Type</option>

            @foreach ($this->coupons as $name => $coupon)
                <option value='{{ $name }}'> {{ $name }} </option>
            @endforeach
        </select>
    </div>

    {!! (new $this->coupons[$this->type]())->renderInput() !!}

    <div class="flex items-end gap-3">
        <div class="flex flex-col gap-1">
            <span class="text-sm">Limited?</span>
            <input type="checkbox" class="toggle toggle-primary" wire:model='limit' />
        </div>
        <input type="number" class="input input-primary input-bordered input-sm max-w-[5rem]" name="limit"
            wire:model='limitValue' {{ $this->limit ? '' : 'disabled' }}>
        @if ($this->limit && $this->limitValue != 0)
            <div class="flex flex-col gap-1">
                <span class="text-sm">Specific?</span>
                <input type="checkbox" class="toggle toggle-primary" wire:model='specific' />
            </div>
        @endif
    </div>

    @if ($this->specific && $this->limitValue != 0)

        @isset($this->errors["specificUsers"])
            <div class="text-error">
                {{$this->errors["specificUsers"]}}
            </div>
        @endisset
        @for ($i = 0; $i < $this->limitValue; $i++)
            <div class="bg-base-200 p-3 rounded-lg flex flex-col gap-2 items-center">
                <span>User {{ $i + 1 }}</span>
                <div class="flex gap-5">
                    <input type="text" class="input input-primary input-borderd max-w-[12rem]"
                        placeholder="Seach for users by name" wire:model='search.{{ $i }}'>
                    </div>
                        @isset($searchedUsers[$i])
                        <div class="p-2 bg-base-200 rounded-lg">
                                @foreach ($searchedUsers[$i] as $user)
                                    <label for="radio-{{ $user->id }}">
                                        <div
                                            class="flex items-center gap-2 p-2 rounded-lg bg-base-100 [&:has(input:checked)]:border-2 border-primary cursor-pointer">
                                            <img src="{{ $user->image }}" class="w-10 h-10 rounded-md" alt="">
                                            <div class="flex flex-col ">
                                                <span> {{ $user->name }} </span>
                                                <span class="opacity-80 text-sm"> {{ $user->email }} </span>
                                            </div>
                                            <input type="radio" id="radio-{{ $user->id }}" name="specific-user-{{$i}}" value="{{ $user }}"
                                                 class="radio radio-primary hidden" wire:model='specificUsers.{{ $i }}' checked />
                                        </div>
                                    </label>
                                @endforeach
                        </div>
                        @endisset
            </div>
        @endfor
    @endif

    <div class="form-control w-52">
        <label class="cursor-pointer label">
            <span class="label-text">Enabled</span>
            <input type="checkbox" class="toggle toggle-primary" wire:model='coupon.enabled' />
        </label>
    </div>

    <button class="btn btn-primary" wire:click='save'>
        Create Coupon
    </button>
</div>
