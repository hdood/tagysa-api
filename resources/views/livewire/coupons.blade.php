<div class="flex flex-col gap-2 ">


    @if(session("message"))
        <div class="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>
                {{session('message')}}
            </span>
        </div>    
    @endif
    <div class="w-full flex justify-end">
        <a href="{{route("admin.coupons.add")}}" class="btn btn-primary ">Create coupon</a>
    </div>
    <div class="bg-base-100 p-4 rounded-lg">
        <div class="flex gap-2">
            <select class="select select-bordered w-full max-w-xs" wire:model='type'>
                <option disabled selected>Coupon Type</option>
                <option value="">All</option>
                <option value="{{ App\Models\FixedAmountCoupon::class }}">Fixed Value</option>
                <option value="{{ App\Models\PercentageCoupon::class }}">Percentage</option>
                <option value="{{ App\Models\ReferralCoupon::class }}">Referral</option>
            </select>
            <input type="text" placeholder="Search By Code" class="input input-bordered input-primary w-full max-w-xs" wire:model='code' />
        </div>

        @if ($coupons->count() == 0)
            <div class="text-center mt-7">
                Nothing Found.
            </div>
        @else
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Date</th>
                        <th>Total Redeemers</th>
                        <th>Enabled</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->

                    @foreach ($coupons as $index => $coupon)
                        <tr class="hover:bg-base-200 cursor-pointer" onclick="edit_modal_{{$index}}.showModal()">
                            <th>
                                {{ $coupon->id }}
                            </th>
                            <td onclick="event.stopPropagation()" >
                                {{ $coupon->code }}
                                <button x-data='{copied : false}' @click="copied = true; setTimeout(() => copied = false, 2000)" class="btn btn-priamry btn-xs relative top-1" onclick="navigator.clipboard.writeText('{{$coupon->code}}');">
                                    <svg x-show="!copied" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Zm-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z"/></svg>
                                    <svg x-show="copied" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/></svg>
                                </button>
                            </td>
                            <td>
                                {{ $coupon->coupon->type }}
                            </td>
                            <td>
                                {{ $coupon->coupon->formatted_value }}
                            </td>
                            <td>
                                {{ $coupon->created_at }}
                            </td>
                            <td>
                                {{ $coupon->redeemers_count }}
                            </td>
                            <td>
                                <label class="cursor-pointer label flex " onclick="event.stopPropagation()">
                                    <input type="checkbox" class="toggle toggle-primary" wire:loading.remove
                                        wire:target='toggleEnable({{ $coupon->id }})'
                                        wire:click='toggleEnable({{ $coupon->id }})'
                                        {{ $coupon->enabled ? 'checked' : '' }} />
                                    <span class="loading loading-spinner loading-md " wire:loading
                                        wire:target='toggleEnable({{ $coupon->id }})'></span>
                                </label>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
                <!-- foot -->
                <tfoot>
                    <tr>
                        <th># </th>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Date</th>
                        <th>Total Redeemers</th>
                        <th>Enabled</th>
                    </tr>
                </tfoot>
            </table>
            {{ $coupons->links() }}

            @foreach ($coupons as $index => $coupon)
                <dialog id="edit_modal_{{$index}}" class="modal">
                    <div  class="modal-box">
                        @livewire('edit-coupon', ['coupon' => $coupon], key($coupon->id))
                    </div>
                    <form method="dialog" class="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            @endforeach
        @endif
    </div>
</div>
