<div class="flex flex-col gap-4">
    <a href="javascript:history.back()" class=" hover:-translate-x-1 transition-transform cursor-pointer max-w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="w-10 h-10 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    </a>

    <div class="flex gap-10 justify-center">
        <div class="flex flex-col items-start gap-3 rounded h-60">
 
            <div class="p-5 flex flex-col items-start gap-3 bg-base-100 w-72 rounded max-h-fit">
                <div class="avatar">
                    <div class="w-24 rounded-lg">
                      <img src="{{$this->user->image}}" alt="user profile image"/>
                    </div>
                </div>
                <div class="space-y-2">
                    <h1 class="text-2xl font-medium">
                        {{ $this->user->name}}
                    </h1>
                    <h2>
                        {{$this->user->email}}
                    </h2>
                    <h3 class="text-sm">
                        {{$this->user->designation ?? "No Designation" }}
                    </h3>
                    <h3 class="text-sm">
                        joined in {{$this->user->created_at}}
                    </h3>
                </div>
            </div>
            <div class="bg-base-100 p-5 rounded w-72 ">
                <h1 class="text-xl font-medium my-3">Links</h1>

                <div class="space-y-3">
                    @forelse ($this->user->links as $link)
                        <div class="flex justify-between items-center gap-2  rounded bg-base-200 p-2">
                            <div>
                                <div class="uppercase text-xl font-medium ">
                                    {{$link->name}}
                                </div>
                                <div class="text-sm text-gray-600">
                                    {{$link->text}}
                                </div>
                            </div>
                            <div>
                                <a target="_blank" href="{{$link->url}}" class="btn btn-primary btn-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M4 3.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-.25a.75.75 0 0 1 1.5 0V8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.25a.75.75 0 0 1 0 1.5H4Zm2.75 0a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69L7.28 5.78a.75.75 0 0 1-1.06-1.06L7.44 3.5h-.69Z"/></svg>
                                </a>
                            </div>
                        </div>
                    @empty
                        <div class="text-center w-full">This user does not have any links</div>
                    @endforelse
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4">

            <div class="bg-base-100 p-5 rounded">
                    <div class="flex gap-3 items-center my-4" >
                        <span  class="font-medium">{{$this->user->id}}</span>
                        <button x-data='{copied : false}' @click="copied = true; setTimeout(() => copied = false, 2000)" class="btn btn-priamry btn-xs" onclick="navigator.clipboard.writeText('{{$this->user->id}}');">
                            <svg x-show="!copied" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Zm-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z"/></svg>
                            <svg x-show="copied" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/></svg>
                        </button>
                    </div>
        
                <h1 class="text-xl font-medium">Personal Infomations</h1>
                <div class="flex gap-3">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" wire:model='user.name' />
                        @error('user.name')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                      <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" wire:model='user.email' />
                        @error('user.email')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                </div>

                <div class="flex gap-3">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Designation</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" wire:model='user.designation' />
                        @error('user.designation')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                      <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Bio</span>
                        </label>
                        <textarea type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" wire:model='user.bio' ></textarea>
                        @error('user.bio')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                </div>
                <div class="flex gap-3">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" wire:model='user.full_name' />
                        @error('user.full_name')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                
                </div>
            </div>

            <div class="bg-base-100 p-5 rounded">
                <h1 class="text-xl font-medium">Contact Infomations</h1>
                <div class="flex gap-3">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Name</span>
                        </label>
                        <div class="join">
                            <x-country-code></x-country-code>
                            <input type="text" place    holder="Type here" class="input input-bordered  w-full  join-item" wire:model='user.phone' />
                        </div>
                        @error('user.phone')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                        @error('user.country_code')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                  
                </div>

                <div class="flex gap-3">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Website</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" wire:model='user.website' />
                        @error('user.website')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                </div>
                <div class="flex gap-3">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                          <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" wire:model='user.address' />
                        @error('user.address')
                            <label class="label text-red-500 italic text-sm">
                            <span class="">{{ $message }}</span>
                            </label>
                        @enderror
                      </div>
                </div>
            </div>
            <div class="bg-base-100 p-5 rounded">
                <h1 class="text-xl font-medium my-3">Media</h1>

                <div class="space-y-3">
                    @forelse ($this->user->medias as $media)
                        <div class="flex justify-between items-center px-4 p-1 rounded bg-base-200">
                            <div>
                                <div class="uppercase text-xl font-medium ">
                                    {{$media->name}}
                                </div>
                                <div class="text-sm text-gray-600">
                                    {{$media->url}}
                                </div>
                            </div>
                            <div>
                                <a target="_blank" href="{{json_decode($media->data)->url}}" class="btn btn-primary btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M4 3.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-.25a.75.75 0 0 1 1.5 0V8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.25a.75.75 0 0 1 0 1.5H4Zm2.75 0a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69L7.28 5.78a.75.75 0 0 1-1.06-1.06L7.44 3.5h-.69Z"/></svg>
                                </a>
                            </div>
                        </div>
                    @empty
                        <div class="text-center w-full">This user does not have any media</div>
                    @endforelse
                </div>
            </div>

            <div class="bg-base-100 p-5 rounded">
                <h1 class="text-xl font-medium my-3">Services</h1>

                <div class="space-y-3">
                    @forelse ($this->user->services as $service)
                        <div class="flex  items-center px-4 gap-4 p-1 rounded bg-base-200">
                            <div>
                                <img src="/services/{{$service->image}}" class="h-20 w-20 rounded" alt="">
                            </div>
                            <div>
                                <div class="uppercase text-xl font-medium ">
                                    {{$service->name}}
                                </div>
                                <div class="text-sm text-gray-600">
                                    {{$service->description}}
                                </div>
                            </div>

                            <div class="ml-auto">
                                {{ $service->price ? $service->price : '' }}
                            </div>
                        </div>
                    @empty
                        <div class="text-center w-full">This user does not have any services</div>
                    @endforelse
                </div>
            </div>

            <div class="bg-base-100 p-5 rounded">
                <h1 class="text-xl font-medium my-3">Testimonials</h1>

                <div class="space-y-3">
                    @forelse ($this->user->personal_testimonials as $testimonial)
                        <div class="flex  items-center px-4 gap-4 p-1 rounded bg-base-200">
                            <div>
                                <img src="/personal-testimonials/{{$testimonial->image}}" class="h-20 w-20 rounded" alt="">
                            </div>
                            <div>
                                <div class="uppercase text-xl font-medium ">
                                    {{$testimonial->user_name}}
                                </div>
                                <div class="text-sm text-gray-600">
                                    {{$testimonial->content}}
                                </div>
                            </div>

                            <div class="ml-auto">
                                Rating : {{ $testimonial->rating }}
                            </div>
                        </div>
                    @empty
                        <div class="text-center w-full">This user does not have any testimonials</div>
                    @endforelse
                </div>
            </div>

            <div class="p-4 flex justify-end rounded bg-base-100">
                <button class="btn btn-primary " wire:click='save' wire:target='save' wire:loading.class='disabled'>
                    <span wire:loading.remove wire:target='save'>Save changes</span>
                    <span class="loading loading-spinner loading-md" wire:loading wire:target='save'></span>
                </button>
            </div>
        </div>

    </div>
</div>
