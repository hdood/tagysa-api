<div>
    @if ($paginator->hasPages())
        @php(isset($this->numberOfPaginatorsRendered[$paginator->getPageName()]) ? $this->numberOfPaginatorsRendered[$paginator->getPageName()]++ : ($this->numberOfPaginatorsRendered[$paginator->getPageName()] = 1))

        <nav role="navigation" aria-label="Pagination Navigation" class="flex items-center justify-between px-3">

            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">


                <div>
                    <span class="relative z-0 inline-flex rounded-md shadow-sm">
                        <div class="join">
                            <span>
                                {{-- Previous Page Link --}}
                                @if ($paginator->onFirstPage())
                                    <button class="join-item btn disabled" type="button">«</button>
                                @else
                                    <button class="join-item btn" type="button"
                                        wire:click="previousPage('{{ $paginator->getPageName() }}')"
                                        dusk="previousPage{{ $paginator->getPageName() == 'page' ? '' : '.' . $paginator->getPageName() }}.after"
                                        rel="prev" aria-label="{{ __('pagination.previous') }}">«</button>
                                @endif
                            </span>



                            {{-- Pagination Elements --}}
                            @foreach ($elements as $element)
                                {{-- "Three Dots" Separator --}}
                                @if (is_string($element))
                                    <button class="join-item btn btn-disabled">...</button>
                                @endif

                                {{-- Array Of Links --}}
                                @if (is_array($element))
                                    @foreach ($element as $page => $url)
                                        @if ($page == $paginator->currentPage())
                                            <a class="join-item btn btn-primary">{{ $page }} </a>
                                        @else
                                            <a class="join-item btn"
                                                wire:click="gotoPage({{ $page }}, '{{ $paginator->getPageName() }}')"
                                                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                                aria-label="{{ __('Go to page :page', ['page' => $page]) }}">
                                                {{ $page }}
                                            </a>
                                        @endif
                                    @endforeach
                                @endif
                            @endforeach

                            <span>
                                {{-- Next Page Link --}}
                                @if ($paginator->hasMorePages())
                                    <button class="join-item btn" type="button"
                                        wire:click="nextPage('{{ $paginator->getPageName() }}')"
                                        dusk="nextPage{{ $paginator->getPageName() == 'page' ? '' : '.' . $paginator->getPageName() }}.after"
                                        rel="next" aria-label="{{ __('pagination.next') }}">»</button>
                                @else
                                    <button class="join-item btn disabled">»</button>
                                @endif
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div>
                <p class="text-sm text-gray-700 leading-5 px-4">
                    <span>{!! __('Showing') !!}</span>
                    <span class="font-medium">{{ $paginator->firstItem() }}</span>
                    <span>{!! __('to') !!}</span>
                    <span class="font-medium">{{ $paginator->lastItem() }}</span>
                    <span>{!! __('of') !!}</span>
                    <span class="font-medium">{{ $paginator->total() }}</span>
                    <span>{!! __('results') !!}</span>
                </p>
            </div>

        </nav>
    @endif
</div>
