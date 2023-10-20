<div class="px-4">
    <button class="btn btn-primary" wire:click='confirmOrder'>
        Confirm Order
    </button>
    <button class="btn bg-red-400 text-white" wire:click='cancelOrder'>
        <span class="loading loading-spinner loading-md" wire:loading wire:target='cancelOrder'></span>
        <span wire:loading.remove wire:target='cancelOrder'>Cancel and Refund order</span>
    </button>
</div>
