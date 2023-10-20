<?php

namespace App\Http\Livewire;

use App\Mail\OrderConfirmed;
use App\Models\Order;
use App\States\CancelledToRefunded;
use App\States\PaidToCancelled;
use App\States\PaidToPreparing;
use App\States\PreparingToDelivering;
use Illuminate\Support\Facades\Mail;
use Livewire\Component;

class OrderEdit extends Component
{

    public Order $order;
    public $states;

    protected $rules = [
        'order.state' => 'required|string',
    ];

    public function mount()
    {
        $this->states = Order::getStatesFor('state');
    }
    public function render()
    {
        return view('livewire.order-edit');
    }
    public function confirmOrder()
    {

        $this->order->state->transition(new PaidToPreparing($this->order));
        $user = auth()->user();
        Mail::to($user)->send(new OrderConfirmed($user, $this->order));
        session()->flash("message", "Order confirmed successfully");
    }

    public function deliverOrder()
    {
        $this->order->state->transition(new PreparingToDelivering($this->order));
        session()->flash("message", "Order is on delivering successfully");
    }

    public function refundOrder()
    {
        $this->order->state->transition(new CancelledToRefunded($this->order));
        session()->flash("message", "Order refunded successfully");
    }

    public function cancelOrder()
    {
        $this->order->state->transition(new PaidToCancelled($this->order));
        session()->flash("message", "Order canceled and refunded successfully");
    }

    public function save()
    {
        $this->order->save();
        session()->flash("message", "order details updated successfully");
    }

    // function downloadLogo()
    // {
    //     $base64 = $this->order->logo;
    //     $image_info = getimagesize($base64);
    //     $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
    //     $path = public_path("file" . $extension);
    //     return response()->download($path)->deleteFileAfterSend();
    // }
}
