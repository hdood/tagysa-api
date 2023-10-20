@extends('layouts.app')


@section('title', 'Dashboard')


@section('content')
    @livewire('order-edit', ['order' => $order])
@endsection
