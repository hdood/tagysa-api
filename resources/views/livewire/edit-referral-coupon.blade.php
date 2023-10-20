<div>

    @livewire($this->coupon->strategy->renderEdit(), ['coupon' => $this->coupon->strategy])

    <div>
        <label class="label">
            <span class="label-text">Earn Strategy</span>
        </label>
        <select class="select select-primary w-full max-w-xs my-3" wire:model='coupon.earn_strategy'>
            <option disabled selected>Select earn strategy</option>
            <option value="fixed">Fixed</option>
            <option value="percentage">Percentage</option>
        </select>
    </div>

    <div>
        <div class="text-sm opacity-75">Earn Value</div>
        @if ($this->coupon->earn_strategy == 'fixed')
            <div class="join">
                <input type="text" class="input input-primary join-item" wire:model='coupon.earn_strategy_value'>
                <span class="btn join-item border-primary ">$</span>
            </div>
        @else
            <div class="join">
                <input type="text" class="input input-primary join-item"  wire:model='coupon.earn_strategy_value'>
                <span class="btn join-item border-primary ">%</span>
            </div>
        @endif
    </div>
    
</div>