@isset($this->errors['value'])
    <span class="text-error italic">
        {{$this->errors['value']}}
    </span>
@endisset
<span class="text-sm opacity-75">Value</span>
<div class="join">
    <input type="number" class="input input-primary join-item" wire:model='payload.value'>
    <span class="btn join-item border-primary ">$</span>
</div>
