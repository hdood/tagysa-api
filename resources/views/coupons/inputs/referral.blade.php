<div class="form-control w-full max-w-xs">
    <label class="label">
        <span class="label-text">Strategy</span>
    </label>
    <select class="select select-primary w-full max-w-xs" wire:model='payload.type'>
        <option disabled selected>Select Coupon Type</option>

        @foreach ($this->payload['coupons'] as $name => $coupon)
            <option value='{{ $name }}'> {{ $name }} </option>
        @endforeach
    </select>


    {!! (new $this->payload['coupons'][$this->payload['type']]())->renderInput() !!}

    @isset($this->errors['targetUser'])
        <span class="text-error">
            {{$this->errors['targetUser']}}
        </span>
    @endisset
    <label class="label">
        <span class="label-text">Target User</span>
    </label>
    <input type="text" class="input input-primary input-borderd " placeholder="Seach for user by name"
        wire:model='payload.search'>
    <div class="max-h-sm overflow-y-scroll bg-base-200 flex flex-col gap-2 p-2 rounded-lg mt-4">
        @foreach ($this->payload['searchResult'] as $user)
            <label for="radio-{{ $user->id }}">
                <div
                    class="flex items-center gap-2 p-2 rounded-lg bg-base-100 [&:has(input:checked)]:border-2 border-primary cursor-pointer">
                    <img src="{{ $user->image }}" class="w-10 h-10 rounded-md" alt="">
                    <div class="flex flex-col ">
                        <span> {{ $user->name }} </span>
                        <span class="opacity-80 text-sm"> {{ $user->email }} </span>
                    </div>
                    <input type="radio" id="radio-{{ $user->id }}" name="target-user" value="{{ $user->id }}"
                        wire:model='payload.targetUser' class="radio radio-primary hidden" checked />
                </div>
            </label>
        @endforeach
    </div>


    <label class="label">
        <span class="label-text">EarnStrategy</span>
    </label>
    <select class="select select-primary w-full max-w-xs my-3" wire:model='payload.earn_strategy'>
        <option disabled selected>Select earn strategy</option>
        <option value="fixed">Fixed</option>
        <option value="percentage">Percentage</option>
    </select>

    @isset($this->errors['value'])
        <span class="text-error italic">
            {{$this->errors['value']}}
        </span>
    @endisset
    <span class="text-sm opacity-75">Earn Value</span>
    @if ($this->payload['earn_strategy'] == 'fixed')
        <div class="join">
            <input type="text" class="input input-primary join-item" wire:model='payload.earn_strategy_value'>
            <span class="btn join-item border-primary ">$</span>
        </div>
    @else
        <div class="join">
            <input type="text" class="input input-primary join-item"  wire:model='payload.earn_strategy_value'>
            <span class="btn join-item border-primary ">%</span>
        </div>
    @endif
</div>
