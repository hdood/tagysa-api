<div class="flex flex-col gap-1">
    <span class="text-sm opacity-75">Value</span>
    <div class="join">
        <input type="number" class="input input-primary join-item" wire:model='coupon.value'>
        <span class="btn join-item border-primary ">₹</span>
    </div>
    @error('coupon.value')
        <span class="text-red-500 italic text-sm">
            {{$message}}
        </span>
    @enderror
</div>
